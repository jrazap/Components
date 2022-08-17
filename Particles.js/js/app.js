particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: !0, value_area: 1e3 } },
    color: { value: ["#e40045", "#58636d"] },
    shape: {
      type: "polygon",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 4 },
    },
    opacity: {
      value: 0.6,
      random: !0,
      anim: { enable: !1, speed: 1, opacity_min: 0.4, sync: !1 },
    },
    size: {
      value: 15,
      random: !0,
      anim: { enable: !1, speed: 4, size_min: 1, sync: !1 },
    },
    line_linked: {
      enable: !1,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 5,
      direction: "left",
      random: !0,
      straight: !0,
      out_mode: "out",
      bounce: !1,
      attract: { enable: !1, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: !1, mode: "grab" },
      onclick: { enable: !0, mode: "repulse" },
      resize: !0,
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: !0,
});
