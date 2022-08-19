import ReactGA from 'react-ga';
import '../styles/globals.css'

ReactGA.initialize('G-E16JC1JRC9');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
