const now = new Date();
console.log (now.toLocaleDateString('lt'))
console.log (now.toLocaleTimeString('lt'))

let now_n = new Date ();
now_n.setDate(now_n.getDate() - 5);

console.log(`Išvesta data NOW - 5 dienų`);
console.log(now_n.toLocaleDateString('lt'))

if (now > now_n) {
    console.log (`${now.toLocaleDateString('lt')} > ${now_n.toLocaleDateString('lt')}` )
} else (
    console.log (`${now.toLocaleDateString('lt')} < ${now_n.toLocaleDateString('lt')}`)
)

var differece = Math.floor((now - now_n) / (1000*60*60*24));
console.log(differece)


let date1 = new Date("01/16/2024");
let date2 = new Date("01/26/2024");

// Convert dates to UTC timestamps
let utc1 = 
    Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
let utc2 = 
    Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

// Calculate the time difference in milliseconds
let timeDiff = Math.abs(utc2 - utc1);

// Convert milliseconds to days
let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
let hoursDiff = Math.ceil(timeDiff / (1000 * 60 * 60 ));
let yearsDiff = Math.ceil(timeDiff / ((1000 * 60 * 60) * 365 ));

// Display the result
console.log(`Total number of days between dates:
${date1.toDateString()} and ${date2.toDateString()} is: ${daysDiff} days`);

console.log (`${date1.toDateString()} and ${date2.toDateString()} is: ${yearsDiff} years`);
console.log (`${date1.toDateString()} and ${date2.toDateString()} is: ${hoursDiff} hours`);

