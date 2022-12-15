let lastName = " Habineza";
let firstName = "Leon"
let n = lastName.substr(0, 4);

let fullName = firstName.concat(" ", "CHRISTIAN",  lastName, " cHRISTIAN");

fullName = fullName.replace(/Christian/gi, "");

let trimedName = "Habineza Leon Christian Lovine";

console.log(trimedName.match(/n/g).length);
console.log(lastName.toLowerCase().includes("habineza"));
console.log(lastName.startsWith(" Habi"));
console.log(trimedName.split(" "));
console.log(trimedName.match(/\s/));

const readingTime = (paragraph) => {
    let wordLength = paragraph.split(" ").length;
    const timeInMinutes = 60 * wordLength/300;
    console.log("Read time", timeInMinutes, "Secs");
};

let p1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo odio repudiandae vel! Fuga consectetur ullam corporis eum sit velit dolorem illo praesentium, libero qui dolores quas totam asperiores vitae dolorum necessitatibus placeat odio dignissimos aliquam itaque doloribus! Laboriosam adipisci minus quod beatae, sunt quo soluta accusamus similique mollitia iste?";
let p2 = "habineza leon christian";
console.log(readingTime(p1));
console.log(readingTime(p2));