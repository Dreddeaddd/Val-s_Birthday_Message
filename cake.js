document.querySelectorAll(".number-candle").forEach(candle => {
    candle.addEventListener("click", () => {
        const flame = candle.querySelector(".flame");
        flame.style.display = "none";
    });
});