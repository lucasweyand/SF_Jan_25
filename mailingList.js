document.addEventListener('DOMContentLoaded', () => {

    const subscribeForm =
        document.getElementById('dataEntryForm');

    if (!subscribeForm) {
        console.error('Form not found');
        return;
    }

    subscribeForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        const firstNameInput =
            subscribeForm.querySelector('#firstName');

        const emailInput =
            subscribeForm.querySelector('#email');

        if (!firstNameInput || !emailInput) {

            console.error('Input fields not found');

            return;
        }

        const data = {
            firstName: firstNameInput.value,
            email: emailInput.value
        };

        console.log(data);

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyVDcMq4VWsdNMyoYX9DVh2KNPNciJRP4rK76bPxjOSFpDN39vXxEEy9HpvOAu_nkw/exec",
                {
                    method: "POST",
                    body: new URLSearchParams(data)
                }
            );

            const responseText = await response.text();

            console.log(responseText);

            alert("Submitted!");

            subscribeForm.reset();

        } catch (error) {

            console.error("Error submitting form:", error);
        }
    });
});