let candlesBlown = 0;
const totalCandles = document.querySelectorAll(".number-candle").length;

document.querySelectorAll(".number-candle").forEach(candle => {
    candle.addEventListener("click", () => {
        const flame = candle.querySelector(".flame");
        if (flame && flame.style.display !== "none") {
            flame.style.display = "none";
            candlesBlown++;

            if (candlesBlown === totalCandles) {
                const instruction = document.getElementById("instructionMessage");
                if (instruction) instruction.style.opacity = "0";
                
                // Trigger paper plane after a small delay
                setTimeout(showPaperPlane, 1000);
            }
        }
    });
});

function showPaperPlane() {
    const plane = document.getElementById("paperPlane");
    plane.classList.add("fly");

    // After animation ends, set it to landed state
    setTimeout(() => {
        plane.classList.remove("fly");
        plane.classList.add("landed");
    }, 4000);
}

document.getElementById("paperPlane").addEventListener("click", function() {
    // Add unfolding animation to plane
    this.classList.add("unfold");
    
    // Show final message after a tiny delay to sync with unfolding
    setTimeout(() => {
        const finalMessage = document.getElementById("finalMessage");
        finalMessage.classList.add("open");
        
        // Show exit button
        const exitBtn = document.querySelector(".exitBtn");
        exitBtn.style.opacity = "1";
        exitBtn.style.pointerEvents = "auto";
        
        // Remove the plane element from DOM after animation
        setTimeout(() => {
            this.style.display = "none";
        }, 500);
    }, 200);
});

setTimeout(() => {
    if (candlesBlown < totalCandles) {
        const instruction = document.getElementById("instructionMessage");
        if (instruction) {
            instruction.style.opacity = "1";
        }
    }
}, 8000);