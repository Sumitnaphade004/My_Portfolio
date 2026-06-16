import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUpLong size={20} />
      </button>
    )
  );
}

export default ScrollToTop;