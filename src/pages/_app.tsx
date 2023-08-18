import { store } from '@/store/store'
import '../globals.css'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.ico'
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
			<Provider store={store}>
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" href="/favicon/favicon.ico" />
				</Head>
				
				<Component {...pageProps} />
			</Provider>
	)

}

export default appWithTranslation(MyApp)