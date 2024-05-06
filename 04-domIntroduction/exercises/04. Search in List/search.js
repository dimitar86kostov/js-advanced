function search() {

   let search = document.getElementById("searchText").value
   let table = Array.from(document.querySelectorAll('#towns li'));

   let matches = 0;

   for (const town of table) {

      if (town.textContent.includes(search)) {
         town.style.textDecoration = `underline`;
         town.style.fontWeight = `bold`;
         matches++
      }
   }
   document.getElementById("searchText").value = '';
   document.getElementById("result").textContent = `${matches} matches found`

}
