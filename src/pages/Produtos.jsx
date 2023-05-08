import BasicExample from "../components/Navbar"
import "./Produtos.css"

function Produtos(){
    return(
        <>
        <div className="topo">
            <BasicExample/>
        </div>

        <div className="texto">
        <h2>Quais são as plantas de cada cor?</h2>
        <h3>Flores</h3>
        </div>
        <div className="aaaa">
        
            <div>
                
            <ul>
                <p>Amarelas</p>
                <li>Girassol</li>
                <li>Crisântemo</li>
                <li>Cravo amarelo</li>
                <li>Madressilva</li>
                <li>Rosa Banksiae</li>
                <li>Entre outros...</li>
                </ul>
            </div>
            <div>
                
            <ul>
                <p>Vermelhas</p>
                <li>Girassol</li>
                <li>Crisântemo</li>
                <li>Cravo amarelo</li>
                <li>Madressilva</li>
                <li>Rosa Banksiae</li>
                <li>Entre outros...</li>
                </ul>
            </div>
            <div>
                
            <ul>
                <p>Azuis</p>
                <li>Girassol</li>
                <li>Crisântemo</li>
                <li>Cravo amarelo</li>
                <li>Madressilva</li>
                <li>Rosa Banksiae</li>
                <li>Entre outros...</li>
                </ul>
            </div>
            
        </div>

        </>
        
    )
}

export default Produtos