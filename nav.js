const btn = document.getElementById('browseBtn');
const grid = document.querySelector('.categories-container')
const arrow = document.querySelector('.arrow')
    btn.addEventListener('click', toggleCategories)
function toggleCategories() {
    if(grid.style.display === 'none'){
        grid.style.display = 'block'
        arrow.style.transform = 'rotate(180deg)'
    }else{
        grid.style.display = 'none'
        arrow.style.transform = 'rotate(0)'
    }

}

const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));