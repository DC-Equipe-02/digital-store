import logo from "./logo.svg"
import carrinho from "./Carrinho.svg"
import lupa from "./Search.png"
import "./index.css"

const Header = () => {
    return(
        <div>
            <header>
            <a href="#"><img src={logo} alt="Digital Store" /></a>
            <div className="busca">
            <input placeholder="Pesquisar produto"></input>
            <img src={lupa}/>
            </div>

            <a href="#">Cadastre-se</a>
            <button>Entrar</button>
            <img src={carrinho} />  
        </header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">My Order</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Header