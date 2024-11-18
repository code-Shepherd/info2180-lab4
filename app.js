document.getElementById("searchButton").addEventListener("click", function() {
    // Make an AJAX request to superheroes.php
    fetch("superheroes.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text(); // Get the response as text
        })
        .then(data => {
            // Show the list of superheroes in an alert box
            alert(data);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
});
