import React, {useContext} from 'react';
import { Route, Routes,} from "react-router-dom";
import Auth from "../pages/Auth";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import {Context} from "../index";
import {observer} from "mobx-react-lite";



const AppRouter = observer(() => {
    const {user}=useContext(Context)

    return (
        <Routes>
            <Route path='/registration' element={<Auth/>} />
            <Route path='/' element={<Auth/>} />
            {user.isAuth && <Route path='/main' element={<Main/>} />}
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );
})

export default AppRouter;