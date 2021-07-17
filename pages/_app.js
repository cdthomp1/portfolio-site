import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/globals.css'
import "../styles/prism.css";
import 'tailwindcss/tailwind.css'

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
