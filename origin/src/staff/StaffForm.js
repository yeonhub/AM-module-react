import React, { useRef, useState } from 'react';

const StaffForm = ({ onAdd }) => {
    const [user, setUser] = useState(
        { name: '', job: '', tel: '', img: '' }
    )
    const nameRef = useRef(null)
    const { name, job, tel, img } = user
    const changeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const onSubmit = e => {
        e.preventDefault();
        if (!name || !job || !tel || !img) return
        onAdd(user)
        setUser({ name: '', job: '', tel: '', img: '' })
        nameRef.current.focus();
    }
    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor="">이름</label>
                <input type="text" name='name' value={name} onChange={changeInput} ref={nameRef} placeholder='이름'/>
            </p>
            <p>
                <label htmlFor="">직업</label>
                <input type="text" name='job' value={job} onChange={changeInput} placeholder='직업'/>
            </p>
            <p>
                <label htmlFor="">연락처</label>
                <input type="text" name='tel' value={tel} onChange={changeInput} placeholder='010-0000-0000'/>
            </p>
            <p>
                <label htmlFor="">사진</label>
                <input type="text" name='img' value={img} onChange={changeInput} placeholder='사진 링크'/>
            </p>
            <p>
                <button>추가</button>
            </p>
        </form>
    );
};

export default StaffForm;