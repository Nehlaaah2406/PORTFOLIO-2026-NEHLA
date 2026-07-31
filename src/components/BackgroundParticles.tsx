import React, { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        // High luxury light editorial theme, subtle branding orange particles or soft gray
        this.color =
          Math.random() > 0.85
            ? "rgba(232, 80, 20, 0.25)" // Brand Orange
            : "rgba(51, 51, 51, 0.08)"; // Soft Dark Gray (#333333)
      }

      update() {
        // Linear movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse reaction (subtle push away)
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          this.x -= (dx / distance) * force * 1.5;
          this.y -= (dy / distance) * force * 1.5;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const count = Math.min(Math.floor((width * height) / 14000), 120);

    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }

    // Smooth mouse interpolation
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Main animation loop
    const animate = () => {
      // Interpolate mouse coordinates for fluid motion lag
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Web style ambient glow on background
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "#F9F9F9");
      gradient.addColorStop(1, "#F3EDE4");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and update particles
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw subtle background glowing orbs (Branding Orange)
      ctx.beginPath();
      ctx.arc(width * 0.8, height * 0.2, 450, 0, Math.PI * 2);
      const orbGrad1 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.2,
        10,
        width * 0.8,
        height * 0.2,
        450
      );
      orbGrad1.addColorStop(0, "rgba(232, 80, 20, 0.08)");
      orbGrad1.addColorStop(1, "rgba(249, 249, 249, 0)");
      ctx.fillStyle = orbGrad1;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(width * 0.2, height * 0.8, 500, 0, Math.PI * 2);
      const orbGrad2 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.8,
        10,
        width * 0.2,
        height * 0.8,
        500
      );
      orbGrad2.addColorStop(0, "rgba(232, 80, 20, 0.06)");
      orbGrad2.addColorStop(1, "rgba(249, 249, 249, 0)");
      ctx.fillStyle = orbGrad2;
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 pointer-events-none"
      id="bg-particles"
    />
  );
}
