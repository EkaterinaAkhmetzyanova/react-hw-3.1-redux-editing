import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeEditServiceField, changeServiceField, removeService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id) => {
    const service = items.find((service) => service.id === id);
    console.log(service);
    dispatch(changeServiceField('name', service.name));
    dispatch(changeServiceField('price', service.price));
    dispatch(changeEditServiceField(service.id));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList;