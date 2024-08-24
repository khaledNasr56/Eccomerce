const cartItems =[];
const totalPriceElement =document.getElementById('total-price');
const cartItemsElement = document.getElementById('cart-items');

// Function to update the cart display
function updateCarte(){
    cartItemsElement.innerHTML ='';
    let total= 0;
    
    cartItems.forEach(item =>{
        const li =document.createElement('li');
        li.textContent =`${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total}`;
}
// Event listener for add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        cartItems.push({ name, price });
        updateCarte();
    });
});