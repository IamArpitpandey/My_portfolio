import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import ArpitImage from "../assets/Arpit.jpg";

export const HeroSection = () => {
  const imgRef = useRef(null);

  const handleMove = (e) => {
    const el = imgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Normalize to [-1, 1]
    const nx = (x - midX) / midX;
    const ny = (y - midY) / midY;

    // Compute small translation values (adjust multiplier for stronger/weaker effect)
    const translateX = nx * 8; // px
    const translateY = ny * -8; // invert Y for natural feel

    // Apply transform (translate + slight scale)
    el.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.03)`;
  };

  const handleLeave = () => {
    const el = imgRef.current;
    if (!el) return;
    el.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-10"
    >
      {/* LEFT TEXT SECTION */}
      <div className="container max-w-2xl mx-auto text-center md:text-left z-10">
        <div className="space-y-6">
          {/* NAME */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Arpit
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Pandey
            </span>
          </h1>

          {/* SUB TEXT */}
          <p className="text-lg md:text-xl text-muted-foreground mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Full Stack & AI Developer building real-world products using
            React, Next.js, Node.js, MySQL, MongoDB & AI/Gemini integrations.
            Passionate about creating modern, scalable and user-friendly web experiences.
          </p>

          {/* BUTTON */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION (circle + cursor-follow) */}
      <div className="flex justify-center md:justify-end w-full md:w-auto mb-10 md:mb-0">
        <img
          ref={imgRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          src={ArpitImage}
          alt="Arpit Pandey"
          className="w-48 md:w-64 lg:w-80 rounded-full shadow-2xl border border-gray-800 object-cover cursor-pointer transition-transform duration-300"
          style={{ transform: "translate(0px, 0px) scale(1)" }}
        />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
