import React, { useRef, useState } from 'react';
import './Friend.css';
import dataList from '../assets/api/FriendData';
import FriendList from './FriendList';
import FriendInput from './FriendInput';

const Friend = () => {
    const [data, setData] = useState(dataList);
    const no = useRef(dataList.length + 1); // 초기에 한번 설정
    const [isChk, setIsChk] = useState(false);
    // 삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    // 모두 삭제
    const onDelAll = () => {
        setData([]);
    }
    // 모두 복구
    const onRecAll = () => {
        setData(dataList);
    }
    // 데이터 추가
    /* const onAdd = (name, age, image) => {
        setData([...data,
        { id: no.current++, name: name, age: age, image: image }
        ])
    } */
    const onAdd = (user) => {
        setData([...data,
        { id: no.current++, ...user }
        ])
    }
    const changeInput = () => {
        setIsChk(!isChk);
    }
    return (
        <div className='wrap'>
            <h1> 친구들 총 인원 : {data.length}</h1>
            <p className='chk'>
                <input type="checkbox" checked={isChk} onChange={changeInput} />
                활성 / 비활성
            </p>
            {isChk && <FriendList data={data} onDel={onDel} />}
            <p className="btn">
                <button onClick={onDelAll}>모두 삭제</button>
                <button onClick={onRecAll}>모두 복구</button>
            </p>
            <FriendInput onAdd={onAdd} />
        </div>
    );
};

export default Friend;