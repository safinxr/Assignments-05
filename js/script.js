function income(){
    const input = document.getElementById("income-input").value;
    const incomeInput =parseFloat(input);
    return incomeInput
}
function expenses(){
    const foodInput = document.getElementById("food-input").value;
    const rentInput = document.getElementById("rent-input").value;
    const clothesInput = document.getElementById("clothes-input").value;
    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    document.getElementById("total-expenses").innerText = totalExpenses;
    return totalExpenses;
}
function balance(){
    const balance = - totalExpenses;
    document.getElementById("balance").innerText = balance;
    return balance; 
}
    
document.getElementById("Calculate-btn").addEventListener('click', function(){
    const incomeInput = income();
    const totalExpenses =expenses();
    
       
})
document.getElementById("saveing").addEventListener('click', function(){
    const incomeInput = income();
    const saverate =document.getElementById("saverate").value;
    const saveingAmount = incomeInput * parseFloat(saverate)/100 ;
    document.getElementById("saveing-amount").innerText = saveingAmount;
})