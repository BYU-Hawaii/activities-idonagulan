
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Collect form data
        var formData = new FormData(this);

        // Validate if rating is selected (you can add more validation as needed)
        if (formData.get('rating') === '') {
            alert('Please select a rating.');
            return;
        }

        // Simulate submission success message (replace with actual logic if needed)
        var feedbackMessage = 'Thank you for your feedback, ' + formData.get('name') + '!';

        // Display feedback message
        document.getElementById('feedbackMessage').textContent = feedbackMessage;

        // Optionally, clear form inputs
        this.reset();
    });
});
