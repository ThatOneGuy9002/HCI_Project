// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the buttons by their IDs
    const studentLoginButton = document.getElementById('studentLoginButton');
    const staffLoginButton = document.getElementById('staffLoginButton');

    // Add event listeners to the buttons to handle clicks
    studentLoginButton.addEventListener('click', function () {
        // Redirect to the StudentHome page
        window.location.href = 'StudentHome.html';
    });

    staffLoginButton.addEventListener('click', function () {
        // Redirect to the StaffHome page
        window.location.href = 'StaffHome.html';
    });
});
