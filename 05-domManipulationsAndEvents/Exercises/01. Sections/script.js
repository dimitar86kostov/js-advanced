function create(words) {

   const content = document.getElementById('content');

   for (const word of words) {
      let currendDiv = document.createElement('div');
      let currentP = document.createElement('p');
      currentP.style.display = 'none'
      currentP.textContent = word;
      currendDiv.appendChild(currentP);

      const Btn = currendDiv.addEventListener('click', handleBtn)

      content.appendChild(currendDiv);

      console.log(currendDiv);

      function handleBtn(event) {
         event.preventDefault()
         currentP.style.display = 'block'

      }
   }

}