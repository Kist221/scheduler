const now = new Date();
// day = 0-6 (sun-sat)
// hour = (24 hours / 0-23)
const current = {
    day: now.getDay(),
    hour: now.getHours(),
    min: now.getMinutes()
}
// BIZ HOURS - closed weekdays @ 6 && sat @ 4?
const closed = {
    weekday: 18,
    saturday: 16
}
console.log(now);
console.log(current.day, current.hour, current.min);

// check if closed on weekday
const weekTime = (h, closed) => {
    // if before 6am && past 6pm
    if (h < 6 || h > closed) {
        console.log('closed');
        // TODO: display message on page
    } else {
        // DO NOTHING
        console.log('open', h, closed);
    }
};

// check if closed on Saturday
const satTime = (h, closed) => {
    // if before 6am && past 6pm
    if (h < 6 || h > closed) {
        console.log('closed');
        // TODO: display message on page
    } else {
        // DO NOTHING
        console.log('open', h, closed);
    }
};

// determines day - input day, hour, min
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
        console.log('sunday');
    }
};

winning(current.day, current.hour, current.min);