import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useSound from "use-sound";
import bgmsoft from "../assets/mixkit-classical-vibes-5-688.mp3";
import "./Wishes.css";

const Wishes = ({ onStart }) => {
  const [playBgm, { stop }] = useSound(bgmsoft, { volume: 0.4, loop: true });

  // Play background music on mount, stop on unmount
  useEffect(() => {
    playBgm();
    return () => stop();
  }, [playBgm, stop]);

  const handleNext = () => {
      stop(); // stop music
      onStart(); // call parent function
  };

  return (
    <motion.div
      className="scene wish-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Fireworks animation */}
      <div className="fireworks-container">
        <DotLottieReact
          src="https://lottie.host/200f050c-90cc-4aa4-bcc5-f2bc69d985b4/yJnPo3F4jf.lottie"
          loop
          autoplay
          className="fireworks-lottie"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Original wishes content */}
      <div className="wish-text">
        <h1>You light up my life brighter than a thousand firecrackers ✨</h1>
        <h4>"I hope this is the last Diwali of your <br/>struggles, <br/>and may the next one bring the success <br/>you've been waiting for.✨
        <br/><br/>May your hard days turninto peaceful<br/>nights,<br/>your dream turn into reality,<br/>and your light shine brighter than ever<br/>before 🪔💫 <br/><br/>You've come so far--the next chapter is<br/>yours 🌙"</h4>
        <h3>Happy Diwali Vky Maa 💛</h3>

        {/* Entry-style button functionality */}
        <motion.button
          className="btn-glow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
        >
          Open  🎁
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Wishes;

