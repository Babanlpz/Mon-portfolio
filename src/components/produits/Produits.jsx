import "./Produits.scss";

function Produits() {
  return (
    <>
      <section id="products" className="products">
        <div className="section-heading">
          <h2>
            Mes projets <span>portfolio</span>
          </h2>
          {/* <a href="#" className="btn">
            <i className="bx bx-right-arrow-alt"></i>
          </a> */}
        </div>
        <div className="products-container">
          <div className="product-box">
            <img src="./coffee.png" alt="" />
            <span>Landing page</span>
            <h4>Chicken Burger</h4>
            {/* <h5 className="price">9.99€</h5> */}
            <i className="bx bx-cart-add"></i>
            <i className="bx bxs-heart"></i>
            {/* <span className="discount">-10%</span> */}
          </div>

          <div className="product-box">
            <img src="./ohmyfood.png" alt="" />
            <span>Burgers</span>
            <h4>Hot Dog</h4>
            {/* <h5 className="price">7.99€</h5> */}
            <i className="bx bx-cart-add"></i>
            <i className="bx bxs-heart"></i>
            {/* <span className="discount">-10%</span> */}
          </div>

          <div className="product-box">
            <img src="./airbnb.png" alt="" />
            <span>Burgers</span>
            <h4>Spécial croque</h4>
            {/* <h5 className="price">5.99€</h5> */}
            <i className="bx bx-cart-add"></i>
            <i className="bx bxs-heart"></i>
            {/* <span className="discount">-10%</span> */}
          </div>

          <div className="product-box">
            <img src="./prod-04.png" alt="" />
            <span>Soupes</span>
            <h4>Soupes du pays</h4>
            {/* <h5 className="price">5.99€</h5> */}
            <i className="bx bx-cart-add"></i>
            <i className="bx bxs-heart"></i>
            {/* <span className="discount">-10%</span> */}
          </div>

          <div className="product-box">
            <img src="./prod-05.png" alt="" />
            <span>Poissons</span>
            <h4>Crevettes thai</h4>
            {/* <h5 className="price">5.99€</h5> */}
            <i className="bx bx-cart-add"></i>
            <i className="bx bxs-heart"></i>
            {/* <span className="discount">-10%</span> */}
          </div>

          <div className="product-box">
            <img src="./prod-06.png" alt="" />
            <span>Autre</span>
            <h4>Chicken wings</h4>
            {/* <h5 className="price">5.99€</h5> */}
            <i className="bx bx-cart-add"></i>
            <i className="bx bxs-heart"></i>
            {/* <span className="discount">-10%</span> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Produits;
