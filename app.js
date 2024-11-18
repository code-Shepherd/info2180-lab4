document.getElementById("searchButton").addEventListener("click", function() {
    const inputElement = document.getElementById("superheroInput");
    const query = inputElement.value.trim(); // Sanitize input by trimming whitespace

    // Define the URL based on whether there is a search query
    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text(); // Get the response as text
        })
        .then(data => {
            // Display the result in the 'result' div
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
});
