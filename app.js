const now = new Date();
// 0 - 6 (sun - sat)
const day = now.getDay();
// military time (24 hours / 0 - 23)
const hour = now.getHours();
const min = now.getMinutes();

const winning = (d, h, m) => {
    console.log(d, h, m);
    // if mon-fri
    // && because || returns 0 as true
    if (d > 0 && d < 6) {
        console.log(true)
    } else {
        console.log(false);
    }
};




winning(day, hour, min);