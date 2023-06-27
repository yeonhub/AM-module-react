import React, { useRef, useState } from 'react';
import '../assets/css/reset.css'
import './Staff.scss'
import dataList from '../assets/api/StaffData'
import StaffList from './StaffList';
import StaffForm from './StaffForm';

const Staff = () => {
    const [data, setData] = useState(dataList)
    const no = useRef(dataList.length + 1)
    const [isAdd, setIsAdd] = useState(false)
    const showAdd = () => {
        setIsAdd(!isAdd)
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const onDelAll = () => {
        setData([]);
    }
    const onRe = () => {
        setData(dataList);
    }
    const onAdd = (user) => {
        setData(
            [
                ...data,
                { id: no.current++, ...user }
            ]
        )
    }
    const onLike = (id) => {
        setData(data.map(item => item.id === id ? { ...item, like: !item.like } : item))
    }

    return (
        <div className='wrap'>
            <div className="list">
                <h2>직원 명단</h2>
                <p>
                    <button onClick={onDelAll}>전체 삭제</button>
                    <button onClick={onRe}>초기화</button>
                </p>
                <button className='add' onClick={showAdd}>명단 추가</button>
                {
                    isAdd && <StaffForm onAdd={onAdd} />
                }
                <StaffList data={data} onDel={onDel} onLike={onLike} />
            </div>
        </div>
    );
};

export default Staff;