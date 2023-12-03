const coinImg = document.getElementById("coin");
const resultEl = document.querySelector(".result");

function flipCoin() {
  coinImg.classList.add("spinning");
  resultEl.classList.add("hidden"); // Hide result initially

  setTimeout(() => {
    // Randomly generate heads or tails
    const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
    resultEl.textContent = outcome;

    // Update image and display result
    coinImg.classList.remove("spinning");
    coinImg.src = `coin_${outcome.toLowerCase()}.png`;
    resultEl.classList.remove("hidden");
  }, 1000); // Simulate flipping time with delay
}
