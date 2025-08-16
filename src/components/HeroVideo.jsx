import React, { useRef, useEffect } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction");
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover md:object-cover sm:h-[300px] md:h-full"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;