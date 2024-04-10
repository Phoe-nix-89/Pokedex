import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css';
import Pokemon from "../components/Pokemon/Pokemon";

function PokemonList() {
    const [pokemonlist,setpokemonlist] = useState([]);
    const [isloading,setloading] = useState(true);

    const [pokedex_url,setpokedexurl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nexturl,setnexturl] = useState('');
    const [prevurl,setprevurl] = useState('');

    let POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

    async function PokemonDownload() {
        setloading(true);
        const response = await axios.get(pokedex_url);
        const pokemonresults = response.data.results;

        setnexturl(response.data.next);
        setprevurl(response.data.previous);

        const pokemonresultsPromise = pokemonresults.map((pokemon) => axios.get(pokemon.url))
        const pokemondata = await axios.all(pokemonresultsPromise);
        const res = pokemondata.map((pokedata) => {
            const pokemon = pokedata.data;
            return {
                id : pokemon.id,
                name : pokemon.name,
                image : (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_default,
                types : pokemon.types
            };
        })
        // console.log(url);
        console.log(pokemondata);
        console.log(response.data);
        console.log(res);
        setpokemonlist(res);
        console.log(pokemonlist);
        setloading(false);

        // fetch("https://pokeapi.co/api/v2/pokemon")
        // .then((data) => {
        //     return data.json();
        // })
        // .then((pok) => {
        //     console.log(pok);
        // })
    }

    useEffect(() => {
        PokemonDownload();
    },[pokedex_url]);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon">
                {(isloading) ? "Loading..." : (
                    pokemonlist.map((val) => {
                        return <Pokemon name={val.name} image={val.image} key={val.id} id={val.id} />
                    })
                )}
            </div>
            <div className="buttons">
                <div className="but-in">
                    <button disabled={prevurl == null} onClick={() => {
                        setpokedexurl(prevurl);
                    }} className="btn">Prev</button>
                    <button disabled={nexturl == null} onClick={() => {
                        setpokedexurl(nexturl);
                    }} className="btn">Next</button>
                </div>
            </div>
        </div>
    );
}

export default PokemonList;