const cards = document.querySelectorAll('.animal-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const iconAttribute = card.getAttribute('data-animal');
        
        // Decidimos qué icono mostrar: si es perro o gato, usamos la huella 🐾
        let iconToUse = iconAttribute;
        if (iconAttribute === '🐶' || iconAttribute === '🐱') {
            iconToUse = '🐾';
        }

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.innerHTML = iconToUse;
                particle.className = 'floating-icon';
                
                // Centramos el icono en la tarjeta
                particle.style.left = `calc(50% - 12px)`; 
                particle.style.top = `10px`;

                card.appendChild(particle);

                // Se elimina solo para no gastar memoria
                setTimeout(() => particle.remove(), 1000);
            }, i * 150); // Sale uno detrás del otro
        }
    });
});
