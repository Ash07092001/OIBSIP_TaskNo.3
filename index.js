function convert(){
    var temp = document.getElementById("temp").value;
    var metric = document.getElementById("metric").value;
    console.log(temp, metric);
    var answer_one;
    var answer_two;
    if(temp.length==0 || temp==null){
        document.getElementById("message").innerHTML = "Temperature field empty";
    }else if(metric=="c"){
        temp = Number(temp);
        answer_one = (temp*9/5)+32;
        answer_two = temp + 273;
        document.getElementById("message").innerHTML = "Fahrenheit: "+answer_one+", Kelvin: "+answer_two;
    }else if(metric=="f"){
        temp = Number(temp);
        answer_one = (temp-32)*5/9;
        answer_two = answer_one + 273;
        document.getElementById("message").innerHTML = "Celcius: "+answer_one+", Kelvin: "+answer_two;
    }else if(metric=="k"){
        temp = Number(temp);
        answer_one = temp - 273;
        answer_two = (answer_one*9/5)+32;
        document.getElementById("message").innerHTML = "Celcius: "+answer_one+", Fahrenheit: "+answer_two;
    }
}