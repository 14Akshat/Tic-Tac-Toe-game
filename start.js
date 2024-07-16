document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");

    startBtn.addEventListener("click", () => {
        // Add transition effect for redirecting
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = 0;

        // Redirect to the Tic Tac Toe game page after the transition
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
});
