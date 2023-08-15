import { store } from '@/store/store'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
	return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
	)

}

export default MyApp