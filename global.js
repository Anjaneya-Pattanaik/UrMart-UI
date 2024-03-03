document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function () {
    const profileNavItem = document.querySelector(".dropdown-toggle");
    profileNavItem.classList.toggle("hovered");
  });

async function getProducts() {
  var response = await fetch("https://fakestoreapi.com/products?limit=4");
  var productsData = await response.json();
  let productsListDiv = "";
  for (let product of productsData) {
    let prodDiv = `<div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="Product Image" style="height:13rem">
        <div class="card-body">
          <h5 class="card-title" style="height:2.45rem;font-size:1rem;overflow:hidden">${product.title}</h5>
          <p class="card-text" style="font-size:0.9rem">${product.category}</p>
          <span class="card-text offer-price">₹ ${product.price}</span>
          <br>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div></div>`;
    productsListDiv = productsListDiv + prodDiv;
  }
  document.getElementById("product-cards").innerHTML = productsListDiv;
}
getProducts();

async function geteprod() {
    var count=0;
    var response = await fetch("https://fakestoreapi.com/products/category/electronics");
    var eprodData = await response.json();
    let eprodListDiv = "";
    for (let eprod of eprodData) {
      count++;
      let eprodDiv = `<div class="card" style="width: 18rem;">
          <img src="${eprod.image}" class="card-img-top" alt="Product Image" style="height:13rem">
          <div class="card-body">
            <h5 class="card-title" style="height:2.45rem;font-size:1rem;overflow:hidden">${eprod.title}</h5>
            <p class="card-text" style="font-size:0.9rem">${eprod.category}</p>
            <span class="card-text offer-price">₹ ${eprod.price}</span>
            <br>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div></div>`;
      eprodListDiv = eprodListDiv + eprodDiv;
    }
    document.getElementById("ecat-info").innerHTML =`<h2>Electronics</h2><p>No. of items: ${count}</p><br>`;
    document.getElementById("eprod-cards").innerHTML = eprodListDiv;
  }
  geteprod();

  async function getjprod() {
    var count=0;
    var response = await fetch("https://fakestoreapi.com/products/category/jewelery");
    var jprodData = await response.json();
    let jprodListDiv = "";
    for (let jprod of jprodData) {
      count++;
      let jprodDiv = `<div class="card" style="width: 18rem;">
          <img src="${jprod.image}" class="card-img-top" alt="Product Image" style="height:13rem">
          <div class="card-body">
            <h5 class="card-title" style="height:2.45rem;font-size:1rem;overflow:hidden">${jprod.title}</h5>
            <p class="card-text" style="font-size:0.9rem">${jprod.category}</p>
            <span class="card-text offer-price">₹ ${jprod.price}</span>
            <br>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div></div>`;
      jprodListDiv = jprodListDiv + jprodDiv;
    }
    document.getElementById("jcat-info").innerHTML =`<h2>Jewelery</h2><p>No. of items: ${count}</p><br>`;
    document.getElementById("jprod-cards").innerHTML = jprodListDiv;
  }
  getjprod();

  async function getmprod() {
    var count=0;
    var response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
    var mprodData = await response.json();
    let mprodListDiv = "";
    for (let mprod of mprodData) {
      count++;
      let mprodDiv = `<div class="card" style="width: 18rem;">
          <img src="${mprod.image}" class="card-img-top" alt="Product Image" style="height:13rem">
          <div class="card-body">
            <h5 class="card-title" style="height:2.45rem;font-size:1rem;overflow:hidden">${mprod.title}</h5>
            <p class="card-text" style="font-size:0.9rem">${mprod.category}</p>
            <span class="card-text offer-price">₹ ${mprod.price}</span>
            <br>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div></div>`;
      mprodListDiv = mprodListDiv + mprodDiv;
    }
    document.getElementById("mcat-info").innerHTML =`<h2>Men's Clothing</h2><p>No. of items: ${count}</p><br>`;
    document.getElementById("mprod-cards").innerHTML = mprodListDiv;
  }
  getmprod();

  async function getwprod() {
    var count=0;
    var response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
    var wprodData = await response.json();
    let wprodListDiv = "";
    for (let wprod of wprodData) {
      count++;
      let wprodDiv = `<div class="card" style="width: 18rem;">
          <img src="${wprod.image}" class="card-img-top" alt="Product Image" style="height:13rem">
          <div class="card-body">
            <h5 class="card-title" style="height:2.45rem;font-size:1rem;overflow:hidden">${wprod.title}</h5>
            <p class="card-text" style="font-size:0.9rem">${wprod.category}</p>
            <span class="card-text offer-price">₹ ${wprod.price}</span>
            <br>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div></div>`;
      wprodListDiv = wprodListDiv + wprodDiv;
    }
    document.getElementById("wcat-info").innerHTML =`<h2>Women's Clothing</h2><p>No. of items: ${count}</p><br>`;
    document.getElementById("wprod-cards").innerHTML = wprodListDiv;
  }
  getwprod();