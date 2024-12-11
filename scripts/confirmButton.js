function confirmAction() {
    const userConfirmed = confirm("Are you sure you want to quit?");
    if (userConfirmed) {
        window.history.back();
    }
}