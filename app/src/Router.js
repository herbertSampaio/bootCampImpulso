import React from 'react';
import Chat from './Pages/Chat';
import Login from './Pages/Login';


const Router = () => {

    if(window.location.pathname === '/chat')
        return <Chat />

    return <Login />
};

export default Router;