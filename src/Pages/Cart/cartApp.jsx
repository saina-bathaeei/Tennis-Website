import Footer from "../../components/footer/footer"
import './cart.css'
import React from "react"
import CartProduct from "../../components/mainShop/cartProduct";

class CartApp extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        user: [],
      };
    }

    componentDidMount() {
      const storedUserData = localStorage.getItem('localtest');
      
      if (storedUserData) {
        this.setState({ user: JSON.parse(storedUserData) });
      }
    }

    render(){
      return (
        <>
          <div className="contain">
              <div className="line-cart"></div>
              <div className="shop-product">
                  
                  
                  {
                    this.state.user.map((u) => (
                      <CartProduct {...u} />
                    ))
                  }
                
                  
              </div>
              <button>Return to shop</button>
          </div>
          
          <Footer></Footer>
        </>
      )
    }
    
  }
  
export default CartApp