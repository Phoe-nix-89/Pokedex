import Search from "../Search/Search";
import './Pokedex.css';
import PokemonList from "../../PokemonList/PokemonList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetails from "../../PokemonDetails/PokemonDetails";
function Pokedex() {
    const [searchTerm,setsearchTerm] = useState('');
    
    return (
        <div className="Pokedex-wrapper">
            <Search update={setsearchTerm} />
            {/* {searchTerm} */}
            {(searchTerm) ? <PokemonDetails key={searchTerm} name={searchTerm} /> : <PokemonList />}
        </div>
    );
}
export default Pokedex;