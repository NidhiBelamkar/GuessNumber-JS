// Execute in Inspect -> Console

let gennum = Number(prompt("Enter a number"));
let askuser;
while(askuser != gennum){
    askuser = Number (prompt ("Guess the Number"));
}
alert(`Well Done!! The generated number ${gennum} matches the user guess number ${askuser}`);