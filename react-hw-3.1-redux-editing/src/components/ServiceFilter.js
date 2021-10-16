import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilterField} from '../actions/actionCreators';

export default function ServiceFilter() {
    const item = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const {value} = evt.target;
        dispatch(changeFilterField(value));
    }

    return (
        <div>
            Enter the service name: 
            <input name='filter' onChange={handleChange} value={item}/>
        </div>
    );
}