document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.getElementById('dataEntryForm');

    subscribeForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        try {
            // Send a POST request to the Google Apps Script
            const response = await fetch("https://script.google.com/macros/s/AKfycby7IJKxVyTON23G3CIZXHZ2foHrR_rkFqvnWpAdlurJS2CyGOkv-Sw8oVwPbvkPvqCD/exec", {
                method: "POST",
                body: new URLSearchParams(data), // Convert data to URLSearchParams
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json(); // Parse the JSON response
            alert(responseData.message); // Notify the user of success
            console.log("Response:", responseData); // Log the response for debugging

            // Clear the form fields
            subscribeForm.reset();

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error subscribing. Please try again.");
        }
    });
});
