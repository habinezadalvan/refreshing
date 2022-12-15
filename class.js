class Try {
    constructor(firstName, lastName){
        this.me1 = firstName;
        this.me2 = lastName;
        this.validEmail = (email, password) => {
            console.log(email);
            const emailValidation = email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
            console.log(emailValidation);
            if (emailValidation){
                this.me3 = email;
                this.password = password;
            } else{
                this.password = undefined;
                alert("Email is not valid");
            }
        }
       
    }
}

const me = new Try("JEAN", "LEE");
me.validEmail( "leee@gmail.com" , "12344");


// You can add a method to the Person object and javascript will link it to the global Object prototype so that it can be accessible.

Try.prototype.CallMyName = function () {
    return `Hello ${this.me1}`;
}

const me2 = new Try("Leon", "habi")

me2.hidePassword = function(){
    me2.validEmail( "leee@gmail.com" , "12344");
    let passwordArray = this.password.split("");
    
    let hiddenPasswordArray = [];
    if(passwordArray.length === 0) return 'No password';

    while(passwordArray.length > 0 ){
        passwordArray.length --;
        hiddenPasswordArray.push(".")
    }  
    return hiddenPasswordArray;
    
};



const logToConsole = () => {

// console.log(me.validEmail());
console.log(parseFloat(99.4999999999999).toFixed(2));
    console.log("======", me);
    console.log(me2.hidePassword());
    // This sayAge method will online to linked to he me2 object not the global Object prototype, therefore it will can an error
    // when trying to access it on another object
    console.log(me.hidePassword());
    
    console.log(me2.CallMyName());
}

logToConsole();

/** multiple 
 * lines 
 * comment
 */