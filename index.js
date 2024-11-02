const changeUnitBtn = document.getElementById("unitSelection");
const answerBox = document.getElementById("answer");
let unit1 = document.getElementById("unit1");
let unit2 = document.getElementById("unit2");
let answer;
let unitSelected = "Kilograms to Grams";

changeUnitBtn.addEventListener('change', function(){
    unitSelected = changeUnitBtn.value;

    if(unitSelected == "Grams to Kilograms"){
        unit1.innerHTML ="Grams";
        unit2.innerHTML ="Kilograms";
    }
    else if(unitSelected == "Kilograms to Grams"){
        unit1.innerHTML ="Kilograms";
        unit2.innerHTML ="Grams";
    }
    else if(unitSelected == "Kilograms to Tonnes"){
        unit1.innerHTML ="Kilograms";
        unit2.innerHTML ="Tonnes";
    }
    else if(unitSelected == "Tonnes to Kilograms"){
        unit1.innerHTML ="Tonnes";
        unit2.innerHTML ="Kilograms";
    }
    else if(unitSelected == "Metres to Kilometres"){
        unit1.innerHTML ="Metres";
        unit2.innerHTML ="Kilometres";
    }
    else if(unitSelected == "Kilometres to Metres"){
        unit1.innerHTML ="Kilometres";
        unit2.innerHTML ="Metres";
    }
    else if(unitSelected == "Kilometres to Miles"){
        unit1.innerHTML ="Kilometres";
        unit2.innerHTML ="Miles";
    }
    else if(unitSelected == "Miles to Kilometres"){
        unit1.innerHTML ="Miles";
        unit2.innerHTML ="Kilometres";
    }
    else if(unitSelected == "Celsius to Fahrenheit"){
        unit1.innerHTML ="&deg Celsius";
        unit2.innerHTML ="&deg Fahrenheit";
    }
    else if(unitSelected == "Fahrenheit to Celsius"){
        unit1.innerHTML ="&deg Fahrenheit";
        unit2.innerHTML ="&deg Celsius";
    }
})



function doConversion(){
    

    let userInput = document.getElementById('userInput').value;

    if(unitSelected == "Kilograms to Grams"){
        answer = userInput * 1000; 
    }

    else if(unitSelected == "Grams to Kilograms"){
        answer = userInput / 1000; 
    }

    else if(unitSelected == "Kilograms to Tonnes"){
        answer = userInput / 1000; 
    }

    else if(unitSelected == "Tonnes to Kilograms"){
        answer = userInput * 1000; 
    }

    else if(unitSelected == "Metres to Kilometres"){
        answer = userInput / 1000; 
    }

    else if(unitSelected == "Kilometres to Metres"){
        answer = userInput * 1000; 
    }

    else if(unitSelected == "Kilometres to Miles"){
        answer = userInput / 1.60934;
        answer = answer.toFixed(3);//rounds the answer to 3 dp
    }

    else if(unitSelected == "Miles to Kilometres"){
        answer = userInput * 1.60934;
        answer = answer.toFixed(3); //rounds the answer to 3 dp
    }

    else if(unitSelected == "Celsius to Fahrenheit"){
        answer =( userInput * 9/5) +32;
        answer = answer.toFixed(3); //rounds the answer to 3 dp
    }
    else if(unitSelected == "Fahrenheit to Celsius"){
        answer =( userInput -32) *5/9;
        answer = answer.toFixed(3); //rounds the answer to 3 dp
    }

    answerBox.value = answer;

    
}

