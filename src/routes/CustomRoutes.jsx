import { Routes , Route } from 'react-router-dom';
import Pokedex from '../components/pokedex/Pokedex';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PokemonList from '../PokemonList/PokemonList';

function CustomRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Pokedex />} />
            {/* <Route path='/' element={<PokemonList />}/> */}
            <Route path='/pokemon/:id' element={<PokemonDetails />}/>
        </Routes>
    );
}

export default CustomRoutes;