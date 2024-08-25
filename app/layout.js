"use client";
import './globals.css'
import Header from "./components/Header";
import Footer from './components/Footer';
import ThemeWrapper from './components/context/theme';
import AuthWrapper from './components/context/auth';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap the entire layout in AuthWrapper */}
        <AuthWrapper>
          <ThemeWrapper>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeWrapper>
        </AuthWrapper>
      </body>
    </html>
  )
}
