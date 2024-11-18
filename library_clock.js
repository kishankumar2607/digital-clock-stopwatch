"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // Private function to display current time
    const displayCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let ampm = "AM";
        
        if (hours > 12) {
            hours -= 12;
            ampm = "PM";
        } else if (hours === 0) {
            hours = 12;
        } else if (hours === 12) {
            ampm = "PM";
        }

        hourSpan.text(hours);
        minuteSpan.text(now.getMinutes().toString().padStart(2, "0"));
        secondSpan.text(now.getSeconds().toString().padStart(2, "0"));
        ampmSpan.text(ampm);
    };

    // Public method to start the clock
    return {
        start: () => {
            displayCurrentTime();
            setInterval(displayCurrentTime, 1000);
        }
    };
};
