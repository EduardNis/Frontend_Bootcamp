
const today = new Date(Date.now())                                                              // get current date (full format)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];    // array of the title of weekdays

const month = ["January" ,"February" ,"March" , "April", "May", "June", "July", "August", 
"September", "October", "November", "December"]                                                 // array of the title of months


let weekDay = today.getDay()                                                                    // get the number of weekday (0-6)
weekDay = days[weekDay]                                                                         // define the weekday from array "days"

let numberDay = today.getDate()                                                                 // get day number of month (1-31)

let monthName = today.getMonth()                                                                // get the number of month (0-11)
monthName = month[monthName]                                                                    // define the title of month from array "month"

let year = today.getFullYear()                                                                  // get full title (4-digital) of the current year

console.log(`Today is ${weekDay} the ${numberDay} of ${monthName} ${year}`)