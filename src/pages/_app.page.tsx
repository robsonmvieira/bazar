
import type { AppProps } from 'next/app'
import { globalStyles } from '../../styles/globals'
import { CartProvider } from '../contexts/cart.context'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>)
}
