"use client";
import './globals.css'
import Header from "./components/Header"
import Footer from './components/Footer';
import ThemeWrapper from './components/context/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeWrapper>
      <body>
        <Header />
        <main>{children}</main>
        <Footer/> 
      </body>
      </ThemeWrapper>
    </html>
  )
}