import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NooM Light | نوم لایت',
  description: 'نوم لایت یک فروشگاه متفاوت برای خرید تابلو نئون  یا دکور های نئونی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
