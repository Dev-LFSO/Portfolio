document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('header > ul > li > a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const offset = 140

            if (this.getAttribute('href') === '#inicio') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const target = document.querySelector(this.getAttribute('href'));
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
