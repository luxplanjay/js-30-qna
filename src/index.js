import Typed from "typed.js";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";

import { info, alert, success, error, defaults } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
import "material-design-icons/iconfont/material-icons.css";
// import add from "./js/helpers/add";
// import { mult, sub } from "./js/helpers/calc";
import "./sass/main.scss";

defaults.styling = "material";
defaults.icons = "material";

error({
  text: "Нотификашка",
});

// console.log(sub);
// console.log(add(5, 15));

new Typed(".js-typed-text", {
  // strings: ["First sentence.", "Second sentence."],
  strings: [
    "This is a JavaScript library",
    "This is an ES6 module",
    "This is an awesome package",
  ],
  smartBackspace: true, // Default value
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
  onBegin: (self) => {
    console.log("ON BEGIN");
  },
});

tippy("#myButton", {
  content: "My tooltip!",
  trigger: "click",
});

flatpickr("#datepicker", {
  onChange(selectedDates, dateStr, instance) {
    console.log(selectedDates);
  },
});
