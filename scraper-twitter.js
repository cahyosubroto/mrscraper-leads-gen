const axios = require('axios');

// Set up the scraper data
const scraperData = {
    "name": "Twitter Sentiment Scraper Example",
    "keywords": "AI, Machine Learning",
    "sentiment_type": "positive",
    "expected_data": 100
}

// Set up the API endpoint and authentication
const apiEndpoint = "https://app.mrscraper.com/api/scrapers/twitter/google/create-and-run";
const token = "YOUR_BEARER_TOKEN_HERE"; // Replace with your actual Bearer token, generate yours at MrScraper's Account Settings

// Function to create and run the Facebook Marketplace Scraper
async function run() {
    try {
        // Make a POST request to the API endpoint
        const response = await axios.post(apiEndpoint, scraperData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        // Log the response
        console.log('Leads Generator created and running:');
        console.log(response.data);

    } catch (error) {
        // Handle any errors that occur during the API request
        if (error.response) {
            console.error('Error:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
}

// Run the function
run();
