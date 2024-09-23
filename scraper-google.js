/**
 * Example Node.js App for Creating and Running a Google Leads Generator Scraper with MrScraper API
 * 
 * This script demonstrates how to use the MrScraper API to create and run a Google Leads Generator Scraper.
 * The `scraperData` object below holds the configuration for the scraper. You can modify its fields
 * according to your scraping needs.
 * 
 * scraperData Fields:
 * 
 * - `name` (required): The name of the leads generator scraper, which helps you identify it.
 * - `search_type` (required): Defines how the scraper will search for leads. It can be either:
 *      - `url`: Search based on a URL.
 *      - `keywords`: Search based on specific keywords.
 * - `url` (required if search_type is 'url'): The URL you want to scrape for leads.
 * - `keywords` (required if search_type is 'keywords'): The keywords you want to search for (not used in this example).
 * - `limit_pages` (optional, but recommended): The maximum number of pages to scrape. If omitted, it may scrape indefinitely.
 * 
 * Authentication:
 * - The `token` value must be replaced with your actual Bearer token, which can be obtained from MrScraper's Account Settings.
 * 
 * How it Works:
 * - The script sends a POST request to the MrScraper API endpoint to create and run the Google Leads Generator.
 * - If successful, it logs the response from the API, containing details about the scraper.
 * - If any error occurs, it will log the error details to the console.
 */

const axios = require('axios');

// Set up the scraper data
const scraperData = {
    "name": "Google Leads Generator Example",
    "search_type": "url",
    "url": "https://www.apple.com/",
    "limit_pages": 1
};

// Set up the API endpoint and authentication
const apiEndpoint = "https://app.mrscraper.com/api/scrapers/leads-generator/google/create-and-run";
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
