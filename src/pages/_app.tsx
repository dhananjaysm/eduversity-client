import { AppProps } from 'next/app'
import Axios from 'axios'
import { Router, useRouter } from 'next/router'
import { SWRConfig } from 'swr'

import { AuthProvider } from '../context/auth'

import '../styles/tailwind.css'
import '../styles/icons.css'
import '../styles/spaceside.css'
import '../styles/card.css'




import Navbar from '../components/Navbar'
import SpaceSideBar from '../newcomponents/SpaceSideBar'
import NProgress from 'nprogress'

Axios.defaults.baseURL = 'http://localhost:5000/api'
Axios.defaults.withCredentials = true

const fetcher = async (url: string) => {
  try {
    const res = await Axios.get(url)
    return res.data
  } catch (err) {
    throw err.response.data
  }
}



Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoutes = ['/register', '/login','/dashboard']
  const authRoute = authRoutes.includes(pathname)

  return (
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <AuthProvider>
        {/* {!authRoute && <Navbar />} */}
        
        <div className="flex h-screen">
  {/* <!-- Fixed sidebar --> */}
  
  <div className="hidden md:block">
  <SpaceSideBar/>
  </div>
   

  {/* <!-- Scroll wrapper --> */}
  <div className="main-container">
    {/* <!-- Scrollable container --> */}
    <div className="feedcontainer">
    <Component {...pageProps} />
    </div>
  </div>
</div>
        
         
          
  
      </AuthProvider>
    </SWRConfig>
  )
}

export default App
