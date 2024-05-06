function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let table = Array.from(document.querySelectorAll('tbody tr'));
   let searchRef = document.getElementById("searchField");

   function onClick() {

      let search = searchRef.value;

      for (let i = 0; i < table.length; i++) {
         let row = table[i];
         let rowData = Array.from(row.querySelectorAll('td'));


         for (const data of rowData) {

            if (data.textContent.includes(search)) {
               row.classList.add('select');
               break;
            } else {
               row.classList.remove('select')
            }
         }

         search.value = '';
      }
   }
}