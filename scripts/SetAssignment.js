const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById("title").value;
            const classes = document.getElementById("class").value;
            const due = document.getElementById("due").value;
            const description = document.getElementById("description").value;

            const confirmation = `
                Please confirm your details:
                ---------------------------------
                Title: ${title}
                Class: ${classes}
                Due Date: ${due}
                Description: ${description}
                ---------------------------------
                Are these details correct?
            `;

            if (confirm(confirmation)) {
                form.submit();
            }
        });