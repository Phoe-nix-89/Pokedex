import { useState,useEffect } from "react";
import axios from 'axios';

function usePokemonList(url,type) {
    const [pokemonlist,setpokemonlist] = useState([]);
    const [isloading,setloading] = useState(true);

    const [pokedex_url,setpokedexurl] = useState(url)
    const [nexturl,setnexturl] = useState('');
    const [prevurl,setprevurl] = useState('');
    /*

    const [pokemonliststate,setPokemonlistState] = useState({
        pokemonlist : [],
        isloading : true,
        pokedex_url : "https://pokeapi.co/api/v2/pokemon/",
        nexturl : '',
        prevurl : ''
    });
    */

    let POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

    async function PokemonDownload() {
        setloading(true);
        const response = await axios.get(pokedex_url);
        const pokemonresults = response.data.results;

        setnexturl(response.data.next);
        setprevurl(response.data.previous);

        if(type){
            console.log("Type requested");
            //console.log(response.data);
            setpokemonlist(response.data.pokemon.slice(0,5));
        }
        else{

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
            // console.log(pokemondata);
            // console.log(pokemonresults);
            //console.log(response.data);
            // console.log(res);
            setpokemonlist(res);
            // console.log(pokemonlist);
            setloading(false);

            // fetch("https://pokeapi.co/api/v2/pokemon")
            // .then((data) => {
            //     return data.json();
            // })
            // .then((pok) => {
            //     console.log(pok);
            // })
        }
    }

    useEffect(() => {
        PokemonDownload();
    },[pokedex_url]);

    return {isloading , pokemonlist , nexturl , prevurl ,setpokedexurl};
}
export default usePokemonList;