function applyTimeBasedTheme() {
    const now = new Date();
    const hours = now.getHours();
    let themeClass = 'default';

    if (hours >= 5 && hours < 11) {
        themeClass = 'morning';
    } else if (hours >= 11 && hours < 18) {
        themeClass = 'afternoon';
    } else if (hours >= 18 && hours < 22) {
        themeClass = 'evening';
    } else {
        themeClass = 'night';
    }

    document.body.className = themeClass;
}

function fetchTimeAndApplyTheme() {
    // Simulating a time server fetch with a local time for demonstration
    try {
        applyTimeBasedTheme();
    } catch (error) {
        console.error("Failed to fetch time, applying default theme.", error);
        document.body.className = 'default';
    }
}

// Initial theme application
fetchTimeAndApplyTheme();

// Update theme every minute to handle time changes
setInterval(fetchTimeAndApplyTheme, 60000);