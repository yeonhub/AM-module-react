import React from 'react';
import StaffItem from './StaffItem';

const StaffList = ({ data, onDel,onLike }) => {
    return (
        <ul>
            {data.map(item => <StaffItem key={item.id} item={item} onDel={onDel} onLike={onLike} />)}
        </ul>
    );
};

export default StaffList;