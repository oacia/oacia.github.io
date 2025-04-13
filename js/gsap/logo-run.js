// logo animation
function logo_run(){
  let logo = document.querySelector(".logo-me");
  if (!logo) {
    return;
  }

  gsap.set(".logo-me .path", {
    drawSVG: "0% 0%",
  });
  gsap.set(".logo-me .dot-group", {
    yPercent: 100,
  });

  CustomBounce.create("myBounce", { strength: 0.6, squash: 2 });

  const logoTl = gsap.timeline({ paused: true });

  logoTl
    .set(".logo-me", { autoAlpha: 1 })
    .timeScale(0.9)
    .staggerTo(
      ".logo-me .oPath",
      0.4,
      { drawSVG: "100%", ease: Linear.easeNone },
      0.1,
      1
    )
    .staggerTo(
      ".logo-me .a1Path",
      0.4,
      { drawSVG: "100%", ease: Linear.easeNone },
      0.1,
      "-=0.1"
    )
    .staggerTo(
      ".logo-me .cPath",
      0.3,
      { drawSVG: "100%", ease: Linear.easeNone },
      0.1,
      "-=0.2"
    )
    .from(".logo-me .dot-group #dot", 0.01, { autoAlpha: 0 }, "-=0.08")
    .to(".logo-me .dot-group #dot", 0.4, { yPercent: -300, ease: Power4.easeOut }, "-=0.05")
    .to(".logo-me .dot-group", 0.4, { scale: 1.4, ease: Power4.easeOut }, "-=0.4")
    .to(".logo-me .dot-group #dot", 0.9, { yPercent: -80, ease: "myBounce" })
    .to(".logo-me .dot-group #dot", 0.9, {
      scaleY: 0.6,
      scaleX: 1.2,
      ease: "myBounce-squash",
      transformOrigin: "bottom",
      delay: -0.9,
    })
    .staggerTo(
      ".logo-me .i_bPath",
      0.2,
      { drawSVG: "100%", ease: Linear.easeNone },
      0.05,
      "-=0.3"
    )
    .staggerTo(
      ".logo-me .a2Path",
      0.2,
      { drawSVG: "100%", ease: Linear.easeNone },
      0.07,
      "-=0.2"
    )
    .to(".logo-me #strokes", 0.2, {
      opacity: 0,
    });

  const safeToAnimate = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;

  if (safeToAnimate) {
    logoTl.play();
  } else {
    logoTl.progress(1).pause();
  }
}