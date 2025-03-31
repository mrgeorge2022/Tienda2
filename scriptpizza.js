// Función para ocultar la animación de bienvenida
function hideWelcomeLoader() {
  var welcomeLoader = document.getElementById('welcome-loader');
  welcomeLoader.style.display = 'none'; // Ocultar la animación de bienvenida
}

// Ejecutamos la función cuando la página haya cargado completamente
window.addEventListener('load', function() {
  // Esperamos 4 segundos para que la animación de bienvenida se complete
  setTimeout(hideWelcomeLoader, 1000); // El tiempo puede ser ajustado (1000s = 1 segundos)
});
















// EVITAR CLICK DERECHO EN TODA LA PÁGINA
document.addEventListener('contextmenu', (e) => e.preventDefault());

// RESTRINGIR TODOS LOS TIPOS DE ZOOM EN MÓVILES
if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {

    // Evitar el gesto de pinza para hacer zoom
    document.addEventListener('touchstart', (event) => {
        if (event.touches.length > 1) {
            event.preventDefault(); // Bloquea zoom de pinza
        }
    }, { passive: false });

    // Evitar zoom en doble toque
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault(); // Bloquea zoom en doble toque
        }
        lastTouchEnd = now;
    }, false);
}

// EVITAR ZOOM AUTOMÁTICO EN CAMPOS DE TEXTO EN MÓVILES
document.querySelectorAll('input, textarea, select').forEach((element) => {
    element.addEventListener('focus', () => {
        document.body.style.zoom = '100%'; // Previene el zoom en campos de entrada
    });
    element.addEventListener('blur', () => {
        document.body.style.zoom = ''; // Restaura el estilo de zoom después
    });
});

// RESTRINGIR ZOOM GLOBAL A TRAVÉS DE META TAGS
const metaTag = document.createElement('meta');
metaTag.name = 'viewport';
metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
document.head.appendChild(metaTag);

// RESTRINGIR ZOOM EN NAVEGADORES DE ESCRITORIO
// Evitar zoom con teclado (Ctrl/Cmd + "+" o "-" o "0")
document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault(); // Bloquea zoom con teclado
    }
});

// Evitar zoom con rueda del ratón (Ctrl/Cmd + Scroll)
document.addEventListener('wheel', (event) => {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault(); // Bloquea zoom con scroll
    }
}, { passive: false });















// BARRA SUPERIOR
// Asegúrate de que la barra y el botón estén ocultos al cargar la página
window.addEventListener("load", function () {
    const floatingBanner = document.querySelector(".floating-banner");
    const scrollTopButton = document.getElementById("scrollTopButton");

    // Ocultar los elementos al recargar la página
    floatingBanner.style.display = "none";
    scrollTopButton.style.display = "none";
});

  // Barra que aparece al bajar más de 200px
window.addEventListener("scroll", function () {
    const floatingBanner = document.querySelector(".floating-banner");

    // Verificar si el desplazamiento es mayor a 200px
    if (window.scrollY > 200) {
      floatingBanner.style.display = "flex"; // Muestra la barra cuando se baja más de 200px
    } else {
      floatingBanner.style.display = "none"; // Oculta la barra si no se ha bajado más de 200px
    }

    const scrollTopButton = document.getElementById("scrollTopButton");

    // Mostrar el botón cuando el usuario se desplace hacia abajo
    if (window.scrollY > 200) {
      scrollTopButton.style.display = "block"; // Muestra el botón
    } else {
      scrollTopButton.style.display = "none"; // Oculta el botón cuando no se ha desplazado
    }
});

  // Función para desplazarse hacia arriba al hacer clic
document.getElementById("scrollTopButton").addEventListener("click", function () {
    window.scrollTo({
    top: 0,
      behavior: "smooth" // Desplazamiento suave
    });
});



// Array de imágenes
const images = [
  'anuncios/ILUSTRACION1.jpg',
  'anuncios/ILUSTRACION2.jpg',
  'anuncios/ILUSTRACION3.jpg',
  'anuncios/ILUSTRACION4.jpg',
  'anuncios/ILUSTRACION6.jpg',
  'anuncios/ILUSTRACION8.jpg',
  'anuncios/ILUSTRACION9.jpg',
  'anuncios/ILUSTRACION10.jpg',

];

let currentImageIndex = 0;

// Referencia al contenedor
const anuncio = document.getElementById('anuncios');

// Crear la primera imagen
let currentImg = document.createElement('img');
currentImg.src = images[currentImageIndex];
currentImg.classList.add('active'); // Mostrar la imagen inicial
anuncio.appendChild(currentImg);

// Función para cambiar la imagen
function changeImage() {
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  // Crear la nueva imagen
  const nextImg = document.createElement('img');
  nextImg.src = images[nextImageIndex];
  anuncio.appendChild(nextImg);

  // Desvanecer la imagen actual y mostrar la nueva
  setTimeout(() => {
    nextImg.classList.add('active'); // Mostrar la nueva imagen
    currentImg.classList.remove('active'); // Ocultar la imagen actual

    // Eliminar la imagen anterior después de la transición
    setTimeout(() => {
      anuncio.removeChild(currentImg);
      currentImg = nextImg; // Actualizar la referencia de la imagen actual
    }, 1000); // Tiempo que coincide con la duración de la transición
  }, 50);

  // Actualizar el índice
  currentImageIndex = nextImageIndex;
}

// Cambiar la imagen cada 5 segundos
setInterval(changeImage, 5000);

// Iniciar el ciclo de cambio de imágenes
changeImage();







// FUNCIÓN PARA BUSCAR PRODUCTOS POR NOMBRE 
function searchProducts() {
  const searchQuery = document.getElementById('search-input').value;
  displayProducts('', searchQuery); // Se pasa la consulta de búsqueda al filtro
}














// FUNCIÓN PARA FORMATEAR LOS NÚMEROS CON PUNTOS COMO SEPARADORES DE MILES
function formatNumber(number) {
  return number.toLocaleString('es-CO');}









// Función para manejar la selección de categoría
function selectCategory(category) {
  // Elimina la clase 'active' de todos los enlaces
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.classList.remove('active'); // Eliminar 'active' de todos los enlaces
  });

  // Añadir la clase 'active' al enlace de la categoría seleccionada
  const categoryLink = document.querySelector(`nav ul li a[onclick="displayProducts('${category}')"]`);
  if (categoryLink) {
    categoryLink.classList.add('active'); // Marca como activa la categoría seleccionada
  }

  // Guardar la categoría seleccionada en localStorage
  localStorage.setItem('selectedCategory', category);

  // Llamar a displayProducts() para mostrar los productos correspondientes
  displayProducts(category);
}

// Modificación para mostrar la categoría "todos" al recargar
document.addEventListener('DOMContentLoaded', () => {
  // Al cargar la página, seleccionamos "todos" por defecto
  const defaultCategory = 'todos';
  selectCategory(defaultCategory); // Llama a selectCategory con 'todos'
});

// Llama a esta función cada vez que se seleccione una categoría
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let category = link.getAttribute('onclick').match(/'([^']+)'/);
    category = category ? category[1] : ''; // Extrae la categoría o asigna vacío si no tiene
    selectCategory(category); // Selecciona la categoría
  });
});










// SIMULA LA CARGA DE PRODUCTOS Y SU VISUALIZACIÓN EN LA PÁGINA PRINCIPAL

let cart = []; // Este arreglo almacenará los productos del carrito con su cantidad

function displayProducts(category = '', searchQuery = '') {
  const products = [
    { 
      id: 18, 
      image: 'img/productos/armatupizza.jpg', 
      name: 'Arma Tu Pizza', 
      category: ['todos', 'pizzas'], 
      description: '¡La clásica pizza Margarita con queso mozzarella y albahaca fresca!' 
    },
    { 
      id: 19, 
      image: 'img/productos/pizzamargarita.jpg', 
      name: 'Pizza Margarita', 
      category: ['todos', 'pizzas', 'recomendados'], 
      description: '¡La clásica pizza Margarita con queso mozzarella y albahaca fresca!' 
    },
    { 
      id: 20, 
      image: 'img/productos/pizzapepperoni.jpg', 
      name: 'Pizza Pepperoni', 
      category: ['todos', 'pizzas'], 
      description: '¡Deliciosa pizza con pepperoni y queso mozzarella!' 
    },
  ];

  const filteredProducts = products.filter(p => {
    // Filtrar por categoría si es proporcionada
    const matchesCategory = category ? p.category.includes(category) : true;
    const matchesSearchQuery = searchQuery ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesCategory && matchesSearchQuery;
  });

  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  // Recuperar cantidad de producto seleccionado desde el carrito desde localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Mostrar los productos filtrados
  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');
    productElement.id = `product-${product.id}`;

// Buscar la cantidad total del producto en el carrito
const quantityInCart = cart
  .filter(item => item.name === product.name) // Filtrar todos los productos con el mismo nombre
  .reduce((total, item) => total + item.quantity, 0); // Sumar las cantidades

productElement.onclick = function() {
  openModal(product.id); // Llama a la función openModal con el ID del producto
};

productElement.innerHTML = `
  <img src="${product.image}" alt="${product.name}" class="product-image">
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <div id="contenedorcontadorcarrito">
    <button onclick="event.stopPropagation(); openModal(${product.id})">
      Ordenar
      <!-- Mostrar la cantidad encima del botón si hay productos en el carrito -->
      ${quantityInCart > 0 ? `<span class="product-quantity">${quantityInCart}</span>` : ''}
    </button>
  </div>
`;

// Agregar el producto al contenedor de la lista
productList.appendChild(productElement);
  });
}



// Función para activar el enlace de la categoría seleccionada en el listado 
function activateCategoryLink(category) {
  // Primero, eliminamos la clase 'active' de todos los enlaces
  const allLinks = document.querySelectorAll('nav ul li a, .custom-dropdown-menu a');
  allLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Luego, agregamos la clase 'active' al enlace seleccionado
  const selectedLink = document.querySelector(`a[href*="${category}"]`);
  if (selectedLink) {
    selectedLink.classList.add('active');
  }

  // Filtrar los productos según la categoría seleccionada
  displayProducts(category);

  // Cerrar el submenú al seleccionar una categoría
  const dropdownMenu = document.querySelector('.custom-dropdown-menu');
  dropdownMenu.classList.remove('open');
  
  // Cambiar el icono de la flecha a ▼
  const span = document.querySelector('.custom-dropdown-toggle span');
  if (span) {
    span.textContent = '▼';
  }
}
//funcion para al desplegar es spam ▼ se cambie correspondinte a su estado 
function toggleCategoryDropdown(event) {
  event.preventDefault(); // Evita comportamientos no deseados

  const dropdownToggle = event.target.closest('.custom-dropdown-toggle');
  if (!dropdownToggle) return;

  const dropdownMenu = dropdownToggle.closest('.dropdown-container').querySelector('.custom-dropdown-menu');
  dropdownMenu.classList.toggle('open');

  const span = dropdownToggle.querySelector('span');
  if (span) {
    span.textContent = dropdownMenu.classList.contains('open') ? '▲' : '▼';
  }
}

// Función para cerrar el submenú si se hace clic fuera de él
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown-container');
  const dropdownMenu = dropdown.querySelector('.custom-dropdown-menu');
  
  // Verifica si el clic fue fuera del dropdown
  if (!dropdown.contains(event.target)) {
    dropdownMenu.classList.remove('open');
    const span = dropdown.querySelector('.custom-dropdown-toggle span');
    
    // Manejo seguro del cambio del texto de la flecha
    if (span) {
      span.textContent = '▼';  // Vuelve a mostrar la flecha hacia abajo
    }
  }
});











// FUNCIÓN PARA ABRIR EL MODAL CON LOS DETALLES DEL PRODUCTO
function openModal(productId) {
  const products = [
    {
      id: 18,
      image: 'img/productos/armatupizza.jpg',
      name: 'Arma Tu Pizza',
      category: ['todos', 'pizzas', 'recomendados'],
      price: 20000,
      description: '¡Personaliza tu pizza con los ingredientes que más te gusten!',
      flavorOptions: [
        { name: 'Jamón', price: 5000 },
        { name: 'Queso', price: 4000 },
        { name: 'Pepperoni', price: 6000 },
        { name: 'Champiñones', price: 4500 },
        { name: 'Tocineta', price: 7000 },
        { name: 'Pollo', price: 6500 },
        { name: 'Vegetales', price: 3000 }
      ],
      checkboxOptions: [
        { name: 'Borde Queso', price: 10000 },
        { name: 'Borde Queso y Bocadillo', price: 15000 }
      ],
      sizeOptions: [
        { size: 'Pequeña x6', price: 10000 },
        { size: 'Mediana x8', price: 20000 },
        { size: 'Familiar x12', price: 50000 }
      ],
      additionalOptions: ['Orégano', 'Salsa de ajo', 'Maíz']
    },
    { 
      id: 19, 
      image: 'img/productos/armatupizza.jpg', 
      name: 'Pizza Margarita', 
      category: ['todos', 'pizzas', 'recomendados'], 
      price: 20000, 
      description: '¡La clásica pizza Margarita con queso mozzarella y albahaca fresca!',
      checkboxOptions: [
        { name: 'Borde Queso', price: 10000 },
        { name: 'Borde Queso y Bocadillo', price: 15000 }
      ], // Opciones específicas con precios
      sizeOptions: [
        { size: 'Pequeña x6', price: 10000 },
        { size: 'Mediana x8', price: 20000 },
        { size: 'Familiar x12', price: 50000 }
      ], // Opciones de tamaño con precios
      additionalOptions: ['Orégano', 'Salsa de ajo', 'Maíz'] // Opciones adicionales
    },
    { 
      id: 20, 
      image: 'img/productos/pizzapepperoni.jpg', 
      name: 'Pizza Pepperoni', 
      category: ['todos', 'pizzas'], 
      price: 22000, 
      description: '¡Deliciosa pizza con pepperoni y queso mozzarella!',
      checkboxOptions: [
        { name: 'Extra pepperoni', price: 12000 },
        { name: 'Sin queso', price: 0 },
        { name: 'Masa gruesa', price: 5000 }
      ], // Opciones específicas con precios
      sizeOptions: [
        { size: 'Pequeña x6', price: 12000 },
        { size: 'Mediana x8', price: 22000 },
        { size: 'Familiar x12', price: 52000 }
      ], // Opciones de tamaño con precios
      additionalOptions: ['Orégano', 'Salsa de ajo', 'Maíz'] // Opciones adicionales
    },
  ];


// FUNCIÓN PARA MOSTRAR LA INFORMACIÓN DEL PRODUCTO EN UN MODAL
const product = products.find(p => p.id === productId);
if (product) {
  // Mostrar información básica del producto
  document.getElementById('modal-product-name').innerText = product.name;
  document.getElementById('modal-product-image').src = product.image;
  document.getElementById('modal-product-description').innerText = product.description;

  // Inicializar el precio dinámico
  let dynamicPrice = 0;

  // Actualizar el precio en el modal
  const updatePrice = () => {
    const sizeCheckboxes = document.querySelectorAll('#modal-size-container input[type="checkbox"]');
    const borderCheckboxes = document.querySelectorAll('#modal-checkbox-container input[type="checkbox"]');
    const additionalCheckboxes = document.querySelectorAll('#modal-additional-container input[type="checkbox"]');
    const flavorCheckboxes = document.querySelectorAll('#modal-flavor-container input[type="checkbox"]');
    const quantityInput = document.getElementById('modal-quantity'); // Campo de cantidad
    const totalPriceElement = document.getElementById('modal-product-price'); // Elemento para mostrar el precio total

    // Reiniciar el precio dinámico
    dynamicPrice = 0;

    // Sumar precios de tamaños seleccionados
    sizeCheckboxes.forEach(cb => {
      if (cb.checked) {
        const sizeOption = product.sizeOptions.find(option => option.size === cb.value);
        if (sizeOption) dynamicPrice += sizeOption.price;
      }
    });

    // Sumar precios de bordes seleccionados
    borderCheckboxes.forEach(cb => {
      if (cb.checked) {
        const borderOption = product.checkboxOptions.find(option => option.name === cb.value);
        if (borderOption) dynamicPrice += borderOption.price;
      }
    });

    // Sumar precios de sabores seleccionados
    flavorCheckboxes.forEach(cb => {
      if (cb.checked) {
        const flavorOption = product.flavorOptions.find(option => option.name === cb.value);
        if (flavorOption) dynamicPrice += flavorOption.price;
      }
    });

    // Sumar precios de adicionales seleccionados
    additionalCheckboxes.forEach(cb => {
      if (cb.checked) {
        // Aquí puedes agregar un precio fijo para adicionales si es necesario
        dynamicPrice += 0; // Cambia este valor si los adicionales tienen precio
      }
    });

    // Obtener la cantidad seleccionada
    const quantity = parseInt(quantityInput.value, 10) || 1; // Asegurarse de que sea un número válido

    // Calcular el precio total
    const totalPrice = dynamicPrice * quantity;

    // Actualizar el precio total en el DOM
    totalPriceElement.innerText = `${formatNumber(totalPrice)}`;
  };

  // Escuchar cambios en el campo de cantidad
  document.getElementById('modal-quantity').addEventListener('input', updatePrice);

  // Escuchar cambios en los checkboxes
  document.querySelectorAll('#modal-size-container input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updatePrice);
  });
  document.querySelectorAll('#modal-checkbox-container input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updatePrice);
  });
  document.querySelectorAll('#modal-additional-container input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updatePrice);
  });
  document.querySelectorAll('#modal-flavor-container input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', updatePrice);
  });

  // Generar opciones de tamaño dinámicamente con precios
  const modalSizeContainer = document.getElementById('modal-size-container');
  modalSizeContainer.innerHTML = ''; // Limpiar contenido previo
  product.sizeOptions.forEach(option => {
    const checkbox = document.createElement('label');
    checkbox.innerHTML = `
      <input type="checkbox" name="size" value="${option.size}">
       ${option.size}: $${formatNumber(option.price)}
    `;
    const input = checkbox.querySelector('input');

    // Permitir solo una selección
    input.addEventListener('change', () => {
      const checkboxes = modalSizeContainer.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(cb => {
        if (cb !== input) cb.checked = false;
      });
      updatePrice(); // Actualizar el precio
    });

    modalSizeContainer.appendChild(checkbox);
  });

  // Generar checkboxes dinámicamente para bordes
  const modalCheckboxContainer = document.getElementById('modal-checkbox-container');
  modalCheckboxContainer.innerHTML = ''; // Limpiar contenido previo
  product.checkboxOptions.forEach(option => {
    const checkbox = document.createElement('label');
    checkbox.innerHTML = `
      <input type="checkbox" value="${option.name}">
      ${option.name}: $${formatNumber(option.price)}
    `;
    const input = checkbox.querySelector('input');

    // Permitir solo una selección
    input.addEventListener('change', () => {
      const checkboxes = modalCheckboxContainer.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(cb => {
        if (cb !== input) cb.checked = false;
      });
      updatePrice(); // Actualizar el precio
    });

    modalCheckboxContainer.appendChild(checkbox);
  });

  // Generar checkboxes dinámicamente para sabores (solo para el producto con id 18)
  const modalFlavorContainer = document.getElementById('modal-flavor-container');
  modalFlavorContainer.innerHTML = ''; // Limpiar contenido previo
  
  if (product.id === 18) { // Exclusivamente para el producto con id 18
    document.getElementById('Eligesabores').style.display = 'block'; // Asegurar que el título de sabores sea visible
    modalFlavorContainer.style.display = 'block'; // Asegurar que el contenedor de sabores sea visible

    product.flavorOptions.forEach(option => {
      const checkbox = document.createElement('label');
      checkbox.innerHTML = `
        <input type="checkbox" value="${option.name}">
        ${option.name}: $${formatNumber(option.price)}
      `;
      const input = checkbox.querySelector('input');
  
      // Limitar la selección a un máximo de 2 sabores
      input.addEventListener('change', () => {
        const checkboxes = modalFlavorContainer.querySelectorAll('input[type="checkbox"]');
        const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  
        if (selectedCount > 2) {
          input.checked = false; // Desmarcar si ya hay 2 seleccionados
        }
        updatePrice(); // Actualizar el precio
      });
  
      modalFlavorContainer.appendChild(checkbox);
    });
  } else {
    modalFlavorContainer.innerHTML = ''; // Limpiar el contenedor de sabores
    document.getElementById('Eligesabores').style.display = 'none'; // Ocultar el título de sabores
    modalFlavorContainer.style.display = 'none'; // Ocultar el contenedor de sabores
  }

  // Generar checkboxes dinámicamente para adicionales
  const modalAdditionalContainer = document.getElementById('modal-additional-container');
  modalAdditionalContainer.innerHTML = ''; // Limpiar contenido previo
  product.additionalOptions.forEach(option => {
    const checkbox = document.createElement('label');
    checkbox.innerHTML = `
      <input type="checkbox" value="${option}">
      ${option}
    `;
    const input = checkbox.querySelector('input');

    // Limitar la selección a solo 2 adicionales
    input.addEventListener('change', () => {
      const checkboxes = modalAdditionalContainer.querySelectorAll('input[type="checkbox"]');
      const selectedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

      if (selectedCount > 2) {
        input.checked = false; // Desmarcar si ya hay 2 seleccionados
      }
      updatePrice(); // Actualizar el precio
    });

    modalAdditionalContainer.appendChild(checkbox);
  });

  // Mostrar el modal
  document.getElementById('product-modal').style.display = 'flex';

  // Inicializar el precio en el modal
  updatePrice();




    // Buscar el producto en el carrito
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(item => item.name === product.name);

  // Si el producto ya está en el carrito, mostrar las instrucciones y cantidad previas
  if (existingProduct) {
    document.getElementById('modal-product-instructions').value = existingProduct.instructions || '';
    document.getElementById('modal-quantity').value = existingProduct.quantity || 1;
  } else {
    // Si no está en el carrito, reiniciar los campos
    document.getElementById('modal-product-instructions').value = '';
    document.getElementById('modal-quantity').value = 1;
  }
  

  document.getElementById('product-modal').style.display = 'flex'; // Mostrar modal centrado
}
}

// FUNCIÓN PARA CERRAR EL MODAL
function closeModal() {
  document.getElementById('product-modal').style.display = 'none';
}

// CERRAR EL MODAL AL HACER CLIC FUERA DEL CONTENIDO
window.onclick = function (event) {
  const modal = document.getElementById('product-modal');
  if (event.target === modal) {
      closeModal();
  }
};








// FUNCIÓN PARA AGREGAR AL CARRITO DESDE EL MODAL
function addToCartFromModal() {
  console.log('Verificando si la tienda está abierta o en reserva...');

  // VERIFICAR SI LA TIENDA ESTÁ ABIERTA O EN RESERVA
  const estadoTienda = document.getElementById('estado-tienda').textContent; // Obtener el texto del estado

  if (estadoTienda === "La tienda está cerrada.") {
    alert("La tienda está cerrada, no puedes agregar productos al carrito en este momento. Te invitamos a ver nuestro horario");
    return; // DETIENE LA FUNCIÓN SI LA TIENDA ESTÁ CERRADA Y NO EN RESERVA
  }

  // Si la tienda está en estado de "reserva"
  if (estadoTienda === "La tienda está cerrada, pero puedes hacer una reserva.") {
    alert("La tienda está cerrada, pero puedes hacer una reserva. ¡Agregando al carrito!");
  }

  const name = document.getElementById('modal-product-name').innerText;
  const priceFormatted = document.getElementById('modal-product-price').innerText;
  const instructions = document.getElementById('modal-product-instructions').value.trim(); // Instrucciones
  const newQuantity = parseInt(document.getElementById('modal-quantity').value, 10); // Nueva cantidad
  const image = document.getElementById('modal-product-image').src; // Imagen del producto
  const price = parseInt(priceFormatted.replace(/\./g, '').replace('$', ''), 10); // Convertir el precio dinámico a un valor numérico

  // Verificar si hay campos vacíos en los checkboxes
  const sizeCheckboxes = document.querySelectorAll('#modal-size-container input[type="checkbox"]');
  const flavorCheckboxes = name === "Arma Tu Pizza" ? document.querySelectorAll('#modal-flavor-container input[type="checkbox"]') : [];

  const isSizeSelected = Array.from(sizeCheckboxes).some(cb => cb.checked);
  const isFlavorSelected = name === "Arma Tu Pizza" ? Array.from(flavorCheckboxes).some(cb => cb.checked) : true; // Verificar si hay sabores seleccionados solo para "Arma Tu Pizza"
  const isFlavorValid = name === "Arma Tu Pizza" ? Array.from(flavorCheckboxes).filter(cb => cb.checked).length <= 2 : true;

  // Si algún campo está vacío o hay más de 2 sabores seleccionados, evitar añadir al carrito y hacer scroll al contenedor vacío
  if (!isSizeSelected || !isFlavorSelected || !isFlavorValid) {
    if (!isSizeSelected) {
      const sizeContainer = document.getElementById('modal-size-container');
      sizeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      sizeContainer.classList.add('highlight-error'); // Agregar clase para resaltar
    } else if (!isFlavorSelected) {
      const flavorContainer = document.getElementById('modal-flavor-container');
      flavorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      flavorContainer.classList.add('highlight-error'); // Agregar clase para resaltar
    } else if (!isFlavorValid) {
      const flavorContainer = document.getElementById('modal-flavor-container');
      flavorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      flavorContainer.classList.add('highlight-error'); // Agregar clase para resaltar
    }

    // Eliminar la clase de error después de 2 segundos
    setTimeout(() => {
      document.querySelectorAll('.highlight-error').forEach(el => el.classList.remove('highlight-error'));
    }, 2000);

    return; // Salir de la función
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Agregar el producto al carrito sin eliminar los existentes
  cart.push({ name, price, instructions, quantity: newQuantity, image });

  // Guardar el carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Actualizar el contador del carrito
  updateCartCount();





  

  // MOSTRAR LA ANIMACIÓN DEL CARRITO EXPANDIÉNDOSE
  const cartButton = document.getElementById('floating-cart');
  cartButton.classList.add('expanded'); // Expande el botón

  // MOSTRAR LA NOTIFICACIÓN
  showNotification(`${name} ha sido agregado al carrito.`);

  // DESPUÉS DE 3 SEGUNDOS, RESTAURAR EL TAMAÑO DEL CARRITO Y OCULTAR LA NOTIFICACIÓN
  setTimeout(() => {
    cartButton.classList.remove('expanded');
    hideNotification();
  }, 3000); // Mantener expandido por 3 segundos

  closeModal(); // Cierra el modal después de agregar al carrito

  // Obtener la categoría seleccionada antes de agregar al carrito
  const selectedCategory = localStorage.getItem('selectedCategory');

  // Después de agregar al carrito, volver a la misma categoría seleccionada
  if (selectedCategory) {
    displayProducts(selectedCategory); // Muestra los productos de la categoría guardada
  }
}


// FUNCIÓN PARA MOSTRAR LA NOTIFICACIÓN
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.innerText = message; // Asigna el mensaje a la notificación

  // Mostrar la notificación
  notification.classList.add('show');
}

// FUNCIÓN PARA OCULTAR LA NOTIFICACIÓN
function hideNotification() {
  const notification = document.getElementById('notification');
  notification.classList.remove('show');
}





// MOSTRAR TODOS LOS PRODUCTOS AL CARGAR LA PÁGINA
window.onload = function() {displayProducts();};






//FUNCION PARA LA CANTIDAD QUE SE INGRESA DESDE EL MODAL
let quantity = 1;

// FUNCIÓN PARA INCREMENTAR LA CANTIDAD
function increaseQuantity() {
  quantity++;
  document.getElementById('product-quantity').value = quantity;
}

// FUNCIÓN PARA DECREMENTAR LA CANTIDAD, ASEGURANDO QUE NO SEA MENOR QUE 1
function decreaseQuantity() {
  if (quantity > 1) {
      quantity--;
      document.getElementById('product-quantity').value = quantity;
  }
}

// FUNCIÓN PARA VALIDAR QUE LA ENTRADA SEA UN NÚMERO VÁLIDO Y ACTUALIZAR LA CANTIDAD
function validateQuantityInput() {
  const input = document.getElementById('product-quantity');
  const value = parseInt(input.value);

  if (!isNaN(value) && value > 0) {
      quantity = value; // Actualiza la cantidad si el valor es válido
  } else {
      quantity = 1; // Si el valor no es válido, ajusta la cantidad a 1
  }
  input.value = quantity; // Actualiza el campo con la cantidad validada
}





const horariosTienda = [
  { dia: 0, horaApertura: 18, horaCierre: 24 },  // Domingo
  { dia: 1, horaApertura: 1, horaCierre: 24 },  // Lunes 
  { dia: 2, horaApertura: 18, horaCierre: 24 },  // Martes
  { dia: 3, horaApertura: null, horaCierre: null},  // Miércoles - cerrdado
  { dia: 4, horaApertura: 18, horaCierre: 24 },  // Jueves 
  { dia: 5, horaApertura: 18, horaCierre: 24 },  // Viernes
  { dia: 6, horaApertura: 18, horaCierre: 24 },  // Sábado
];

// FUNCIÓN PARA VERIFICAR SI LA TIENDA ESTÁ ABIERTA
function estaAbierta() {
  const horaActual = new Date().getHours(); // Obtiene la hora actual
  const diaActual = new Date().getDay();   // Obtiene el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)

  console.log(`Hora actual: ${horaActual}, Día actual: ${diaActual}`); // Para depurar

  // BUSCAR EL HORARIO CORRESPONDIENTE AL DÍA ACTUAL
  const horarioHoy = horariosTienda.find(horario => horario.dia === diaActual);

  // VERIFICAR SI EL DÍA TIENE UN HORARIO DEFINIDO
  if (horarioHoy && horarioHoy.horaApertura !== null && horarioHoy.horaCierre !== null) {
      return horaActual >= horarioHoy.horaApertura && horaActual < horarioHoy.horaCierre;
  } else {
      return false; // Si no hay horario para el día, la tienda está cerrada
  }
}

// FUNCIÓN PARA ACTUALIZAR EL ESTADO DE LA TIENDA (USADA POR EL HTML)
function actualizarEstadoTienda() {
  const estadoTienda = document.getElementById('estado-tienda');
  
  const horaActual = new Date().getHours(); // Obtiene la hora actual
  const diaActual = new Date().getDay();   // Obtiene el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)

  console.log(`Hora actual para estado: ${horaActual}, Día actual: ${diaActual}`); // Para depurar

  // BUSCAR EL HORARIO CORRESPONDIENTE AL DÍA ACTUAL
  const horarioHoy = horariosTienda.find(horario => horario.dia === diaActual);

  // Si la tienda está abierta
  if (horarioHoy && horarioHoy.horaApertura !== null && horarioHoy.horaCierre !== null && horaActual >= horarioHoy.horaApertura && horaActual < horarioHoy.horaCierre) {
      estadoTienda.textContent = "¡La tienda está abierta!";
      estadoTienda.classList.add("abierto");
      estadoTienda.classList.remove("cerrado", "reserva");
  }
  // Si la tienda está cerrada pero se pueden hacer reservas
  else if (horarioHoy && horarioHoy.horaApertura !== null && horaActual < horarioHoy.horaApertura) {
      // Si es 1 hora antes de abrir, mostrar mensaje de reserva
      const horaReserva = horarioHoy.horaApertura - 1; // 1 hora antes de apertura
      if (horaActual >= horaReserva) {
          estadoTienda.textContent = "Cerrado, reserva disponible.";
          estadoTienda.classList.add("reserva");
          estadoTienda.classList.remove("abierto", "cerrado");
      } else {
          estadoTienda.textContent = "La tienda está cerrada.";
          estadoTienda.classList.add("cerrado");
          estadoTienda.classList.remove("abierto", "reserva");
      }
  } else {
      estadoTienda.textContent = "La tienda está cerrada.";
      estadoTienda.classList.add("cerrado");
      estadoTienda.classList.remove("abierto", "reserva");
  }
}

// LLAMAMOS A LA FUNCIÓN PARA ACTUALIZAR EL ESTADO AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", function() {
  actualizarEstadoTienda();
});


// Función para calcular los minutos restantes
function calcularMinutosRestantes(horaFin) {
  const horaActual = new Date().getHours();
  const minutosActuales = new Date().getMinutes();
  
  const minutosTotalesRestantes = ((horaFin - horaActual) * 60) - minutosActuales;
  return minutosTotalesRestantes;
}

// Función para actualizar el horario de la tienda
function actualizarHorarioTienda() {
  const horarioElemento = document.getElementById('horario-tienda');
  const horaActual = new Date().getHours(); // Obtiene la hora actual
  const diaActual = new Date().getDay();    // Obtiene el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)

  // Buscar el horario correspondiente al día actual
  const horarioHoy = horariosTienda.find(horario => horario.dia === diaActual);

  if (horarioHoy && horarioHoy.horaApertura !== null && horarioHoy.horaCierre !== null) {
      const minutosRestantesApertura = calcularMinutosRestantes(horarioHoy.horaApertura);
      const minutosRestantesCierre = calcularMinutosRestantes(horarioHoy.horaCierre);

      const horasAperturaRestantes = Math.floor(minutosRestantesApertura / 60);
      const minutosAperturaRestantes = minutosRestantesApertura % 60;

      const horasCierreRestantes = Math.floor(minutosRestantesCierre / 60);
      const minutosCierreRestantes = minutosRestantesCierre % 60;

      if (horaActual < horarioHoy.horaApertura) {
          // Tienda cerrada, muestra el tiempo restante para abrir
          if (horasAperturaRestantes > 0) {
              horarioElemento.textContent = `Abre en ${horasAperturaRestantes} hora(s) y ${minutosAperturaRestantes} minuto(s).`;
          } else {
              horarioElemento.textContent = `Abre en ${minutosAperturaRestantes} minuto(s).`;
          }
      } else if (horaActual >= horarioHoy.horaApertura && horaActual < horarioHoy.horaCierre) {
          // Tienda abierta, muestra el tiempo restante para cerrar
          if (horasCierreRestantes > 0) {
              horarioElemento.textContent = `Cierra en ${horasCierreRestantes} hora(s) y ${minutosCierreRestantes} minuto(s).`;
          } else {
              horarioElemento.textContent = `Cierra en ${minutosCierreRestantes} minuto(s).`;
          }
      }
  } else {
      horarioElemento.textContent = "Hoy la tienda permanece cerrada.";
  }
}

// Llamamos a la función para actualizar el horario al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  actualizarHorarioTienda();
  setInterval(actualizarHorarioTienda, 60000); // Actualiza cada minuto
});





// ESCUCHAR EL EVENTO DE ENTRADA EN EL CAMPO DE CANTIDAD EN MODAL
document.getElementById('modal-quantity').addEventListener('input', function(event) {
  
  // Reemplazar cualquier carácter que no sea numérico
  event.target.value = event.target.value.replace(/[^0-9]/g, '')

  let value = parseInt(event.target.value, 10);
  
  // VERIFICAR SI EL VALOR ES MAYOR QUE 99
  if (value > 99) {
      event.target.value = 99; // Limitar el valor a 100
  } else if (value < 1) {
      event.target.value = 1; // Asegurarse de que el valor no sea menor que 1
  }
});

// Función para cambiar la cantidad con los botones + y -
function changeQuantity(amount) {
  const quantityInput = document.getElementById('modal-quantity');
  let currentQuantity = parseInt(quantityInput.value, 10);

  // Limitar la cantidad a un máximo de 99 productos
  if (currentQuantity + amount <= 99 && currentQuantity + amount >= 1) {
      quantityInput.value = currentQuantity + amount;
  } else if (currentQuantity + amount > 99) {
      quantityInput.value = 99; // Limitar a 99 si el número excede
  } else {
      quantityInput.value = 1; // Mantener al menos 1
  }
}





//FUNCION CONTAR LOS PRODUCTOS QUE SE ENCUENTRAN EN EL CARRITO
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');

  // Calcular la cantidad total de todos los productos en el carrito
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQuantity > 0) {
      cartCount.innerText = totalQuantity;
      cartCount.style.display = 'inline-block'; // Muestra el contador
  } else {
      cartCount.style.display = 'none'; // Oculta el contador si está vacío
  }
}




// LLAMA A ESTA FUNCIÓN CUANDO LA PÁGINA TERMINE DE CARGAR
document.addEventListener('DOMContentLoaded', updateCartCount);