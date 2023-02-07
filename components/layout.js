import Navigation from "./navigation";
import Head from "next/head";

export default function Layout({children}) {
    return (        
        <main>
            <Head>                
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css" />    
                <Navigation />
            </Head>
            <div className="container p-4 border border-1">
                {children}    
            </div>
            <footer>
                <small className="row justify-content-center">
                    Todos los derechos reservados
                </small>
            </footer>
        </main>        
    )
}