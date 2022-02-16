function income(){
    const input = document.getElementById("income-input");
    const incomeInput =parseFloat(input.value);
    if(incomeInput <0){
        console.log("gg");
    }
    else{
        return incomeInput;
    }
}
function expenses(){
    const foodInput = document.getElementById("food-input").value;
    const rentInput = document.getElementById("rent-input").value;
    const clothesInput = document.getElementById("clothes-input").value;
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    document.getElementById("total-expenses").innerText = totalExpenses;
    return totalExpenses;
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