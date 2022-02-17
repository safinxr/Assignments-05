function redBorder(inputId){
    document.getElementById(inputId).style.border = "1px solid red"
}
function gryBorder(inputId){
    document.getElementById(inputId).style.border = "1px solid lightgray"
}
function getElement(idName){
    const element = document.getElementById(idName);
    return element;
}
function income(){
    const input = getElement("income-input");
    const incomeInput =parseFloat(input.value);
    gryBorder("income-input");
    document.getElementById("eror").innerText = "";
    if(incomeInput <0 || incomeInput =="" || isNaN(input.value)){
        redBorder("income-input");
        document.getElementById("eror").innerText = "Eror: please enter valid income ";
        input.value ="";
    }
    else{  
        return incomeInput;
    }
}
function expenses(){
    const foodInput = getElement("food-input");
    const rentInput = getElement("rent-input");
    const clothesInput = getElement("clothes-input");
    gryBorder("food-input");
    gryBorder("rent-input");
    gryBorder("clothes-input");
    document.getElementById("eror").innerText = "";
    if(foodInput.value <0 || foodInput.value =="" || isNaN(foodInput.value)){
        redBorder("food-input");
        document.getElementById("eror").innerText = "Eror: please enter valid food expenses ";
        input.value ="";
    }
    if(rentInput.value <0 || rentInput.value =="" || isNaN(rentInput.value)){
        redBorder("rent-input");
        document.getElementById("eror").innerText = "Eror: please enter valid rent expenses ";
        input.value ="";
    }
    if(clothesInput.value <0 || clothesInput.value =="" || isNaN(clothesInput.value)){
        redBorder("clothes-input");
        document.getElementById("eror").innerText = "Eror: please enter valid clothes expenses ";
        input.value ="";
    }
    
    else{  
        const totalExpenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
        document.getElementById("total-expenses").innerText = totalExpenses;
        return totalExpenses;
    }
    
}
    
document.getElementById("Calculate-btn").addEventListener('click', function(){
    const incomeInput = income();
    const totalExpenses =expenses();
    const balance =incomeInput - totalExpenses;
    document.getElementById("balance").innerText = balance;
    return balance;    
})
document.getElementById("saveing").addEventListener('click', function(){
    const incomeInput = income();
    const totalExpenses =expenses();
    const saverate =document.getElementById("saverate").value;
    const saveingAmount = incomeInput * parseFloat(saverate)/100 ;
    document.getElementById("saveing-amount").innerText = saveingAmount;
    const remainingBalance = incomeInput - totalExpenses -saveingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;

})