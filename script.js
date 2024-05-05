const noButton = document.getElementById('noButton');
const proposal = document.getElementById('proposal');

noButton.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});

document.getElementById('yesButton').addEventListener('click', () => {
    proposal.style.display = 'block';
    const loveRain = document.getElementById('loveRain');
    for (let i = 0; i < 100; i++) {
        const loveEmoji = document.createElement('div');
        loveEmoji.classList.add('love-emoji');
        loveEmoji.innerHTML = '&#10084;&#65039;';
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        loveEmoji.style.left = x + 'px';
        loveEmoji.style.top = y + 'px';
        loveRain.appendChild(loveEmoji);
    }
    setTimeout(() => {
        document.body.innerHTML = '<div class="proposal" id="proposal"><p class="proposal-text">Thanks, I Love You ❤️</p></div>';
    }, 3000); // Change the time as needed (3000 milliseconds = 3 seconds)
});
