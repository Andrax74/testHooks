import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

import Layout from '../src/components/Layout'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
