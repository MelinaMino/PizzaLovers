const PIZZAS = [
    { ID: 1, nombre: 'Muzzarella', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Aceitunas Verdes'], precio: 560, imgUrl: 'https://img.freepik.com/foto-gratis/pizza-mozzarella-aceitunas-tabla-madera_311379-1163.jpg' },
    { ID: 2, nombre: 'Huevo', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Huevo Duro', 'Aceitunas negras'], precio: 590, imgUrl: 'https://www.supermercedes.com.ar/napoles/wp-content/uploads/2020/04/471112-1d01ed49-ac49-4636-bf4b-dbcb1f5eb6e3.jpg' },
    { ID: 3, nombre: 'Jamón y Morrones', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Jamon cocido', 'Morrones'], precio: 640, imgUrl: 'https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-Receta-pizza-pizza-receta-pizza-mozzarella-jamon-morrones-pizza-mozzarella-jamon-morrones.jpg' },
    { ID: 4, nombre: 'Napolitana', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Tomate fresco', 'Oregano', 'Aceitunas verdes'], precio: 630, imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/07/37/12/pizza-marguerita-mussarela.jpg' },
    { ID: 5, nombre: 'Roquefort', ingredientes: ['Salsa de Tomate', 'Muzzarella', 'Roquefort', 'Aceitunas negras '], precio: 680, imgUrl: 'https://margherita.com.ar/wp-content/uploads/2019/05/fugazzeta-al-roquefort.jpg' },
    { ID: 6, nombre: 'Fugazzeta', ingredientes: ['Queso Muzzarella', 'Cebolla', 'Oregano', 'Aceitunas verdes'], precio: 650, imgUrl: 'https://www.barilocheya.com.ar/pizzeriabase/wp-content/uploads/sites/6/2020/03/fugazeta.jpg' },
];

/* <section class="cart">
<div class="render">
    <img src="" alt="">
</div>
<div class="info">
  <div> Imagen </div>
    <p><span>Nombre: </span> bla </p>
    <p><span> Ingredientes:</span> bla</p>
    <p><span>Precio: </span>$ bla </p>
</div>
</section> */


document.addEventListener('DOMContentLoaded', () => {
    const pizzaLocal = localStorage.setItem('PIZZAS', JSON.stringify(PIZZAS));
});

const buttonSend = document.getElementById('boton');

const cart = document.getElementById('cart');

const render = document.createElement('div');

const infoPizza = document.createElement('div');

cart.appendChild(render);
cart.appendChild(infoPizza);

const imagen = document.createElement('img');


const nombre = document.createElement('p');
const ingredientes = document.createElement('p');
const precio = document.createElement('p');

render.appendChild(imagen);
infoPizza.appendChild(nombre);
infoPizza.appendChild(ingredientes);
infoPizza.appendChild(precio);



const form = document.getElementById('form');


const tomarValor = () => {
    const pizzaNumber = document.getElementById('numero').value;

    if (cart.firstChild) {
        cart.classList.add(`visible`);
        render.classList.add('render');
        infoPizza.classList.add('info');
        nombre.classList.add('nombrePizza')
    } else {
        cart.classList.remove(`visible`);
    };

    if (!pizzaNumber) {
        nombre.innerHTML = "Campo vacio";
        ingredientes.innerHTML = 'Ingresa un ID valido';
        imagen.classList.add('noneimg')
        imagen.setAttribute(`src`);
        return;
    }
    const PizzaSelec = PIZZAS.find((pizza) => pizza.ID == pizzaNumber);
    if (!PizzaSelec) {
        nombre.innerHTML = "ID no encontrado";
        ingredientes.innerHTML = 'Ingresa un ID valido';
        imagen.classList.add('noneimg')
        imagen.setAttribute(`src`);
    } else {
        imagen.setAttribute('src', PizzaSelec.imgUrl);
        imagen.innerHTML = `${PizzaSelec.imgUrl}`;
        nombre.innerHTML = `${PizzaSelec.nombre}`;
        ingredientes.innerHTML = `Los ingredientes son:<ul><li> ${PizzaSelec.ingredientes} <li></ul>`
        precio.innerHTML = `El valor es de $ ${PizzaSelec.precio}`

    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.reset();
});

buttonSend.addEventListener('click', tomarValor);