const demo = document.querySelector(".gauge-demo");
const controls = demo.querySelector(".demo-controls");
const label = demo.querySelector("#result-label");
const detail = demo.querySelector("#result-detail");

const scenarios = {
  before: {
    label: "Counterweight selected",
    detail: "The older rule scored each direction as a whole. A thick counterweight and nearby colored markings could outweigh the finer needle tip.",
  },
  after: {
    label: "Needle tip selected",
    detail: "Both ends define the same axis. The longer tip crosses the calibrated band, giving that side stronger evidence.",
  },
  hidden: {
    label: "Reading withheld",
    detail: "The visible parts of the needle still suggest an axis, but there is too little evidence in the band to choose a direction confidently.",
  },
};

function showScenario(mode) {
  const scenario = scenarios[mode];
  demo.dataset.mode = mode;
  label.textContent = scenario.label;
  detail.textContent = scenario.detail;
}

controls.addEventListener("change", (event) => showScenario(event.target.value));
showScenario(controls.querySelector(":checked").value);
controls.hidden = false;
