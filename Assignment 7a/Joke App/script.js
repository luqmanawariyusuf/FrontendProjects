const jokeElement = document.getElementById('jokeElement');
const refreshButton = document.getElementById('refreshButton');
const apiUrl = 'https://official-joke-api.appspot.com/random_joke'; // Free API endpoint

async function fetchJoke() {
    jokeElement.textContent = 'Fetching a joke...'; // Display loading status
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // API returns a JSON object
        
        // For a two-part joke (setup and punchline)
        if (data.setup && data.punchline) {
            jokeElement.textContent = `${data.setup} — ${data.punchline}`;
        } else {
            // For a single-line joke (some APIs provide this format)
            jokeElement.textContent = data.joke; 
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeElement.textContent = "Failed to fetch a joke. Please try again later.";
    }
}

// Add event listener to the button to fetch a new joke on click
refreshButton.addEventListener('click', fetchJoke);

// Fetch a joke when the page first loads
fetchJoke();
