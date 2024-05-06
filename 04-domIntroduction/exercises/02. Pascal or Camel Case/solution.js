function solve() {

  // "secOND eXamPLE", "Pascal Case"
  // "this is an example", "Camel Case"

  let inText = document.getElementById('text').value;
  let inType = document.getElementById("naming-convention").value;
  let result = '';
  
  inText = inText.toLowerCase();
  let arr = inText.split(' ');
  

  if (inType == "Camel Case") {

    result = arr[0];

    for (let i = 1; i < arr.length; i++) {
      const word = arr[i];

      result += word[0].toUpperCase() + word.slice(1);
    }

  } else if (inType == "Pascal Case") {

  
    for (let i = 0; i < arr.length; i++) {
      const word = arr[i];

      result += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result = 'Error'
  }

  document.getElementById('result').textContent = result


}