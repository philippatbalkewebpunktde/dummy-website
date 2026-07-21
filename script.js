document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');

    function updateGreeting() {
        const now = new Date();
        const hours = now.getUTCHours(); // Using UTC for consistency

        let greeting = '';
        if (hours >= 22 || hours < 5) {
            greeting = 'Gute Nacht';
        } else if (hours >= 5 && hours < 11) {
            greeting = 'Guten Morgen';
        } else if (hours >= 11 && hours < 18) {
            greeting = 'Guten Tag';
        } else if (hours >= 18 && hours < 22) {
            greeting = 'Guten Abend';
        }

        greetingElement.textContent = greeting;
    }

    updateGreeting();
});

fetch('config.json')
    .then(response => response.json())
    .then(config => {
        const showUnicorn = Math.random() < 0.9; // 10% chance
        if (showUnicorn) {
            const unicornContainer = document.getElementById('unicorn-container');
            unicornContainer.style.backgroundImage = `url(${config.unicornUrl})`;
            unicornContainer.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error loading configuration:', error);
    });