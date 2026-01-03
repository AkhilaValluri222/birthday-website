const text = "Happy Birthday, Harshuuuu! 💕";
let index = 0;
const typingText = document.getElementById("typingText");

function typeEffect() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}
typeEffect();

// Hearts appear after typing
setTimeout(() => {
    const hearts = ["💗", "💓", "💖", "💝", "❤️"];
    const heartsDiv = document.getElementById("hearts");

    hearts.forEach((heart, i) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.textContent = heart;
            heartsDiv.appendChild(span);
        }, i * 300);
    });
}, 3000);


// Scroll to gallery
function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView();
}
const hero = document.getElementById("hero");
const bgHearts = ["💗", "💓", "💖", "💝", "❤️"];

function createBackgroundHeart() {
    const heart = document.createElement("span");
    heart.classList.add("bg-heart");
    heart.textContent = bgHearts[Math.floor(Math.random() * bgHearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    hero.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts continuously
setInterval(createBackgroundHeart, 500);
const finalSection = document.getElementById("finalMessage");

function createFinalHeart() {
    if (!finalSection) return;

    const heart = document.createElement("span");
    heart.classList.add("bg-heart");
    heart.textContent = ["💗","💓","💖","💝","❤️"]
        [Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 12 + 12 + "px";
    heart.style.animationDuration = Math.random() * 6 + 8 + "s";

    finalSection.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
}

setInterval(createFinalHeart, 1200);

