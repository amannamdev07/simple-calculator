// Code of Simple Calculator
const cal = document.querySelector('.cal');
cal.addEventListener('click', () => {
    const val1 = Number(document.getElementById("val1").value);
    const val2 = Number(document.getElementById('val2').value);
    const opr = document.getElementById("opr").value;
    const res = document.getElementById('res');

    let total;
    if(opr == "+") {
        total = val1 + val2;
        res.innerHTML = `Result : ${total}`; 
        console.log(total);
    }
    else if(opr == "-") {
        total = val1 - val2;
        res.innerHTML = `Result : ${total}`; 
        console.log(total);
    }
    else if(opr == "*") {
        total = val1 * val2;
        res.innerHTML = `Result : ${total}`; 
        console.log(total);
    }
    else if(opr == "/") {
        total = val1 / val2;
        res.innerHTML = `Result : ${total}`; 
        console.log(total);
    }
    else if(opr == "%") {
        total = val1 % val2;
        res.innerHTML = `Result : ${total}`; 
        console.log(total);
    }
    
})
