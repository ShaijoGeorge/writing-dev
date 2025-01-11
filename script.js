document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector('.pagination');

    pagination.addEventListener('click', (event) => {
        const clickedLink = event.target.closest('.page, .prev, .next');
        if (!clickedLink) return;

        event.preventDefault();

        if (clickedLink.classList.contains('page')) {
            updateActivePage(clickedLink);
        } else if (clickedLink.classList.contains('prev')) {
            navigatePage('prev');
        } else if (clickedLink.classList.contains('next')) {
            navigatePage('next');
        }
    });

    function updateActivePage(clickedLink) {
        pagination.querySelectorAll('.page').forEach(link => link.classList.remove('active'));
        clickedLink.classList.add('active');
    }
    
    function navigatePage(direction) {
        const activeLink = pagination.querySelector('.page.active');
        const siblingLink = direction === 'prev' ? activeLink.previousElementSibling : activeLink.nextElementSibling;
        
        if (siblingLink && siblingLink.classList.contains('page')) {
            updateActivePage(siblingLink);
        }
    }
});

