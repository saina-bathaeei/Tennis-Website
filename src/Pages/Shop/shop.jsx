import NavBar from "../../components/nav bar/nav"
import MainShop from "../../components/mainShop/mainshop"
import Footer from "../../components/footer/footer"
import ShopHeading from "../../components/ShopHeading/ShopHeading"

function ShopApp() {
    //const [count, setCount] = useState(0)
    
    return (
      <>
        <ShopHeading/>
        <MainShop />
        <Footer />
      </>
    )
  }
  
export default ShopApp