import React from 'react';

const StaffItem = ({ item, onDel, onLike }) => {
    const { id, img, name, job, tel, like } = item
    return (
        <li>
            <img src={img} alt={name} />
            <div>
                <strong>{name}</strong>
                <span>{job}</span>
                <p>{tel}</p>
            </div>
            <div>
                {
                    like ? <i className='xi-heart' onClick={() => onLike(id)}></i> : <i className='xi-heart-o' onClick={() => onLike(id)}></i>
                }
                <button onClick={() => onDel(id)}>퇴사</button>
            </div>
        </li>
    );
};

export default StaffItem;