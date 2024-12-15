// Fetch data from Jikan API
async function fetchJikanData() {
    try {
        let response = await fetch('https://api.jikan.moe/v4/anime/1');
        if (!response.ok) throw new Error('Network response was not ok: ' + response.statusText);

        let data = await response.json();
        displayData('Jikan API', `<strong>Title:</strong> Cowboy Bebop<br><strong>Description:</strong> ${data.data.synopsis}`);
    } catch (error) {
        console.error('Fetch error for Jikan API:', error);
        displayError('Jikan API', 'Could not fetch information for Cowboy Bebop. Please try again later.');
    }
}


// Function to display fetched data on the webpage
function displayData(apiName, content) {
    const apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML += `
        <div class="api-entry">
            <h2>${apiName}</h2>
            ${content}
        </div>
    `;
}

// Function to display error message
function displayError(apiName, errorMessage) {
    const apiDataDiv = document.getElementById('apiData');
    apiDataDiv.innerHTML += `
        <div class="api-entry error">
            <h2>Error from ${apiName}</h2>
            <p>${errorMessage}</p>
        </div>
    `;
}

// Call fetch functions on page load
fetchJikanData();

