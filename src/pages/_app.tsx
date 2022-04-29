import 'modern-normalize/modern-normalize.css';
import '../styles/reset.css';
import type {AppProps} from 'next/app'
import { styled } from 'linaria/react';
import {Header} from '../components/header/header';

const ContentsWrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Header/>
    <ContentsWrapper>
      <Component {...pageProps} />
    </ContentsWrapper>
  </>
}

export default MyApp;
