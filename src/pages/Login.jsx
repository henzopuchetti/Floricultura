import BasicExample from "../components/Navbar"
import "./Login.css"
function Login(){
    let nome = "Login:"
    

    return(
        <>
        <body>
            
        
        <div className="topo">
            <BasicExample/>
        </div>
        <div className="menu">
        <div className="quad">
        <img src="https://cdn.onlinewebfonts.com/svg/img_337531.png"/>
            <div className="oo">
                
        <h1>{nome}</h1>
        <label>
            Email:
            <input type="email" name="email" id="email" />
        </label>
        <div className="top1">
        <label>
            Senha
            <input type="password" name="senha" id="senha" />
        </label>
        </div>
        </div>
        <button>Entrar</button>
        </div>
        </div>
        </body>
        </>
    )
}

export default Login