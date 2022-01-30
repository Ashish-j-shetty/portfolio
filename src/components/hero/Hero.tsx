import React from "react";

import ScrollAnimation from "react-animate-on-scroll";

export default function Hero() {
  return (
    <div className="flex justify-between pt-15P gap-32 ">
      <div>
        <ScrollAnimation animateIn="fadeInUp">
          <p className="text-lg">Hello 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1 className="text-7xl font-bold dark:text-white">Ashish Shetty</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3 className="text-green-700 my-4 mx-0 text-lg font-bold">
            Frontend Developer
          </h3>
        </ScrollAnimation>
      </div>
    </div>
  );
}
