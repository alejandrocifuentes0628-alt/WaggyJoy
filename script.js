document.addEventListener('mousemove', (e) => {
    // Creamos el elemento de la huellita
    const paw = document.createElement('div');
    paw.innerHTML = '🐾'; // Emoji de huella
    paw.className = 'paw-print';
    
    // Posicionamos la huella donde está el mouse
    paw.style.left = `${e.pageX}px`;
    paw.style.top = `${e.pageY}px`;
    
    // Colores aleatorios basados en tu marca
    const colors = ['#48a9a6', '#f2a65a', '#ff6b6b', '#ffd166'];
    paw.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Rotación aleatoria para que parezca que caminan
    const rotation = Math.random() * 360;
    paw.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(paw);

    // Borramos la huella después de 1 segundo para no saturar
    setTimeout(() => {
        paw.style.opacity = '0';
        setTimeout(() => paw.remove(), 500);
    }, 1000);
});
