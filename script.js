
const adventures = [
    {
        activity: "Draw something using only three colors! 🎨",
        category: "creative"
    },
    {
        activity: "Write a short story with a ridiculous ending! 📖",
        category: "creative"
    },
    {
        activity: "Take a walk somewhere you've never been! 🌳",
        category: "outdoors"
    },
    {
        activity: "Find an interesting bird or animal outside! 🐦",
        category: "outdoors"
    },
    {
        activity: "Make yourself a fancy snack! 🍓",
        category: "relaxing"
    },
    {
        activity: "Enjoy 15 minutes without screens! ☕",
        category: "relaxing"
    },
    {
        activity: "Learn five words in a new language! 🌎",
        category: "productive"
    },
    {
        activity: "Organize one small area of your workspace! 💻",
        category: "productive"
    }
];

function generateAdventure() {
    const category = document.getElementById("category").value;

    const filteredAdventures = category === "all"
        ? adventures
        : adventures.filter(adventure => adventure.category === category);

    const randomIndex = Math.floor(Math.random() * filteredAdventures.length);

    document.getElementById("activity").textContent =
        filteredAdventures[randomIndex].activity;
}
