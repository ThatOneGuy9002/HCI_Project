// upload
const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', () => {
    alert('Upload button clicked!');
});

// direct to assignment form
document.addEventListener("DOMContentLoaded", () => {
    const doAssignmentButton = document.querySelector(".doAssignmentButton");

    // Add event listener to the button
    doAssignmentButton.addEventListener("click", () => {
        // Redirect to AssignmentForm.html
        window.location.href = "AssignmentForm.html";
    });
});
