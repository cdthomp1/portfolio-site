import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/globals.css'

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
