document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get("title");

    if (movieTitle) fetchMovieDetails(movieTitle);

    async function fetchMovieDetails(title) {
        const apiKey = "dd36d579"; // Your OMDb API key
        const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.Response === "True") {
                displayMovieDetails(data);
            } else {
                document.getElementById("movie-details").innerHTML = `<h2>Movie not found</h2>`;
            }
        } catch (error) {
            console.error("Error fetching movie data:", error);
            document.getElementById("movie-details").innerHTML = `<h2>Error loading movie details</h2>`;
        }
    }

    function displayMovieDetails(data) {
        document.getElementById("movie-title-heading").textContent = `${data.Title} (${data.Year})`;
        document.getElementById("movie-poster").src = data.Poster !== "N/A" ? data.Poster : "placeholder.jpg";
        document.getElementById("movie-genre").textContent = `${data.Genre}`;
        document.getElementById("movie-director").textContent = `${data.Director}`;
        document.getElementById("movie-actors").textContent = `${data.Actors}`;
        document.getElementById("movie-country").textContent = `${data.Country}`;
        document.getElementById("movie-duration").textContent = `${data.Runtime}`;
        document.getElementById("movie-rating").textContent = `${data.imdbRating}`;
        document.getElementById("movie-rating-stars").innerHTML = generateStarRating(data.imdbRating);

        const plotElement = document.getElementById("movie-plot");
        const readMoreButton = document.getElementById("read-more");
        const showLessButton = document.getElementById("show-less");

        const fullPlot = data.Plot;
        const shortPlot = fullPlot.length > 100 ? fullPlot.substring(0, 100) + "..." : fullPlot;

        plotElement.textContent = shortPlot;

        if (fullPlot.length > 100) {
            readMoreButton.style.display = "inline";
            showLessButton.style.display = "none";

            readMoreButton.addEventListener("click", () => {
                plotElement.textContent = fullPlot;
                readMoreButton.style.display = "none";
                showLessButton.style.display = "inline";
            });

            showLessButton.addEventListener("click", () => {
                plotElement.textContent = shortPlot;
                readMoreButton.style.display = "inline";
                showLessButton.style.display = "none";
            });
        } else {
            readMoreButton.style.display = "none";
            showLessButton.style.display = "none";
        }

        // IMDb Trailer Link Integration
        if (data.imdbID) {
            document.getElementById("watch-trailer").onclick = () => {
                window.open(`https://www.imdb.com/title/${data.imdbID}/videogallery/`, "_blank");
            };
        } else {
            document.getElementById("watch-trailer").textContent = "Trailer Not Found";
            document.getElementById("watch-trailer").style.pointerEvents = "none";
        }
    }

    function generateStarRating(rating) {
        const maxStars = 5;
        const convertedRating = parseFloat(rating) / 2;
        const fullStars = Math.floor(convertedRating);
        const halfStar = convertedRating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = maxStars - (fullStars + halfStar);

        return `<span class="star-rating">
            ${"★".repeat(fullStars)}${halfStar ? "½" : ""}${"☆".repeat(emptyStars)}
        </span>`;
    }
});
