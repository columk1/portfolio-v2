'use client';

import { type ReactNode, type HTMLAttributes, type ElementType, useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  replacementText?: string | string[];
  skipInitialTyping?: boolean;
  leadingText?: string;
  trailingText?: string;
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  reserveSpace?: boolean;
}

const TextType = ({
  text,
  replacementText,
  skipInitialTyping = false,
  leadingText = '',
  trailingText = '',
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  reserveSpace = false,
  ...props
}: TextTypeProps & HTMLAttributes<HTMLElement>) => {
  const textArray = useMemo(() => {
    const baseArray = Array.isArray(text) ? text : [text];
    if (replacementText) {
      const replacementArray = Array.isArray(replacementText) ? replacementText : [replacementText];
      return [...baseArray, ...replacementArray];
    }
    return baseArray;
  }, [text, replacementText]);

  const initialText = useMemo(() => {
    if (skipInitialTyping && textArray.length > 0) {
      return textArray[0];
    }
    return '';
  }, [skipInitialTyping, textArray]);

  const [displayedText, setDisplayedText] = useState(initialText);
  const [currentCharIndex, setCurrentCharIndex] = useState(skipInitialTyping ? textArray[0]?.length || 0 : 0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [hasStartedTyping, setHasStartedTyping] = useState(skipInitialTyping);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return undefined;
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          const isLastText = currentTextIndex === textArray.length - 1;
          const hasReplacement = replacementText !== undefined;

          // Stop after replacement text is typed if not looping
          if (isLastText && hasReplacement && !loop) {
            return;
          }

          if (isLastText && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => { }, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
              setHasStartedTyping(true);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    // Skip initial typing animation if text was pre-loaded
    if (skipInitialTyping && !hasStartedTyping && currentTextIndex === 0) {
      // Wait for pause, then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setHasStartedTyping(true);
      }, pauseDuration + initialDelay);
    } else if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed,
    hasStartedTyping,
    replacementText,
    skipInitialTyping
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  const currentFullText = textArray[currentTextIndex];

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      style: reserveSpace ? { position: 'relative', display: 'inline-block' } : undefined,
      ...props
    },
    reserveSpace && (
      <span style={{ visibility: 'hidden' }} aria-hidden="true">
        {leadingText}{currentFullText}{trailingText}
      </span>
    ),
    <span
      className="text-type__content"
      style={{
        ...(getCurrentTextColor() && { color: getCurrentTextColor() }),
        ...(reserveSpace ? { position: 'absolute', top: 0, left: 0 } : {})
      }}
    >
      {leadingText}{displayedText}
      {showCursor && (
        <span
          ref={cursorRef}
          className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
        >
          {cursorCharacter}
        </span>
      )}
      {trailingText}
    </span>,
    !reserveSpace && showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
