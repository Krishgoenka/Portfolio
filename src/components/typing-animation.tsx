
"use client";

import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  onComplete?: () => void;
  style?: React.CSSProperties; // Added style prop
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 100,
  className = "",
  cursorClassName = "typing-cursor",
  onComplete,
  style // Destructure style prop
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={`${className} ${cursorClassName}`} style={style}> {/* Apply style prop */}
      {displayedText}
    </span>
  );
};

export default TypingAnimation;
