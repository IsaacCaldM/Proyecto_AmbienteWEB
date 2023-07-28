function updateQuantityAndPrice() {
    const cantidadInput = document.getElementById('cantidad');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const precioTotal = document.getElementById('precio-total');
  
    const precioUnitario = 100;
  
    function updatePrice(cantidad) {
      const total = precioUnitario * cantidad;
      precioTotal.textContent = `$${total}`;
    }
  
    incrementBtn.addEventListener('click', () => {
      let cantidad = parseInt(cantidadInput.value);
      cantidadInput.value = (cantidad + 1).toString();
      updatePrice(cantidad + 1);
    });
  
    decrementBtn.addEventListener('click', () => {
      let cantidad = parseInt(cantidadInput.value);
      cantidad = cantidad > 1 ? cantidad - 1 : 1;
      cantidadInput.value = cantidad.toString();
      updatePrice(cantidad);
    });
  
    updatePrice(1);
  }