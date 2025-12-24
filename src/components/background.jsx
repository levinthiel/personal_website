"use client";

import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Background() {
  const getBounds = () => ({
    minX: -200,
    minY: -200,
    maxX: window.innerWidth + 200,
    maxY: window.innerHeight + 200,
  });

  const random = (min, max) => Math.random() * (max - min) + min;

  const circles = useRef([]);

  const bounds = useRef(
    typeof window !== "undefined" ? getBounds() : null
  );

  if (circles.current.length === 0 && typeof window !== "undefined") {
    const { maxX, maxY } = getBounds();

    circles.current = [
      { r: 170, xSpeed: 0.2, ySpeed: 0.34 },
      { r: 90, xSpeed: -0.5, ySpeed: 0.5 },
      { r: 120, xSpeed: 0.3, ySpeed: 0.6 },
      { r: 140, xSpeed: -0.1, ySpeed: 0.6 },
      { r: 70, xSpeed: -0.2, ySpeed: 0.3 },
    ].map((c) => ({
      ...c,
      x: random(0, maxX),
      y: random(0, maxY),
    }));
  }

  const circleRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  useEffect(() => {
    const onResize = () => {
      bounds.current = getBounds();
    };

    window.addEventListener("resize", onResize);

    const animate = () => {
  circles.current.forEach((circle, i) => {
    // base movement
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;

    // mouse attraction
    if (mouse.current.active) {
      const dx = mouse.current.x - circle.x;
      const dy = mouse.current.y - circle.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      const influenceRadius = 300;
      if (dist < influenceRadius) {
        const strength = (1 - dist / influenceRadius) * 0.9;

        circle.x += (dx / dist) * strength;
        circle.y += (dy / dist) * strength;
      }
    }

    // bounds
    if (
      circle.x < bounds.current.minX - circle.r ||
      circle.x > bounds.current.maxX + circle.r
    ) {
      circle.xSpeed *= -1;
    }

    if (
      circle.y < bounds.current.minY - circle.r ||
      circle.y > bounds.current.maxY + circle.r
    ) {
      circle.ySpeed *= -1;
    }

    // apply to SVG
    const el = circleRefs.current[i];
    if (el) {
      el.setAttribute("cx", circle.x);
      el.setAttribute("cy", circle.y);
    }
  });

  requestAnimationFrame(animate);
};


    requestAnimationFrame(animate);

    return () => window.removeEventListener("resize", onResize);
  }, []); 

  

useEffect(() => {
  const mq = window.matchMedia("(min-width: 769px)");

  const updateMouse = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    mouse.current.active = true;
  };

  if (mq.matches) {
    window.addEventListener("mousemove", updateMouse);
  }

  const onChange = () => {
    mouse.current.active = mq.matches;
  };

  mq.addEventListener("change", onChange);

  return () => {
    window.removeEventListener("mousemove", updateMouse);
    mq.removeEventListener("change", onChange);
  };
}, []);

  return (
    <BackgroundContainer>
      <MetaSvg>
        <defs>
          <filter id="gooify" width="400%" x="-150%" height="400%" y="-150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 25 -10
              "
            />
          </filter>

          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--pink)" />
          </linearGradient>
        </defs>

        <g filter="url(#gooify)">
          {circles.current.map((circle, i) => (
            <circle
              key={i}
              ref={(el) => (circleRefs.current[i] = el)}
              cx={circle.x}
              cy={circle.y}
              r={circle.r}
              fill="url(#blobGradient)"
            />
          ))}
        </g>
      </MetaSvg>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`;

const MetaSvg = styled.svg`
  position: absolute;
  width: 110vw;
  height: 110vh;
  top: -20px;
  left: -20px;
`;