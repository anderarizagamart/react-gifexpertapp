import React, { useState } from 'react';
import {PropTypes} from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    //     // setCategories([...categories, newItem ]);
    //     setCategories( cats => [...cats, newItem]);

    return (
        <>
            <h2>GifExpert</h2>

            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    // categories.map( category => {
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

GifExpertApp.propTypes = {

}

export default GifExpertApp;