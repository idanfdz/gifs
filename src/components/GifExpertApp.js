import React, { useState } from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['memes']);


    return (
        <>
            <h2>GifExpertApps</h2>
            <AddCategory
                setCategories={setCategories}
            />

                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />

                    ))
                }
        </>
    );
}

export default GifExpertApp;
