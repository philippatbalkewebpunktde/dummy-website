async function getGreetingMessage() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        if (!response.ok) {
            throw new Error('Zeitserver nicht erreichbar');
        }
        const data = await response.json();
        const currentTime = new Date(data.datetime);
        const hours = currentTime.getHours();

        if (hours >= 22 || hours < 5) {
            return "Gute Nacht";
        } else if (hours >= 5 && hours < 11) {
            return "Guten Morgen";
        } else if (hours >= 11 && hours < 18) {
            return "Guten Tag";
        } else if (hours >= 18 && hours < 22) {
            return "Guten Abend";
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Zeit:', error);
        return "Hallo";
    }
}

async function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = await getGreetingMessage();
}

// Initialer Aufruf und Aktualisierung alle 60 Sekunden
updateGreeting();
setInterval(updateGreeting, 60000);