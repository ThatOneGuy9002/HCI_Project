function confirmAction() {
    const userConfirmed = confirm("Are you sure you want to go back?");
    if (userConfirmed) {
        window.history.back();
    }
}