function clickMe2(){
    let num1 , num2 , sum 
        
    num1 = parseInt(document.getElementById("num1").value)
    num2 = parseInt(document.getElementById("num2").value)

    sum = num1 + num2
    dif = num1 - num2
    prod = num1 * num2
    quot = num1 / num2 

    document.getElementById("sum").innerHTML = sum
    document.getElementById("div").innerHTML = dif
    document.getElementById("product").innerHTML = prod
    document.getElementById("quoti").innerHTML = quot
   
}