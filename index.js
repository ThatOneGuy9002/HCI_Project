document.addEventListener('DOMContentLoaded', function () {

    const studentLoginButton = document.getElementById('studentLoginButton');
    const staffLoginButton = document.getElementById('staffLoginButton');

    studentLoginButton.addEventListener('click', function () {
        window.location.href = 'StudentHome.html';
    });

    staffLoginButton.addEventListener('click', function () {
        window.location.href = 'StaffHome.html';
    });
});
