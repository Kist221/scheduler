const now = new Date();
// day = 0-6 (sun-sat)
// hour = (24 hours / 0-23)
const [day, hour, min] = [now.getDay(), now.getHours(), now.getMinutes()];

// TODO: function for each time slot check...
console.log(now);
console.log(day, hour, min);

// determines time for weekday and proceeds
const weekTime = (h, c) => {
    console.log(h);

};
weekTime(hour);

// determines day and proceeds
const winning = (d, h, m) => {
    // if mon-fri
    // && because || returns 0 as true
    if (d > 0 && d < 6) {
        console.log('weekday');
    }
    // if saturday 
    else if (d === 6) {
        console.log('saturday');
    }
    // if sunday
    else if (d === 0) {
        console.log('sunday');
    }
};




winning(day, hour, min);