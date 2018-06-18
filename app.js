// BIZ HOURS CHANGE AS NEEDED - closed weekdays @ 6 && sat @ 4?
// hour = (24 hours / 0-23)
const closed = {
    weekday: 18,
    saturday: 16
}

// TODO:
// Add Sunday scheduling

// TODO:
// Refactor for opening hours

// ==========================================
// vvv NO TOUCH! vvv
// ==========================================
const now = new Date();
const current = {
    day: now.getDay(),
    hour: now.getHours(),
    min: now.getMinutes()
}
const logMe = (
    `TIME RAN:
    ${now}
    Day: ${current.day}, Time: ${current.hour}:${current.min}`
);

console.log(logMe);

// check if closed on weekday
const weekTime = (h, closed) => {
    // if before 6am && past 6pm
    if (h < 6 || h > closed) {
        console.log('closed');
        $('#offHours').show();
    } else {
        // DO NOTHING
        console.log('open');
    }
};

// check if closed on Saturday
const satTime = (h, closed) => {
    // if before 6am && past 4pm
    if (h < 6 || h > closed) {
        console.log('closed');
        $('#offHours').show();
    } else {
        // DO NOTHING
        console.log('open');
    }
};

// determines day - input day, hour, min
// day = 0-6 (sun-sat)
const winning = (d, h, m) => {
    // mon-fri
    if (d > 0 && d < 6) {
        console.log('weekday');
        weekTime(h, closed.weekday);
    }
    // saturday 
    else if (d === 6) {
        console.log('saturday');
        satTime(h, closed.saturday);
    }
    // sunday
    else if (d === 0) {
        console.log('sunday - closed');
        $('#offHours').show();
    }
};

winning(current.day, current.hour, current.min);