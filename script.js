gsap.registerPlugin(ScrollTrigger);

let topSection = gsap.utils.toArray(".top-panel");
let btmSection = gsap.utils.toArray(".btm-panel");

//if (ScrollTrigger.isTouch === 2) {

// top panel move right
gsap.to(topSection, {
    xPercent: -100 * (topSection.length - 4),
    ease: "none",
    scrollTrigger: {
      trigger: ".top-container",
      pin: false,
      scrub: 1,
      //direction: 1
      //snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
});

// bottom panel move left
gsap.to(btmSection, {
    xPercent: -100 * (btmSection.length - 4),
    ease: "none",
    scrollTrigger: {
      trigger: ".btm-container",
      pin: false,
      scrub: 1,
      //direction: -1
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
});