// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import useSound from "use-sound";
// import "./Memory.css";
// import memoryChime from "../assets/Pookal Pookum Tharunam BGM Ringtone.mp3";
// import memory1 from "../assets/6318629743145716714.jpg";
// import memory2 from "../assets/6318629743145716715.jpg";
// import memory3 from "../assets/6318629743145716716.jpg";
// import memory4 from "../assets/6318629743145716717.jpg";
// import memory5 from "../assets/6318629743145716718.jpg";

// const photos = [
//   { src: memory1, caption: "Our Smile 💕" },
//   { src: memory2, caption: "My Favorite Moment" },
//   { src: memory3, caption: "Forever You & Me" },
//   { src: memory4, caption: "Always" },
//   { src: memory5, caption: "Love You" },
// ];

// const Memory = ({ onStart }) => {
//   const [play, { stop }] = useSound(memoryChime, { volume: 0.3 });

//   useEffect(() => {
//     play();
//     return () => stop();
//   }, [play, stop]);

//   const handleNext = () => {
//     stop();
//     onStart();
//   };

//   return (
//     <motion.div
//       className="scene memories-scene"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <h2>Our Moments Together 💫</h2>

//       {/* Floating hearts & text layer */}
//   <div className="floating-layer">
//     {Array.from({ length: 20 }).map((_, i) => (
//       <div
//         key={i}
//         className={`float-item float-${i % 5}`}
//         style={{
//           left: `${Math.random() * 95}%`,
//           animationDuration: `${5 + Math.random() * 5}s`,
//           fontSize: `${12 + Math.random() * 14}px`,
//           opacity: 0.6 + Math.random() * 0.4,
//         }}
//       >
//         {["❤️", "💌", "✨", "💕", "📖"][Math.floor(Math.random() * 5)]}
//       </div>
//     ))}
//   </div>

//       <div className="memory-carousel-wrapper">
//   <div className="memory-carousel">
//     {[...photos, ...photos].map((p, i) => (
//       <div className="memory-card" key={i}>
//         <div className="memory-inner">
//           <div className="memory-front">
//             <p>{p.caption}</p>
//           </div>
//           <div className="memory-back">
//             <img src={p.src} alt={p.caption} />
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//       <button className="btn-glow" onClick={handleNext}>
//         Continue 💖
//       </button>
//     </motion.div>
//   );
// };

// export default Memory;



import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";
import "./Memory.css";
import memoryChime from "../assets/Pookal Pookum Tharunam BGM Ringtone.mp3";
import memory1 from "../assets/6318629743145716714.jpg";
import memory3 from "../assets/6318629743145716715.jpg";
import memory2 from "../assets/6318629743145716716.jpg";
import memory5 from "../assets/6318629743145716717.jpg";
import memory4 from "../assets/6318629743145716718.jpg";

const photos = [
  { src: memory1, caption: "Our Smile 💕" },
  { src: memory2, caption: "My Favorite Moment" },
  { src: memory3, caption: "Forever You & Me" },
  { src: memory4, caption: "Always" },
  { src: memory5, caption: "Love You" },
];

const Memory = ({ onStart }) => {
  const [play, { stop }] = useSound(memoryChime, { volume: 0.3 });

  // Track flipped state per card
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    play();
    return () => stop();
  }, [play, stop]);

  const handleNext = () => {
    stop();
    onStart();
  };

  // Toggle flip state for mobile tap
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.div
      className="scene memories-scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Our Moments Together 💫</h2>
      <h5>I may never be able to tell u this...but even on the bad days and even when we don't understand each other...I still choose you...💕<br/>not beacuse its easy...Love isn't about being perfect...Its about holding on..✨<br/>When everything feels like its falling apart...<br/>It's about choosing the same person...again and again...❤️<br/>Even though silence..confusion...and pain..<br/>And no matter how hard it gets....I will always choose you...💌</h5>
      <h6>Tap the cards...!</h6>

      {/* Floating hearts/text layer */}
      <div className="floating-layer">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`float-item float-${i % 5}`}
            style={{
              left: `${Math.random() * 95}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 14}px`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          >
            {["❤️", "💌", "✨", "💕", "📖"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="memory-carousel-wrapper">
        <div className="memory-carousel">
          {[...photos, ...photos].map((p, i) => (
            <div
              key={i}
              className={`memory-card ${
                flippedCards[i] ? "active" : ""
              }`}
              onClick={() => toggleFlip(i)} // toggle flip on each tap
            >
              <div className="memory-inner">
                <div className="memory-front">
                  <p>{p.caption}</p>
                </div>
                <div className="memory-back">
                  <img src={p.src} alt={p.caption} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-glow" onClick={handleNext}>
        Continue 💖
      </button>
    </motion.div>
  );
};

export default Memory;

