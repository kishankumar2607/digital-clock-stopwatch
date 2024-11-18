"use strict";

$(document).ready(function() {
    // Create clock and start it
    const clock = createClock($("#hours"), $("#minutes"), $("#seconds"), $("#ampm"));
    clock.start();

    // Create stopwatch
    const stopwatch = createStopwatch($("#s_minutes"), $("#s_seconds"), $("#s_ms"));
    
    // Attach event handlers for the stopwatch buttons
    $("#start").click(stopwatch.start);
    $("#stop").click(stopwatch.stop);
    $("#reset").click(stopwatch.reset);
});
