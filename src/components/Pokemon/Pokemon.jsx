import { Link } from 'react-router-dom';
import './Pokemon.css';
import { useEffect, useInsertionEffect } from 'react';

function Pokemon({name,image,key,id}) {
    useEffect(() => {},[Pokemon]);
    return (
        <div className="Pokemon">
            <Link style={{textDecoration : 'none'}} to={`/pokemon/${id}`}>
                <div style={{textAlign : 'center' , fontSize : '20px' , fontWeight : 'bold'}}>{name}</div>
                <div className='p-div' style={{height : '500px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                    <img className='image' src={image} alt="" />
                </div>
            </Link>
        </div>
    );
}

export default Pokemon;