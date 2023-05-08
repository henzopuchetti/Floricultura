
import "../home.css"
import BasicExample from "../components/Navbar"
import Cardon from "../components/card"


function Home(){
    return(
        <>
       <body>
        
       
      
        <div className="topo">
            <BasicExample/>
        </div>
        <h2>Bem Vindo à JHJ Flores</h2>
        <p>Encontre o seu tipo favorito de flores</p>
        <div className="flores">
            
            <Cardon/>
        </div>
        </body>
        </>
    )
}
export default Home