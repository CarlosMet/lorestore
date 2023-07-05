import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/context/AppContext'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uniformes',
  description: 'tienda de uniformes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </AppProvider>
      </body>
    </html>
  )
}
