const DOB = document.querySelector("#DOB");
const luckyNumber = document.querySelector("#luckyNumber");
const button =document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box"); 


alert("We are not storing your personal data!.. This is just for fun🤗");
function compareValues(sum, luckyNumber){
  // console.log(sum, luckyNumber);
    if(sum%luckyNumber===0){
        outputBox.value = "Your birthday is lucky 🤩";
        alert("I am repeating again..We are not storing your personal data!.. This is just for fun🤗");
    }else{
        outputBox.value = "Your Birthday is not lucky 😑"; 
        alert("I am repeating again..We are not storing your personal data!.. This is just for fun🤗");
    }
}
function checkBirthDateIsLucky(){
    const dob = DOB.value;
    const sum = calculateSum(dob);
    //console.log(sum);
    if(sum && dob){
       compareValues(sum,luckyNumber.value);  
    }else{
        outputBox.value = "Please enter both the fields🙄";
        alert("I am repeating again..We are not storing your personal data!.. This is just for fun🤗");
    }
   
}
// this will replace - from none and convert string into no. and return sum
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}
button.addEventListener('click',checkBirthDateIsLucky)

