import Search from "../Search/Search";
import './Pokedex.css';
import PokemonList from "../../PokemonList/PokemonList";
import { Link } from "react-router-dom";
function Pokedex() {
    return (
        <div className="Pokedex-wrapper">
            <Search />
            <PokemonList />
        </div>
    );
}
export default Pokedex;