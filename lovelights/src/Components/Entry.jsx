import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import fireworksSound from "../assets/fireworks.mp3";
import "./Entry.css";

const Entry = ({ onStart }) => {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [playFireworks, { stop }] = useSound(fireworksSound, { volume: 0.5, loop: true });

  const message = "✨ Happy Diwali My Love! ✨";

  const handleStartCelebration = () => {
    setStarted(true);
    playFireworks();
  };

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typing = setInterval(() => {
      setText((prev) => prev + message[i]);
      i++;
      if (i === message.length-1) {
        clearInterval(typing);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [started]);

  // Random fireworks bursts
  useEffect(() => {
    if (!started) return;
    const fireworkInterval = setInterval(() => {
      const fw = document.createElement("div");
      fw.className = "firework-burst";
      fw.style.left = Math.random() * 100 + "%";
      fw.style.top = Math.random() * 60 + "%";
      document.body.appendChild(fw);
      setTimeout(() => fw.remove(), 2000);
    }, 800);

    return () => clearInterval(fireworkInterval);
  }, [started]);

  const handleNext = () => {
    stop();
    onStart();
  };

  return (
    <div className="entry-container">
      {!started && (
        <motion.div
          className="tap-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: started ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          onClick={handleStartCelebration}
        >
          <h2>🎆 Tap to Begin the Celebration 🎆</h2>
          <p>(Turn on your sound 🔊)</p>
        </motion.div>
      )}

      {started && (
        <>
          <div className="fireworks-bg"></div>
          <motion.h1
            className="diwali-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {text}
          </motion.h1>

          {showButton && (
            <motion.button
              className="start-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
            >
              🎇 Let’s Start 🎇
            </motion.button>
          )}
        </>
      )}
    </div>
  );
};

export default Entry;
