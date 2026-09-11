let prisonActive = true;

// Automatically scroll down
setInterval(() => {
    if (prisonActive) {
        window.scrollBy(0, 3);
    }
}, 50);

// Stop the user from scrolling upward
window.addEventListener("wheel", (event) => {

    if (!prisonActive) return;

    if (event.deltaY < 0) {
        window.scrollBy(0, 200);

        console.log("🚨 NICE TRY. SCROLLING UP IS ILLEGAL.");
    }
});

// Prevent Page Up / Arrow Up
window.addEventListener("keydown", (event) => {

    if (!prisonActive) return;

    if (
        event.key === "ArrowUp" ||
        event.key === "PageUp" ||
        event.key === "Home"
    ) {
        event.preventDefault();

        window.scrollBy(0, 300);

        alert("🚨 SCROLLING UP IS ILLEGAL 🚨");
    }
});