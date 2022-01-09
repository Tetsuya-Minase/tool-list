import 'modern-normalize/modern-normalize.css';
import '../styles/reset.css';
import type {AppProps} from 'next/app'
import {Header} from "../components/header/header";

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Header/>
    <Component {...pageProps} />
  </>
}

export default MyApp;
