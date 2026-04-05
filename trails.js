document.addEventListener('mousemove', function(e) {
    if(Math.random() < 0.85) return; // Throttle trail creation
    createTrail(e.clientX, e.clientY);
});

document.addEventListener('click', function(e) {
    for(let i=0; i<5; i++) {
        setTimeout(() => {
            createTrail(e.clientX + (Math.random()*40-20), e.clientY + (Math.random()*40-20));
        }, i*30);
    }
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'heart-trail';
    const signs = ['❤️', '✨', '💖', '💕', '⭐'];
    trail.innerText = signs[Math.floor(Math.random() * signs.length)];
    
    // Add random slight rotation and scaling
    const rotation = Math.random() * 60 - 30;
    trail.style.transform = `rotate(${rotation}deg) scale(0.5)`;
    
    // Position using CSS custom properties for animation
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
}
