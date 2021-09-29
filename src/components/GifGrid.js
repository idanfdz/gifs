import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import GrifGridItem from './GrifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);


    useEffect(() => {
        getGifs(category)
        .then(setimages);
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((img) => {
                    return (
                        <GrifGridItem
                            key={img.id}
                            {...img}
                        />
                    )

                })

                }
            </div>
        </>
    )
}
