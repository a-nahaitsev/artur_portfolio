// @ts-nocheck
import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef<HTMLDivElement>(null!);
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };
    const animateEvent = requestAnimationFrame(animate);

    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseOverHandler = (event: MouseEvent) => {
      if (!event.target) return;

      if (
        event.target.tagName.toLowerCase() === "button" ||
        event.target.parentElement.tagName.toLowerCase() === "button" ||
        event.target.tagName.toLowerCase() === "input" ||
        event.target.tagName.toLowerCase() === "textarea" ||
        event.target.tagName.toLowerCase() === "a"
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mouseover", mouseOverHandler);

    return () => {
      document.removeEventListener("mouseover", mouseOverHandler);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
          hoverButton
            ? "bg-transparent border-2 border-indigo-900 w-5 h-5"
            : "bg-indigo-500 w-3 h-3"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );
};
