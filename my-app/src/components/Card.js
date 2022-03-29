import React from 'react';

const Card = ({id,name,email}) => {
    return (
        <div className='bg-light-green dib pa3 ma3 grow bw2 br3 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;