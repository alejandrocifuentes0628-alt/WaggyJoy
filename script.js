const cards = document.querySelectorAll('.animal-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const iconAttribute = card.getAttribute('data-animal');
        
        // Lógica de iconos: Perro/Gato sueltan huellas, otros su propia forma
        let iconToUse = iconAttribute;
        if (iconAttribute === '🐶' || iconAttribute === '🐱') {
            iconToUse = '🐾';
        }

        // Creamos una ráfaga de 3 iconos
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.innerHTML = iconToUse;
                particle.className = 'floating-icon';
                
                // Centramos el icono en la tarjeta
                particle.style.left = `calc(50% - 13px)`; 
                particle.style.top = `10px`;

                card.appendChild(particle);

                // Se borra al terminar la animación para no pesar
                setTimeout(() => particle.remove(), 1200);
            }, i * 200); // Espaciado entre iconos
        }
    });
});
