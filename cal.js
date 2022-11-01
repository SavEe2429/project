function show() {
    const price = Number(document.getElementById('price').value);
    const count = Number(document.getElementById('count').value);
    let result = 0;
    for(let i = 1;i <= count;i++) {
        result += price
    }
    document.getElementById('result').innerText = result;

}