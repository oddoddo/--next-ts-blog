import Layout from '@/components/layout/Layout'
import { AppProps } from 'next/app'
import { AuthProvider } from '@/firebase/auth'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp
