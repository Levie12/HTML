function clickMe2(){
    let fname , mname , lname , fullname


    fname = document.getElementById("fname").value
    mname = document.getElementById("mname").value
    lname = document.getElementById("lname").value

    fullname = fname + mname + lname

    document.getElementById("fullname").innerHTML = fullname
}