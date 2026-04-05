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

/* Drag to Unwrap Gift Box Logic */
const lid = document.getElementById("giftLid");
const bongo = document.getElementById("bongoCat");

if (lid && bongo) {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    lid.addEventListener("mousedown", (e) => {
        isDragging = true;
        startY = e.clientY - currentY;
        lid.style.transition = "none";
        bongo.style.transition = "none";
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        currentY = e.clientY - startY;
        // Limit drag completely down, allow drag up
        if (currentY > 10) currentY = 10;
        
        lid.style.transform = `translateY(${currentY}px)`;
        bongo.style.transform = `translateX(-50%) translateY(${currentY}px) rotate(-13deg)`;

        // If dragged up enough, pop open!
        if (currentY < -60) {
            isDragging = false;
            openGift();
        }
    });

    window.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        lid.style.transition = "transform 0.3s ease";
        bongo.style.transition = "transform 0.3s ease";
        currentY = 0;
        lid.style.transform = `translateY(0px)`;
        bongo.style.transform = `translateX(-50%) translateY(0px) rotate(-15deg)`;
    });

    // Touch support
    lid.addEventListener("touchstart", (e) => {
        isDragging = true;
        startY = e.touches[0].clientY - currentY;
        lid.style.transition = "none";
        bongo.style.transition = "none";
    });
    
    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        currentY = e.touches[0].clientY - startY;
        if (currentY > 10) currentY = 10;
        lid.style.transform = `translateY(${currentY}px)`;
        bongo.style.transform = `translateX(-50%) translateY(${currentY}px) rotate(-15deg)`;
        if (currentY < -60) {
            isDragging = false;
            openGift();
        }
    });

    window.addEventListener("touchend", () => {
        if (!isDragging) return;
        isDragging = false;
        lid.style.transition = "transform 0.3s ease";
        bongo.style.transition = "transform 0.3s ease";
        currentY = 0;
        lid.style.transform = `translateY(0px)`;
        bongo.style.transform = `translateX(-50%) translateY(0px) rotate(-15deg)`;
    });

    function openGift() {
        document.getElementById("giftContainer").style.display = 'none';
        showPopup();
    }
}



const text = `Happy Birthday to my kalaban always

Tumatanda ka nanaman bossing HAHAHA dejoke lang.

beh habang tumatanda tayo sana hindi magbabago kung ano man ang nabuo nating friendship kasi isa ka 
sa mga importanteng tao sa buhay ko. Alam ko may mga bagay rin tayong hindi napagkakasundo pero kahit ganun ay 
gumagawa ka ka always ng way to fix our little the problem, may pagka-avoidan attachment issue pa naman ako.

this simple hardwork of mine sana ay mapaligaya ka at maramdaman mong kahit sino 
ay meron paring taong gusto na mag effort para sayo, syempre sa ngayon ako muna wala kapang bebe boi ehh HAHAHHAHAHAHAH Bleh.`;

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
