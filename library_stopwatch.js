"use strict";

const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
    // Private state
    let stopwatchTimer = null;
    let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

    const padSingleDigit = num => num.toString().padStart(2, "0");

    // Private helper function to update the stopwatch display and update elapsed time
    const tickStopwatch = () => {
        elapsed.milliseconds += 10;

        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        minuteSpan.text(padSingleDigit(elapsed.minutes));
        secondSpan.text(padSingleDigit(elapsed.seconds));
        msSpan.text(elapsed.milliseconds.toString().padStart(3, "0"));
    };

    // Public methods
    return {
        start: () => {
            if (!stopwatchTimer) {
                tickStopwatch();
                stopwatchTimer = setInterval(tickStopwatch, 10);
            }
        },
        stop: () => {
            clearInterval(stopwatchTimer);
            stopwatchTimer = null;
        },
        reset: () => {
            clearInterval(stopwatchTimer);
            stopwatchTimer = null;
            elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };
            minuteSpan.text("00");
            secondSpan.text("00");
            msSpan.text("000");
        }
    };
};
