import Footer from "./footer";
import Header from "./header";

export default function Layout({children}) {
  return (        
    <main>
      <Header />
      <div className="container p-5 principal">
        {children}    
      </div>
      <Footer />
    </main>        
  )
}