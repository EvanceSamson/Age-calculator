let userInput = document.getElementById("input");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");


function calculate(){
    let birthDate = new Date(userInput.value);

    let day_of_birth = birthDate.getDate();
    let month_of_birth = birthDate.getMonth() + 1;
    let year_of_birth = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 -year_of_birth;

    if(m2 >= month_of_birth){
        m3 = m2 - month_of_birth;
    }
    else{
        y3--;
        m3 = 12 + m2 - month_of_birth;
    }
    if(d2 >= day_of_birth){
        d3= d2 - day_of_birth;
    }
    else{
        m3--;
        d3 = getDaysInMonth(year_of_birth, month_of_birth) + d2 -day_of_birth;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years old, <span>${m3}</span> months and <span>${d3}</span> days old`;

function getDaysInMonth(year, month){ 
    return new Date(year, month, 0).getDate();
}
}