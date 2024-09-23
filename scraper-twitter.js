/**
 * Example Node.js App for Creating and Running a Twitter Sentiment Leads Generator Scraper with MrScraper API
 * 
 * This script demonstrates how to use the MrScraper API to create and run a Twitter Leads Generator Scraper.
 * The `scraperData` object below holds the configuration for the Twitter scraper, which you can modify based on your needs.
 * 
 * scraperData Fields:
 * 
 * - `name` (required): The name of the leads generator scraper for easy identification.
 * - `keywords` (required): The keywords or phrases you want to scrape from Twitter. 
 *      Example: "AI, Machine Learning".
 * - `sentiment_type` (required): The type of sentiment to filter results. Valid options are:
 *      - `all`: To scrape all results regardless of sentiment.
 *      - `positive`: To scrape only positive sentiment data.
 *      - `neutral`: To scrape neutral sentiment data.
 *      - `negative`: To scrape only negative sentiment data.
 * - `expected_data` (required): The number of data points to be retrieved (e.g., 100).
 * 
 * Authentication:
 * - The `token` must be replaced with your actual Bearer token, which can be obtained from MrScraper's Account Settings.
 * 
 * How it Works:
 * - The script sends a POST request to the MrScraper API endpoint to create and run the Twitter Leads Generator Scraper.
 * - If the request is successful, the response will contain details about the scraper, which are logged to the console.
 * - If any error occurs, the error details will be logged to the console for debugging.
 */

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
