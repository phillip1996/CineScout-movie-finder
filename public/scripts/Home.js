document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("movie-title");
    const searchButton = document.getElementById("search-btn");

    // Create a single background div
    const backgroundDiv = document.createElement("div");
    backgroundDiv.id = "background";
    document.body.appendChild(backgroundDiv);

    function redirectToMovieInfo() {
        const movieTitle = searchInput.value.trim();
        if (movieTitle) {
            window.location.href = `Movie info.html?title=${encodeURIComponent(movieTitle)}`;
        } else {
            alert("Please enter a movie title.");
        }
    }

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            redirectToMovieInfo();
        }
    });

    searchButton.addEventListener("click", redirectToMovieInfo);

    // Background image slideshow
    const images = [
        "images/bg_7.jpg",
        "images/avengers.png",
        "images/bg_5.jpg"
    ];

    let currentIndex = 0;

    function preloadImages() {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    function changeBackground() {
        backgroundDiv.style.opacity = "0"; // Fade out

        setTimeout(() => {
            backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;
            backgroundDiv.style.opacity = "1"; // Fade in
            currentIndex = (currentIndex + 1) % images.length;
        }, 1000); // Wait for fade-out transition
    }

    // Preload images and start slideshow
    preloadImages();
    changeBackground();
    setInterval(changeBackground, 5000);
});
