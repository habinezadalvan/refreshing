
const weather = (weather) => {
    switch(weather){
        case "winter":
            console.log("It's winter time, you have to buy winter clothes");
            break;
        case "summer":
            console.log("It's summer time, you have to buy summer clothes");
            break;
        case "fall":
            console.log("it's a great season, just fall time");
            break;
        default:
            console.log("Autumn season")
    }
}
let season = {
    name: "winter",
    period: "November - Feb",
    clothesType: "heavy"

}
// COPY OBJECTS

const season2 = {...season, name: "summer"}; // Spread operator
const season3 = Object.assign({}, season); // Object.assgn method
const season4 = JSON.parse(JSON.stringify(season)) // JSON.stringify() and JSON.parse() method

console.log(season2);
console.log(season3);
console.log(season4);
weather(season.name);
weather(season2.name);

