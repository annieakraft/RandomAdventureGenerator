
const adventures = [
    "Try drawing something you've never drawn before! 🎨",
    "Take a walk somewhere new! 🌳",
    "Make yourself a fancy snack! 🍓",
    "Listen to an album you've never heard! 🎵",
    "Learn five words in a new language! 🌎",
    "Take 10 minutes to relax and recharge! ☕",
    "Write a short story with a ridiculous ending! 📖"
];

function generateAdventure() {
    const randomIndex = Math.floor(Math.random() * adventures.length);

    document.getElementById("activity").textContent =
        adventures[randomIndex];
}
