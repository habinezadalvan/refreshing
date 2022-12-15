const extendedFamily = {
    familyName: "Rozaliya & Rusimbukande",
    subFamilies: [
        {familyName: "Console & Laurent", subFamilies: 
        [{familyName: "Leon & Divine", subFamilies: [{familyName: "Lyon HabinezaI", subFamilies: [{familyName:"HabinezaII", subFamilies:[]}]}]}]},
        {familyName: "Yvone", subFamilies: [{familyName: "Kevine", subFamilies:[]}, {familyName: "Elvine", subFamilies: []}, {familyName: "bucura", subFamilies:[]}]}
    ]
}

const familyTree = (family) => {
    let families = family.familyName;
    for(let subFamily of family.subFamilies) {
        families += '\n' + familyTree(subFamily);
    }
    return families; 
}

// console.log(familyTree(extendedFamily));

const car = {
    name: "Chevrolet",
    model: "Cruze",
    year: 2014,
    color: "black",
}

console.log("name" in car);