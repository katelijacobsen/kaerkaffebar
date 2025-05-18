import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});
