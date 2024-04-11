import './PokemonList.css';
import Pokemon from "../components/Pokemon/Pokemon";
import usePokemonList from "../Hooks/usePokemonList";

function PokemonList() {

    const {isloading , pokemonlist , nexturl , prevurl ,setpokedexurl} = usePokemonList("https://pokeapi.co/api/v2/pokemon/");

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