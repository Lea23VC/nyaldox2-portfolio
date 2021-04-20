
import '../styles/globals.css'
import '../styles/styles.css';







export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric) {
  console.log(metric)
}