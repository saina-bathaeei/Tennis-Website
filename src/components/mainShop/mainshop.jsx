import './mainshop.css'
import ProductBox from '../store/productBox/productBox'
import NumberClick from './numberClick'
import CartProduct from './cartProduct'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'


export default function MainShop (props) {

    const savedState = localStorage.getItem('localtest');

    const {t} = useTranslation()
    const com = t("shop")
    const produ = com.product

    const [shopProducts,setShopProducts] = useState([
        {img: '/home/product-01-600x600.jpg' , star: 5 , title: produ.pro1  , price: '$13.49' },
        {img: '/home/product-02-600x600.jpg' , star: 5 , title: produ.pro2  , price: '$17.99' },
        {img: '/home/product-03-600x600.jpg' , star: 4 , title: produ.pro3  , price: '$9.99' },
        {img: '/home/product-04-600x600.jpg' , star: 5 , title: produ.pro4  , price: '$125.00' },
        {img: '/home/product-05-480x480.jpg' , star: 5 , title: produ.pro5  , price: '$12.00' },
        {img: '/home/product-06-480x480.jpg' , star: 5 , title: produ.pro6  , price: '$16.99' },
        {img: '/home/product-07-480x480.jpg' , star: 5 , title: produ.pro7  , price: '$13.99' },
        {img: '/home/product-08-480x480.jpg' , star: 5 , title: produ.pro8  , price: '$17.99' },
        {img: '/home/product-09-480x480.jpg' , star: 5 , title: produ.pro9  , price: '$10.00' },
        {img: '/home/product-10-480x480.jpg' , star: 5 , title: produ.pro10 , price: '$102.00' },
        {img: '/home/product-11-480x480.jpg' , star: 4 , title: produ.pro11 , price: '$16.99' },
        {img: '/home/product-12-480x480.jpg' , star: 5 , title: produ.pro12 , price: '$13.99' },
        {img: '/home/product-13-480x480.jpg' , star: 5 , title: produ.pro13 , price: '$17.99' },
        {img: '/home/product-14-480x480.jpg' , star: 4 , title: produ.pro14 , price: '$17.99' }
    ])

    const [shoppingCart,setShoppingCart] = useState([])
    const [firstPage,setFirstPage] = useState([
        {img: '/home/product-01-600x600.jpg' , star: 5 , title: produ.pro1  , price: '$13.49' },
        {img: '/home/product-02-600x600.jpg' , star: 5 , title: produ.pro2  , price: '$17.99' },
        {img: '/home/product-03-600x600.jpg' , star: 4 , title: produ.pro3  , price: '$9.99' },
        {img: '/home/product-04-600x600.jpg' , star: 5 , title: produ.pro4  , price: '$125.00' },
        {img: '/home/product-05-480x480.jpg' , star: 5 , title: produ.pro5  , price: '$12.00' },
        {img: '/home/product-06-480x480.jpg' , star: 5 , title: produ.pro6  , price: '$16.99' }
    ])
    const [currentVal,setCurrentVal] = useState(6)
    const [currentpage,setCurrentpage] = useState(1)
    const [chunkedData,setChunkedData] = useState([])
    const [clicked,setClicked] = useState(false)
    const [nums,setNums] = useState([])
    const [buy,setBuy] = useState(false)
    const [localtest,setLocaltest] = useState(savedState ? JSON.parse(savedState) : [])

    const clickHandeler = (event) => {
        setChunkedData([])


        this.setState(prevState => ({
            currentpage: +event.target.innerHTML,
          }));
        console.log(event)

        this.setState(prevState => ({
            clicked: true,
          }));
        
        for (let i = 0; i < this.state.shopProducts.length; i += this.state.currentVal) {
            this.state.chunkedData.push(this.state.shopProducts.slice(i, i + this.state.currentVal));
        }
        console.log(this.state.chunkedData)
        let hi = this.state.chunkedData.filter((item) => {return item.length <= this.state.currentVal})
        console.log(hi)
        
    }

    const clickBuy = (product) => {
        console.log(product)
        this.setState(prevState => ({
            buy: !prevState.buy,
          }));
          this.setState(prevState => ({
            shoppingCart: [...prevState.shoppingCart, product],
          }));

          const newAlbum = {
            id: 1, 
            title: 'Album 1',
            price: 1,
            img: 'hello'
          };
          this.setState(prevState => ({
            localtest: [...prevState.localtest, product],
          }));
    }

    const removeProduct = (pro) => {
        console.log(pro)
        let oldShoppingCart = this.state.shoppingCart

        let productIndex = oldShoppingCart.find((product) => product.title === pro)

        oldShoppingCart.splice(productIndex , 1)

        this.setState({
            shoppingCart : oldShoppingCart
        })
        console.log(productIndex.id)

        this.setState(prevState => ({
            localtest: this.state.shoppingCart,
          }));
    }

    

    return (
      <>
        <div className='contain-shop'>
            <div className='shopContainer'>

                <div className='sidebar-shop'>
                    <div className="side-bar-child">
                        {/*<div className="shop-cart">
                            <div className='title'>
                                <img src="/home/icon/ph--tennis-ball-fill.svg" alt=""/><h1>CART</h1>
                            </div>
                            
                            {
                                shoppingCart.length && shoppingCart.map((pro) => (
                                    <CartProduct {...pro} /*removeProduct={this.removeProduct.bind(this)}/>
                                ))
                            }
                            
                            
                        </div>*/}
                        {/*<div className="search-box-shop">
                            <input placeholder='Search products...' />
                        </div>*/}
                        
                        <div className="shop-filter-price">
                            <div className="title">
                                    <img src="/home/icon/ph--tennis-ball-fill.svg" alt=""/><h1>{com.filter.title1}</h1>
                            </div>
                                <input type='range' />
                                <div className='shop-filter-info'>
                                    <div className="price"><h4>{com.filter.price}</h4></div>
                                </div>
                        </div>
                        <div className="shop-filter-category">
                            <div className="filter-category-title title">
                                <img src="/home/icon/ph--tennis-ball-fill.svg" alt="" />
                                <h1>{com.filter.title2}</h1>
                            </div>
                            <div className="filter-category-body">
                                <ul>
                                    <li><input type="checkbox" /> <span>{com.filter.li1}</span></li>
                                    <li><input type="checkbox" /> <span>{com.filter.li2}</span></li>
                                    <li><input type="checkbox" /> <span>{com.filter.li3}</span></li>
                                    <li><input type="checkbox" /> <span>{com.filter.li4}</span></li>
                                    <li><input type="checkbox" /> <span>{com.filter.li5}</span></li>
                                    <li><input type="checkbox" /> <span>{com.filter.li6}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-btn">
                            <button className='filter'>{com.filter.button}</button>
                        </div>

                    </div>
                </div>

                <div className='num-and-main'>
                    <div className="shop-products">
                        {
                            !clicked && firstPage.map((pro) => (
                                <ProductBox key={pro.img} {...pro} /*onBuy={this.clickBuy.bind(this)} */></ProductBox>
                            ))
                        }
                        {
                            clicked && chunkedData[currentpage - 1].map((pro) => (
                                <ProductBox key={pro.img} {...pro} /*onBuy={this.clickBuy.bind(this)}*/></ProductBox>
                            ))                                                                                                                                                                            
                        }

                        
                    </div>
                         <div className='numbers-contain'>
                            <div className="numbers">
                                <div className='num' /*onClick={ this.clickHandeler.bind(this)}*/>1</div>
                                <div className='num' /*onClick={ this.clickHandeler.bind(this)}*/>2</div>
                                <div className='num' /*onClick={ this.clickHandeler.bind(this)}*/>3</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </>
    )
}
