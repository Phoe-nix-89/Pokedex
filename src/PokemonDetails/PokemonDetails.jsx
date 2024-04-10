import { useEffect, useState } from "react";
import CustomRoutes from "../routes/CustomRoutes";
import { useParams} from "react-router-dom";
import axios from 'axios';

function PokemonDetails() {
    const {id} = useParams();
    const [pokemon,setpokemon] = useState({});
    async function PokemonDownload() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setpokemon({
            name : response.data.name,
            image : response.data.sprites.other.dream_world.front_default,
            types : response.data.types.map((t) => t.type.name),
            weight : response.data.weight,
            height : response.data.weight
        });
    }

    useEffect(() => {
        PokemonDownload();
        console.log(pokemon);
    },[]);
    // PokemonDownload();
    console.log(id);
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
            {/* {pokemon.name} */}
            {/* <CustomRoutes /> */}
        </>
    );
}

export default PokemonDetails;