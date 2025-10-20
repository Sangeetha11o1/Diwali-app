import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import giftBox from "../assets/gift_PNG5965.png";
import useSound from "use-sound";
import heartBg from "../assets/mixkit-classical-vibes-5-688.mp3";
import confetti from "canvas-confetti";
import './Gift.css';

const Gift = ({ onStart }) => {
  const [opened, setOpened] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [play] = useSound(heartBg, { volume: 0.3 });

  useEffect(() => {
    // playSound(); // optional: play sound on mount
    // simulate "text loading" delay
    const timer = setTimeout(() => setShowButton(true), 2500); // show button after 1.5s
    return () => {
      clearTimeout(timer);
      stop(); // stop sound on unmount
    };
  }, []);

  const handleOpen = () => {
    if (!opened) {
      setOpened(true);
      play();
      confetti();
      // setTimeout(onStart, 5000);
    }
  };

  const handleNext = ()=>{
    stop();
    onStart();
  }
  return (
    <motion.div
      className="scene gift-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        src={giftBox}
        alt="gift"
        className={`gift-box ${opened ? "opened" : ""}`}
        onClick={handleOpen}
      /><h6>click me</h6>
      {opened && (
        <motion.div
          className="gift-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>
            “This Diwali, I don’t need lights or sweets — I just need you by my
            side. You are my forever light 💖”
          </p>
        </motion.div>
      )}
      {showButton && (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext} 
        className="open-memory-btn"// triggers parent navigation
      >
        Open Memory 📝
      </motion.button>
      )}
    </motion.div>
  );
};

export default Gift;
