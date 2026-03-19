// function startCountdown() {
//     let count = 3;

//     const countdown = document.getElementById("countdown");
//     const popup = document.getElementById("popup");

//     countdown.classList.remove("hidden");
//     countdown.innerHTML = count;

//     const interval = setInterval(() => {

//         count--;

//         if (count > 0) {
//             countdown.innerHTML = count;
//         } else {
//             clearInterval(interval);

//             countdown.innerHTML = "🎉";

//             setTimeout(() => {
//                 countdown.classList.add("hidden");
//                 popup.style.display = "flex";

//                 confetti({
//                     particleCount: 200,
//                     spread: 120,
//                     origin: { y: 0.6 }
//                 });

//             }, 800);
//         }

//     }, 1000);
// }

/* popup direct open if needed */
function showPopup() {
    document.getElementById("popup").style.display = "flex";

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
}

/* typing text */
const text = `Happy Birthday Val  
I hope today brings you happiness, peace, and beautiful memories.

You deserve all the love and good things life can offer.

Thank you for being someone truly special.

Enjoy your day 💖`;

let i = 0;

function typing() {
    const target = document.getElementById("typedText");

    if (target && i < text.length) {
        target.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

/* safe load */
window.addEventListener("load", typing);