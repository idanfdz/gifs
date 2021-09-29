import React from 'react'

const GrifGridItem = ({ url, title, id }) => {

    return (
        <div key={id} className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GrifGridItem
