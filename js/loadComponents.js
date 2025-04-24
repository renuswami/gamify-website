// load header and footer
$(function () {
    // Dynamically load header
    $("#header-container").load("header.html", function (res, status, xhr) {
        if (status !== "success") {
            console.error("Failed to load header:", xhr.status);
        }
    });

    // Dynamically load footer
    $("#footer-container").load("footer.html", function (res, status, xhr) {
        if (status !== "success") {
            console.error("Failed to load footer:", xhr.status);
        }
    });
});

// FAQ rummy
document.querySelectorAll('.rummy-faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');

        // Close other open items
        document.querySelectorAll('.rummy-faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

//FAQ poker
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');

        // Close other open items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

