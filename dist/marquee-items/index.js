(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('.marquee-items {\n  height: var(--height, 50px);\n  flex-wrap: nowrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n}\n\n.marquee-items.pause-on-hover:hover {\n  animation-play-state: paused;\n}\n\n.marquee-items .items {\n  align-items: center;\n  gap: var(--gap);\n  margin-right: var(--gap);\n  flex-wrap: nowrap;\n  height: 100%;\n  display: flex;\n}\n\n.marquee-items .items .item {\n  height: 100%;\n}\n\n.marquee-items .items img {\n  max-width: max-content;\n  max-height: 100%;\n}\n\n.marquee-items.animate-left {\n  animation-name: marquee-items-animate-left;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n  animation-duration: var(--animation-duration, "32000ms");\n  animation-iteration-count: infinite;\n}\n\n.marquee-items.animate-right {\n  animation-name: marquee-items-animate-right;\n  animation-timing-function: linear;\n  animation-fill-mode: both;\n  animation-duration: var(--animation-duration, "32000ms");\n  animation-iteration-count: infinite;\n}\n\n@keyframes marquee-items-animate-left {\n  0% {\n    transform: translateX(0);\n  }\n\n  100% {\n    transform: translateX(-50%);\n  }\n}\n\n@keyframes marquee-items-animate-right {\n  0% {\n    transform: translateX(-50%);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var marquee_items = function() {
  "use strict";
  class MarqueeItems {
    constructor(el, options = {}) {
      let default_options = {
        height: 50,
        gap: 30,
        pause_on_hover: true,
        animation_duration: 5e4,
        direction: "left"
      };
      this.el = el;
      this.options = Object.assign(default_options, options);
      this.el.classList.add("marquee-items");
      this.el.append(this.el.querySelector(".items").cloneNode(true));
      this.el.classList.add("animate-" + this.options.direction);
      this.el.style.setProperty("--height", this.options.height + "px");
      this.el.style.setProperty("--gap", this.options.gap + "px");
      this.el.style.setProperty("--animation-duration", this.options.animation_duration + "ms");
      if (this.options.pause_on_hover) {
        this.el.classList.add("pause-on-hover");
      }
    }
  }
  function $_marquee_items(el, options = {}) {
    return new MarqueeItems(el, options);
  }
  return $_marquee_items;
}();
