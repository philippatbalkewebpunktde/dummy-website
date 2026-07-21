fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const showUnicorn = Math.random() < 0.1; // 10% chance
        if (showUnicorn) {
            const unicornContainer = document.getElementById('unicorn-container');
            unicornContainer.style.backgroundImage = `url(${config.unicornUrl})`;
            unicornContainer.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error loading configuration:', error);
    });