import Layout from '../layouts/Layout'
import { ThemeProvider, CssBaseline as CssReset } from '@mui/private-theming'
import {theme} from '../theme/theme'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (

    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>

  )
}

export default MyApp
