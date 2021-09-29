import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Ticker from '../components/Ticker';
import '../styles/globals.css'
import "../styles/prism.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
