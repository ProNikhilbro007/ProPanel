document.addEventListener("DOMContentLoaded", function () {
    // Theme Switcher
    const themeSelector = document.getElementById("theme");

    themeSelector.addEventListener("change", function () {
        if (this.value === "dark") {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "#fff";
        } else {
            document.body.style.backgroundColor = "#f4f4f4";
            document.body.style.color = "#000";
        }
    });

    // Start and Stop Server Functions
    document.getElementById("startServer").addEventListener("click", function () {
        alert("Starting the server...");
    });

    document.getElementById("stopServer").addEventListener("click", function () {
        alert("Stopping the server...");
    });
});


