const form = document.getElementById('homeworkForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const confirmation = "Are you sure you want to submit?"


            if (confirm(confirmation)) {
                window.history.go(-2);
            }
        });
