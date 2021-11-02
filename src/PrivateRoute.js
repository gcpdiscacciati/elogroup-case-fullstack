import React from 'react';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  //Renderiza a página apenas se a autenticação for bem sucedida. Do contrário,
  //retorna o usuário para a página de login.  
  const auth = localStorage.getItem('auth');

  return (
    <Route
      {...rest}
      render={props =>
        auth === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute