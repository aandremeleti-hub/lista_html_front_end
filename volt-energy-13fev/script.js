const buttons = document.querySelectorAll(".flavour-btn");
const title = document.getElementById("main-title");
const description = document.getElementById("main-description");
const tag = document.getElementById("flavour-tag");
const accent = document.getElementById("can-accent");
const glow = document.getElementById("glow-effect");
const bar = document.getElementById("energy-bar");
const valText = document.getElementById("energy-value");
const chargeBtn = document.getElementById("btn-charge");
const root = document.documentElement;

let energyLevel = 0;

const flavours = {
  lime: {
    tag: "Edição original",
    color: "#ccff00",
    desc: "A força cítrica que você precisa para virar a noite no código ou no jogo."
  },
  berry: {
    tag: "Edição limitada",
    color: "#ff006e",
    desc: "Um mix de frutas vermelhas com o dobro de taurina para máxima performance."
  },
  ice: {
    tag: "Refrescância extrema",
    color: "#00d4ff",
    desc: "Sinta o choque térmico. Foco frio e calculista para momentos de alta performance."
  }
};

function switchFlavour(key) {
  const data = flavours[key];

  tag.textContent = data.tag;
  description.textContent = data.desc;

  root.style.setProperty("--primary-color", data.color);
  accent.setAttribute("fill", data.color);
  glow.style.background = data.color;

  buttons.forEach((item) => item.classList.remove("active"));
  document.querySelector(`[data-flavour="${key}"]`).classList.add("active");

  resetEnergy();
}

function updateEnergy() {
  if (energyLevel < 100) {
    energyLevel += 10;
    bar.style.width = energyLevel + "%";
    valText.textContent = energyLevel + "%";

    if (energyLevel === 100) {
      valText.textContent = "CARGA MÁXIMA!";
      chargeBtn.style.background = "var(--primary-color)";
      chargeBtn.style.color = "black";
    }
  }
}

function resetEnergy() {
  energyLevel = 0;
  bar.style.width = "0%";
  valText.textContent = "0%";
  chargeBtn.style.background = "transparent";
  chargeBtn.style.color = "white";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const flavour = btn.getAttribute("data-flavour");
    switchFlavour(flavour);
  });
});

chargeBtn.addEventListener("click", updateEnergy);
