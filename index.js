// FRONT END: This code listens for form submission and sends a fetch request to the server

document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // To prevent page reload

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    // Make a GET request to the backend with the provided form data
    fetch(`/convert?from=${from}&to=${to}&amount=${amount}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                // Display the error message if the backend returns an error
                document.getElementById('result').textContent = `Error: ${data.error}`;
            } else {
                // Display the conversion result
                document.getElementById('result').textContent = `Converted Amount: ${data.convertedAmount}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred. Please try again.';
        });
});
