import Letreiro from "./letreiro";
import Menu from "./menu";
import "../styles/header.css";
import "../styles/letreiro.css";

function Header() {
    return (
        <header>
			<Letreiro/>
		    <Menu/>
		</header>
    )
}
export default Header;