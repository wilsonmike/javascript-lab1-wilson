// ○ name (string) - Mitch Cuckovich
// ○ age (number) - 25
// ○ birthday (string) - January 24
// ○ detroitGC (boolean) - choose either true or false
// ○ lifeEvents (array with 4 items. 4 important life events)
// ■ "I was born in Troy, Michigan.",
// ■ "I went to Hope College",
// ■ "I went to Junior Olympics when I was 10 years old. I placed 14th in the
// nation in the 800 meter event.",
// ■ "I'm a graduate of the front-end bootcamp."

let name = 'Mike Wilson';
let age = '26'; 
let birthday = 'April 18th'; 
let detroitGC = true;

if (detroitGC === true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`); 
}


let lifeEvents = ["1.) I went to Michigan State.","2.) I grew up in St.Johns, MI.","3.) I won a state engineering competition in high school.","4.) I was designated hype man on varsity basketball."];


for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]); 
}

let counter = 0; 

while(true) {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if (randomNumber !== 5) {
        counter++; 
        console.log(`${randomNumber} !== 5` ); 
    } else {
        counter++;
        console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
        break; 
    }
}; 