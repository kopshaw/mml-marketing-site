// Typewriter cycling through 12 brand headlines. Hydrates on idle so initial paint
// shows the static fallback headline below (good for SEO).
import { useEffect, useState } from 'react';

const HEADLINES = [
  'revenue. by. design.',
  'growth. by. design.',
  'scale. by. design.',
  'profit. by. design.',
  'freedom. by. design.',
  'success. by. design.',
  'designed. to. scale.',
  'structured. for. scale.',
  'revenue. on. repeat.',
  'growth. on. purpose.',
  'profit. with. precision.',
  'scaled. with. intent.',
];

export default function HeroTypewriter() {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState(HEADLINES[0]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const next = setInterval(() => {
      setCurrent((prev) => {
        let n;
        do {
          n = Math.floor(Math.random() * HEADLINES.length);
        } while (n === prev);
        return n;
      });
    }, 7000); // dwell time on each finished headline before swapping
    return () => clearInterval(next);
  }, []);

  // Type out the current headline (90ms/char ≈ confident, deliberate cadence)
  useEffect(() => {
    setDone(false);
    setText('');
    const target = HEADLINES[current];
    let i = 0;
    const id = setInterval(() => {
      i++;
      setText(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 90);
    return () => clearInterval(id);
  }, [current]);

  return (
    <span>
      {text}
      {!done && <span className="animate-pulse">|</span>}
    </span>
  );
}
