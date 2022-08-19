import ReactGA from 'react-ga4';
import '../styles/globals.css'

ReactGA.initialize('G-E16JC1JRC9');
ReactGA.send("pageview");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
