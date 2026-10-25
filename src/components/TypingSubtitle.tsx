/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';

interface TypingSubtitleProps {
  reducedMotion?: boolean | null;
}

interface TextSegment {
  text: string;
  isStrong: boolean;
}

const SEGMENTS: TextSegment[] = [
  { text: 'Especialista em ', isStrong: false },
  { text: 'alongamento em fibra de vidro', isStrong: true },
  { text: ' e ', isStrong: false },
  { text: 'esmaltação em gel de alto padrão', isStrong: true },
  {
    text: '. Estruturas finas, acabamento espelhado e cuidado minucioso com a saúde da sua lâmina ungueal.',
    isStrong: false,
  },
];

const FULL_TEXT = SEGMENTS.map((s) => s.text).join('');
const TOTAL_CHARS = FULL_TEXT.length;

export const TypingSubtitle: React.FC<TypingSubtitleProps> = ({ reducedMotion = false }) => {
  const [charCount, setCharCount] = useState<number>(reducedMotion ? TOTAL_CHARS : 0);
  const [showCursor, setShowCursor] = useState<boolean>(!reducedMotion);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // If user prefers reduced motion, render complete text immediately
    if (reducedMotion) {
      setCharCount(TOTAL_CHARS);
      setShowCursor(false);
      return;
    }

    setCharCount(0);
    setShowCursor(true);

    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex >= TOTAL_CHARS) {
        // Typing finished; keep cursor blinking softly for 1.6s then gracefully remove
        timerRef.current = setTimeout(() => {
          setShowCursor(false);
        }, 1600);
        return;
      }

      currentIndex += 1;
      setCharCount(currentIndex);

      const currentChar = FULL_TEXT[currentIndex - 1];

      // Elegant, artisanal typing cadence with breathing room for punctuation
      let delay = 28;
      if (currentChar === '.' || currentChar === '!') {
        delay = 240; // Paused breathing room after sentence boundary
      } else if (currentChar === ',') {
        delay = 170; // Soft pause after comma
      } else if (currentChar === ' ') {
        delay = 38;
      }

      timerRef.current = setTimeout(typeNextChar, delay);
    };

    // Soft initial delay (420ms) so headline animation settles first
    timerRef.current = setTimeout(typeNextChar, 420);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [reducedMotion]);

  let accumulated = 0;

  return (
    <p
      className="text-[#E8D9D4]/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light min-h-[4.75rem] sm:min-h-[4.2rem]"
      aria-label={FULL_TEXT}
    >
      {SEGMENTS.map((segment, idx) => {
        const segStart = accumulated;
        const segEnd = accumulated + segment.text.length;
        accumulated = segEnd;

        if (charCount < segStart) return null;

        const visibleSegmentText = segment.text.slice(0, charCount - segStart);

        if (segment.isStrong) {
          return (
            <strong key={idx} className="text-[#F7F3F1] font-semibold">
              {visibleSegmentText}
            </strong>
          );
        }

        return <span key={idx}>{visibleSegmentText}</span>;
      })}

      {showCursor && (
        <span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1.1em] bg-[#D8A0A4] ml-1 align-baseline animate-pulse shadow-[0_0_8px_rgba(216,160,164,0.7)]"
        />
      )}
    </p>
  );
};
