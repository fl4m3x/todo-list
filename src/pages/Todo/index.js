import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { List } from '../../components';

export default function Todo() {
  const { id, username } = useParams();
  const history = useHistory();

  const goBack = () => {
    localStorage.clear();
    history.push('/');

  }

  return (
    <div>
      <button onClick={goBack} type="button" className="btn btn-primary"> Voltar </button>
      <List id={id} userName={username} />
    </div>
  )
}
