function show() {
    let scroe = Number(document.getElementById('input').value);
    var result = '';
    if  (scroe >100 || scroe <0){
        result = "Error!!"  
    }
    else if (scroe >= 80 && scroe <= 100 ) {
        result = "A"
    }
    else if (scroe < 50) {
        result = "F"
    }
    else if (scroe < 60 ) {
        result = "D"
    }
    else if (scroe < 70 ) {
        result = "C"
    }
    else if (scroe <80 ) {
        result = "A"
    }

    document.getElementById('result').innerHTML = result;
}