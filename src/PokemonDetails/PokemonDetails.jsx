import { useEffect, useState } from "react";
import CustomRoutes from "../routes/CustomRoutes";
import { useParams} from "react-router-dom";
import axios from 'axios';
import usePokemonList from "../Hooks/usePokemonList";

function PokemonDetails({ name }) {
    const {id} = useParams();
    const [pokemon,setpokemon] = useState({});
    async function PokemonDownload() {
        let response;
    
        if(name){
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        }
        else{
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }

        let t = await axios.get(`https://pokeapi.co/api/v2/type/`+ response.data.types[0].type.name);

        const al = t.data.pokemon.map((p) => {
            return p.pokemon.name;
        })
        setpokemon({
            name : response.data.name,
            image : response.data.sprites.other.dream_world.front_default,
            types : response.data.types.map((t) => t.type.name),
            weight : response.data.weight,
            height : response.data.weight,
            type : response.data.types[0].type.name,
            rr : al.slice(0,5)
            // response.data.types[0].type.name
        });
        // console.log(response);

        // console.log(response);
    }

    useEffect(() => {
        PokemonDownload();
        console.log(pokemon);
        console.log(typeof pokemon.types);
        // console.log("list",pokemonlist);
    },[]);
    // PokemonDownload();
    // console.log(id);

    //const {isloading , pokemonlist , nexturl , prevurl ,setpokedexurl} = usePokemonList((pokemon.type) ? pokemon.type : `https://pokeapi.co/api/v2/type/fire`,true)

    return (
        <>
            {/* Details :- */}
            <div style={{height : '100%' , width : '100%' ,display : 'flex' , justifyContent  :'center' , alignItems : 'center' , textAlign : 'center'}}>
                <div style={{display : 'inline-block' , margin : '0 auto'}}>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt="" />
                    <div>
                        <div style={{fontSize : '25px'}}>
                        {/* {pokemon.types.map((t) => <div key={t}>{t}</div>)} */}
                        
                        Types : {pokemon.types && pokemon.types.join(" , ")}
                        </div>
                        <div style={{fontSize : '25px'}}>Weight : {pokemon.weight}</div>
                        <div style={{fontSize : '25px'}}>Height : {pokemon.height}</div>
                    </div>
                </div>
            </div>

            <div style={{display : 'flex' , justifyContent : 'center' , margin : '20px' , fontSize : '20px'}}>
                <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center'}}>
                Names of more {pokemon.type} type pokemon are :-
                    <ul>
                        {pokemon.rr && pokemon.rr.map((p) => <li>{p}</li>)}

                        {/* {pokemon.rr && pokemon.rr.join(" , ")} */}


                    </ul>
                </div>
            </div>
            {/* {pokemon.name} */}
            {/* <CustomRoutes /> */}
        </>
    );
}

export default PokemonDetails;