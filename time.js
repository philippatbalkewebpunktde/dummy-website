document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');
    const errorElement = document.getElementById('error');

    fetch('https://worldtimeapi.org/api/timezone/Etc/UTC')
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.datetime) {
                const dateTime = new Date(data.datetime);
                timeElement.textContent = `Aktuelle Uhrzeit (UTC): ${dateTime.toUTCString()}`;
            } else {
                throw new Error('Ungültige Antwort vom Zeit-Server');
            }
        })
        .catch(error => {
            timeElement.textContent = '';
            errorElement.textContent = `Fehler: Die Zeit konnte nicht ermittelt werden. (${error.message})`;
        });
});