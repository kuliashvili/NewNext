export const metadata = {
  title: "Giorgi's App",
  description: 'Generated by Next.js',
}
import Header from "@/components/header/page"
import Footer from "@/components/footer/page"
import "../styles/globals.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>

        <header>
        <Header></Header>
          
        </header>
        {children}
        <Footer name="giorgi"></Footer>
    </body>

    </html>
  )
}
