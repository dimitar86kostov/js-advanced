function solve() {

   const products = Array.from(document.querySelectorAll('[class="product-title"]'));
   const prices = Array.from(document.querySelectorAll('[class="product-line-price"]'));
   const textField = document.getElementsByTagName('textarea')[0];

   const addBtn = Array.from(document.getElementsByClassName("add-product"));
   const checkOutBtn = document.getElementsByClassName('checkout')[0];

   checkOutBtn.addEventListener('click', handleCheckOutBtn)

   let list = new Set();
   let totalPrice = 0

   for (let i = 0; i < products.length; i++) {

      addBtn[i].addEventListener('click', handleAddBtn);
      textField.textContent = '';

      function handleAddBtn(event) {
         event.preventDefault();
         let price = Number(prices[i].textContent);
         let product = products[i].textContent;

         textField.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
         list.add(product);
         totalPrice += price;
      }
   }

   function handleCheckOutBtn(event) {
      event.preventDefault();
      
      let uniProducts = Array.from(list);
      
      textField.textContent += `You bought ${uniProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
      checkOutBtn.disabled = true;
      addBtn[0].disabled = true;
      addBtn[1].disabled = true;
      addBtn[2].disabled = true;

   }
}