"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  speed?: number;
}

export default function AnimatedText({ 
  text, 
  className, 
  as: Component = "span",
  speed = 30 
}: AnimatedTextProps) {
  const [display, setDisplay] = useState(text);
  const [isErasing, setIsErasing] = useState(false);
  const targetTextRef = useRef(text);

  useEffect(() => {
    if (text !== targetTextRef.current) {
      targetTextRef.current = text;
      setIsErasing(true);
    }
  }, [text]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isErasing) {
      // Erasing phase
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay((prev) => prev.slice(0, -1));
        }, speed / 2); // Erase faster than type
      } else {
        setIsErasing(false);
      }
    } else {
      // Typing phase
      if (display !== targetTextRef.current) {
        // If the current display is not a substring of the target (e.g. we switched target mid-typing), reset or handle it.
        // But since we erase first, display starts at "" which is a substring of everything.
        // We just need to append the next character from targetTextRef.current
        
        const nextCharIndex = display.length;
        if (nextCharIndex < targetTextRef.current.length) {
            timeout = setTimeout(() => {
                setDisplay(targetTextRef.current.slice(0, nextCharIndex + 1));
            }, speed);
        } else if (display.length > targetTextRef.current.length) {
            // Should not happen if we erased, but just in case
            setDisplay(targetTextRef.current);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [display, isErasing, speed]);

  return <Component className={className}>{display}</Component>;
}
