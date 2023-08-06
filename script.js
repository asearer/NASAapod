// Function to fetch data from the API
async function fetchAPODData() {
    const apiKey = "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Update the content on the webpage
      document.getElementById("apodImage").src = data.url;
      document.getElementById("apodTitle").innerText = data.title;
      document.getElementById("apodDate").innerText = `Date: ${data.date}`;
      document.getElementById("apodExplanation").innerText = data.explanation;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Function to search APOD data by date
  async function searchAPODByDate() {
    const dateInput = document.getElementById("searchDate").value;
  
    // Check if the date input is valid (YYYY-MM-DD format)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateInput)) {
      alert("Please enter a valid date in the format YYYY-MM-DD.");
      return;
    }
  
    const apiKey = "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Check if the response contains an error message
      if (data.code === 400) {
        alert("No data available for the provided date.");
        return;
      }
  
      // Update the content on the webpage
      document.getElementById("apodImage").src = data.url;
      document.getElementById("apodTitle").innerText = data.title;
      document.getElementById("apodDate").innerText = `Date: ${data.date}`;
      document.getElementById("apodExplanation").innerText = data.explanation;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    const container = document.querySelector(".container");
    const apod = document.querySelector(".apod");
    const buttons = document.querySelectorAll("button");
  
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    apod.classList.toggle("dark-mode");
    buttons.forEach((button) => button.classList.toggle("dark-mode"));
  }
  
  // Call the function to fetch data when the page loads
  fetchAPODData();
  

  
