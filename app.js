const now = new Date();
// 0 - 6 (sun - sat)
const day = now.getDay();
// military time (24 hours / 0 - 23)
const hour = now.getHours();
const min = now.getMinutes();

console.log(now)
console.log(day)
console.log(hour, min);