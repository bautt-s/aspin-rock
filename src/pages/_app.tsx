import { store } from '@/store/store'
import '../globals.css'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import Head from 'next/head'
import CookiesPopup from '@/components/cookies'
import { useEffect, useState } from 'react'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.ico'
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	const [popup, setPopup] = useState('false')

	const handleClose = () => {
		window.localStorage.setItem('COOKIE_POPUP', 'false')
		setPopup('false')
	}
	
	useEffect(() => {
		let cookiePopup

		if (typeof window !== "undefined") {
			cookiePopup = window.localStorage.getItem('COOKIE_POPUP')
		}

		if (cookiePopup) setPopup('false')
		else setPopup('true')
	})

	return (
		<Provider store={store}>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" href="/favicon/favicon.ico" />
			</Head>

			{popup === 'true' && <CookiesPopup popup={popup} handleClose={handleClose} />}

			<Component {...pageProps} />
		</Provider>
	)
}

export default appWithTranslation(MyApp)