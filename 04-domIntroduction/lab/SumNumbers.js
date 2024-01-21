function calc() {

    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let result = document.getElementById('sum');

    result.value = Number(n1) + Number(n2)

    console.log(result);
}
