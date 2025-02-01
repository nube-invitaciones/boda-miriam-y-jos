const navbarLogo = document.querySelector('.navbar-brand img');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Mostrar el logo al hacer scroll
                navbarLogo.classList.add('scrolled');
            } else {
                // Ocultar el logo al volver a la parte superior
                navbarLogo.classList.remove('scrolled');
            }
            lastScrollY = window.scrollY;
        });