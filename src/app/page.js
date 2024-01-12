import Image from 'next/image'
import Navbar from './components/Nav'
import Slider from './components/Slider'
import PlaceholderImages from './components/Slider'
import Footer from './components/Footer'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import ForgotPassword from './Auth/Forgotpass'
import OTPVerification from './Auth/Otp'
import Projects from './Dashboard/page'
export default function Home() {
  return (
    <>
    <Navbar/>
   <PlaceholderImages/>
   <OTPVerification/>

   <Footer/>
   
    </>
    
   
  )
}
