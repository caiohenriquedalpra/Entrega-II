document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isNavOpen = mainNav.classList.contains('is-open');
            const icon = menuToggle.querySelector('i');
            
            if (isNavOpen) {
                mainNav.classList.add('is-closing');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mainNav.addEventListener('animationend', () => {
                    mainNav.classList.remove('is-open', 'is-closing');
                }, { once: true });
            } else {
                mainNav.classList.add('is-open');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
            body.classList.toggle('nav-open');
        });
    }

    const contactModal = document.getElementById('contact-modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtns = document.querySelectorAll('#modal-close-btn, #modal-overlay, #modal-close-btn-2');

    if (contactModal && openModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('is-visible');
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                contactModal.classList.remove('is-visible');
            });
        });
    }

    const formInputs = document.querySelectorAll('.contact-form input[required]');

    formInputs.forEach(input => {
        input.addEventListener('blur', (e) => {
            if (!e.target.checkValidity()) {
                e.target.classList.add('is-invalid');
            } else {
                e.target.classList.remove('is-invalid');
            }
        });

        input.addEventListener('input', (e) => {
            if (e.target.checkValidity()) {
                e.target.classList.remove('is-invalid');
            }
        });
    });
});
