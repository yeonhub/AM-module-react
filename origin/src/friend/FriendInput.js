import React, { useRef, useState } from 'react';

const FriendInput = ({ onAdd }) => {
    const [user, setUser] = useState({
        name: '', age: '', image: ''
    })
    const focusing = useRef(null);
    const { name, age, image } = user;
    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !image) return;
        onAdd(user);
        setUser({ name: '', age: '', image: '' });
        focusing.current.focus();
    }
    return (
        <form className='formadd' onSubmit={onSubmit}>
            <p>
                <label htmlFor="">이름</label>
                <input type="text" name='name' value={name} onChange={changeInput} ref={focusing} />
            </p>
            <p>
                <label htmlFor="">나이</label>
                <input type="text" name='age' value={age} onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="">사진</label>
                <input type="text" name='image' value={image} onChange={changeInput} />
            </p>
            <p>
                <button type='submit'>추가</button>
            </p>
        </form>
    );
};

export default FriendInput;