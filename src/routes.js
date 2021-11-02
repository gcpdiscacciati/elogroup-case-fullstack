import React from 'react';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import RegisterLead from './pages/RegisterLead';

//Define as rotas da aplicação. As rotas Home e RegisterLead são privadas e acessíveis apenas se o usuário
//se autenticar na tela de Login.
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Login} />
            <Route path="/sign-up" component={Register} />
            <PrivateRoute path="/register-lead" component={RegisterLead} />
            <PrivateRoute path="/home" component={Home} />;
        </Switch>  
    </BrowserRouter>
);

export default Routes;