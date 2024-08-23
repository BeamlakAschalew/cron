const axios = require("axios");
const cron = require("node-cron");

// URL to keep alive
const url = "https://example.com";

// Schedule the cron job to run every 15 minutes
cron.schedule("* * * * *", async () => {
  try {
    const response = await axios.get(url);
    console.log(`Ping successful! Status: ${response.status}`);
  } catch (error) {
    console.error(`Ping failed: ${error.message}`);
  }
});

console.log("Keep-alive cron job started, pinging every 15 minutes...");
