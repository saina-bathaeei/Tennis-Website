import Header from '../../components/header/header';
import Service from '../../components/service/service'
import Benefit from '../../components/benefits/benefit'
import Training from '../../components/training/training'
import MembershipCost from '../../components/membershipCost/membershipCost';
import Store from '../../components/store/store'
import Footer from '../../components/footer/footer'
import Coach from '../../components/Coach/Coach'

function Home() {
  
  return (
    <>
      
      <Header/>
      <Service/>
      <Coach/>
      <Benefit/>
      <Training/>
      <MembershipCost/>
      <Store/>
      <Footer/>

    </>
  )
}

export default Home