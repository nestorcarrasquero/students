import Layout from "../components/layout";
import '../public/stylesheets/bootstrap.min.css'
import '../public/stylesheets/main.sass'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;