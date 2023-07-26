// else if statements

// const password = "p@ssword1234";

// if(password.length >= 12){
//     console.log("that password is strong");
// } else if(password.length >= 8){
//     console.log("password is not long enough!");
// } else {
//     console.log("password is not long enough");
// }

/// ----- ///

// logical operators

// const password = "p@ssword1234";

// if(password.length >= 12 && password.includes("@")){
//     console.log("that password is mighty strong");
// } else if(password.length >= 8 || password.includes("@") && password.length > 5){
//     console.log("password is not strong enough!");
// } else {
//     console.log("password is not strong enough");
// }

/// ----- ///

// logical NOT (!)

// let user = false;

// if(!user){
//     console.log("you must be logged in to continue")
// }

// console.log(!true);
// console.log(!false);

/// ----- ///

// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     console.log("your score: ",scores[i]);

//     if(scores[i] === 0){
//       continue;
//     }

//     if (scores[i] === 100){
//         console.log("congrats, you got the top score!");
//         break;
//     }

// }

/// ----- ///

// switch statements
// const grade = "A";

// switch(grade){
//     case "A":
//         console.log("You got an A!")
//         break;
//     case "B":
//         console.log("You got an B!")
//         break;
//     case "C":
//         console.log("You got an C!")
//         break;
//     case "D":
//         console.log("You got an D!")
//         break
//     case "E":
//         console.log("You got an E!")
//         break
//     default:
//         console.log("Not a valid grade!")
// }

/// ----- ///

// variables & block scope

const age = 30;

if(true){
    const age = 40;
    const name = "luigi";
    console.log("outsdide 1st code block: ", age, name);

    if(true){
        const age = 50;
        console.log("outsdide 2nd code block: ", age);
    }
}

console.log("outsdide code block: ", age, name);