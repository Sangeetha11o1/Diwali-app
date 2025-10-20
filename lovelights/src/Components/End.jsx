import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import endingMusic from "../assets/mixkit-classical-vibes-5-688.mp3";
import './End.css'

// Small doodle-style words/phrases
const doodleTexts = [
  "love", "forever", "sweetheart", "memories", "hugs", "smile", 
  "dream", "cherish", "you & me", "always", "my heart", "💌", "xoxo"
];

const End = () => {
  const [play] = useSound(endingMusic, { volume: 0.3, loop: true });

  useEffect(() => {
    play();
  }, []);

  return (
    <motion.div
      className="scene ending-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Doodle background */}
      <div className="doodle-background">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="doodle-item"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 10}px`,
              opacity: 0.2 + Math.random() * 0.3,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontFamily: "Cursive, 'Comic Sans MS', sans-serif"
            }}
          >
            {doodleTexts[Math.floor(Math.random() * doodleTexts.length)]}
          </span>
        ))}
      </div>

      <div className="night-bg">
        <h2>No matter how dark it gets,</h2>
        <h3>Your light always finds me 🌙</h3>
        <h2>Good things will happen soon...Just smile 💛</h2>
        <h1>Happy Diwali, Vichumaa 💫</h1>
        <p>— From Sangeetha 💌</p>
      </div>
    </motion.div>
  );
};

export default End;
