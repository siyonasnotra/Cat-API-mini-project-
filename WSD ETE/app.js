// Add event listener to the 'Fetch Cat Image' button
document.getElementById('fetch-button').addEventListener('click', () => {
    // Get the image element and show a loading spinner
    const img = document.getElementById('cat-image');
    img.src = 'loading_spinner.gif'; // Temporary loading spinner

    // Fetch a random cat image from The Cat API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Set the src of the image element to the fetched URL
            img.src = data[0].url;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
            img.src = ''; // Clear the image source on error
        });
});
