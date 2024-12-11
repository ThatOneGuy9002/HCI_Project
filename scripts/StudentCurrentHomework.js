const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', () => {
    alert('Upload button clicked!');
});

document.addEventListener("DOMContentLoaded", () => {
    const doAssignmentButton = document.querySelector(".doAssignmentButton");

    doAssignmentButton.addEventListener("click", () => {
        window.location.href = "AssignmentForm.html";
    });
});
