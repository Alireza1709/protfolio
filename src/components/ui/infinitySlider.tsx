"use client";

import {
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface SliderProps {
  children: ReactNode;
  speed?: number;
  hoverSpeed?: number;
  gap?: number;
  className?: string;
}

const IfinitySlider = ({
  children,
  speed = 45,
  hoverSpeed = 0.15,
  gap = 20,
  className = "",
}: SliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef(0);

  const currentSpeedRef = useRef(speed);
  const targetSpeedRef = useRef(speed);

  const singleSetWidthRef = useRef(0);

  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  /*
   * اندازه یک مجموعه کامل
   */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const measure = () => {
      const children = Array.from(
        track.children
      ) as HTMLElement[];

      if (!children.length) return;

      let width = 0;

      children.forEach((child) => {
        width += child.getBoundingClientRect().width;
      });

      width += gap * (children.length - 1);

      singleSetWidthRef.current = width;
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(track);

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children, gap]);

  /*
   * Animation
   */
  useEffect(() => {
    const animate = (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const deltaTime =
        (time - lastTimeRef.current) / 1000;

      lastTimeRef.current = time;

      /*
       * Smooth speed
       */
      currentSpeedRef.current +=
        (targetSpeedRef.current -
          currentSpeedRef.current) *
        Math.min(deltaTime * 5, 1);

      /*
       * Move
       */
      positionRef.current +=
        currentSpeedRef.current * deltaTime;

      /*
       * Infinite loop
       */
      const singleWidth =
        singleSetWidthRef.current;

      if (
        singleWidth > 0 &&
        positionRef.current >= singleWidth
      ) {
        positionRef.current -= singleWidth;
      }

      /*
       * GPU
       */
      if (trackRef.current) {
        trackRef.current.style.transform =
          `translate3d(-${positionRef.current}px, 0, 0)`;
      }

      rafRef.current =
        requestAnimationFrame(animate);
    };

    rafRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      lastTimeRef.current = 0;
    };
  }, []);

  /*
   * Hover
   */
  const handleMouseEnter = () => {
    targetSpeedRef.current =
      speed * hoverSpeed;
  };

  const handleMouseLeave = () => {
    targetSpeedRef.current = speed;
  };

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        className="
          flex
          w-max
          items-stretch
          will-change-transform
        "
        style={{
          gap: `${gap}px`,
        }}
      >
        {/* Original */}
        {children}

        {/* Copy 1 */}
        {children}

        {/* Copy 2 */}
        {children}

        {/* Copy 3 */}
        {children}
      </div>
    </div>
  );
};

export default IfinitySlider;