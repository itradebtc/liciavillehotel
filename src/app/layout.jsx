import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from './component/Navbar'
import Footer from './component/Footer'
import { Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const mont = Montserrat({ subsets:['latin'], 
weight:['100', '200', '300', '400', '500', '600', '700', '800', '900']})


export const metadata = {
  title: 'Liciaville Hotel',
  description: 'Experience Affordable Luxury',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
       <NavBar />
      <main>
        {children}

      </main>


      <Footer />
      </body>
    </html>
  )
}
