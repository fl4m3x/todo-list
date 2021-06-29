import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './styles.css';

export default function User() {
  
  const [users, setUsers ] = useState([]);

  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data)
    })
  }, [])

    return (
      <div className="container">
        {users.map(user => (
          <section className="projects no-padding-top" key={user.id}>
          <div className="container">
            <div className="todo">
              <div className="row bg-white has-shadow">
                <div className="left-col col-lg-15 d-flex align-items-center justify-content-between">
                  <div className="user-title d-flex align-items-center">
                    <div className="text">
                      <h3 className="h4">{user.name}</h3><small>Username: {user.username} | Email para contato: {user.email} | WebSite: {user.website}</small>
                    </div>
                  </div>
                  <div className="link">
                    <Link to={location => `todo/${user.id}/${user.name}`}>
                      <button className="btn btn-primary hidden-sm-down">Ver atividades</button>
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </section>
        ))}
      </div>
  )
}

