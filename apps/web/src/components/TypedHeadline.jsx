"use client";
import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const LINES = [
    { prefix: 'Intelligent ', word: 'Infrastructure.' },
    { prefix: 'Unbreakable ', word: 'Security.' },
    { prefix: 'Apps That ', word: 'Think.' },
];

const CHAR_MS = 42;

const TypedHeadline = ({ className = '' }) => {
    const reduce = useReducedMotion();
    const total = LINES.reduce((acc, l) => acc + l.prefix.length + l.word.length, 0);
    const [count, setCount] = useState(reduce ? total : 0);

    useEffect(() => {
        if (reduce) return undefined;
        let n = 0;
        const id = setInterval(() => {
            n += 1;
            setCount(n);
            if (n >= total) clearInterval(id);
        }, CHAR_MS);
        return () => clearInterval(id);
    }, [reduce, total]);

    // Determine which line is currently being typed
    let acc = 0;
    let activeLine = LINES.length - 1;
    for (let i = 0; i < LINES.length; i += 1) {
        const len = LINES[i].prefix.length + LINES[i].word.length;
        if (count < acc + len) {
            activeLine = i;
            break;
        }
        acc += len;
    }

    let consumed = 0;

    return (
        <h1
            className={`font-display font-bold leading-[1.08] tracking-tight text-white ${className}`}
        >
            {LINES.map((line, i) => {
                const lineLen = line.prefix.length + line.word.length;
                const typedInLine = Math.max(0, Math.min(count - consumed, lineLen));
                consumed += lineLen;
                const prefixTyped = Math.min(typedInLine, line.prefix.length);
                const wordTyped = Math.max(0, typedInLine - line.prefix.length);
                const showCursor = i === activeLine && count < total;

                return (
                    <span key={i} className="block">
                        <span>{line.prefix.substr(0, prefixTyped)}</span>
                        {wordTyped > 0 && (
                            <span className="text-gradient">{line.word.substr(0, wordTyped)}</span>
                        )}
                        {showCursor && (
                            <span className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.12em] animate-pulse rounded-full bg-pulse" />
                        )}
                    </span>
                );
            })}
        </h1>
    );
};

export default TypedHeadline;

export { TypedHeadline };
