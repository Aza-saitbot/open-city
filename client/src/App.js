import React, {useContext, useEffect, useState} from "react";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {observer} from "mobx-react-lite";


const App =observer( () => {

    const {user}=useContext(Context)
    const [loading,setLoading]=useState(true)


    
    useEffect(()=>{
        check().then(data=>{
            console.log('then data',data)
            user.setUser(data)
            user.setIsAuth(true)

        }).finally(()=>setLoading(false))
    },[])

    if (loading){
        return  <div>Loading...</div>
    }

    return (
        <BrowserRouter>
            <div className="app">
                <NavBar/>
                <div className="app__content">
                    <AppRouter/>
                </div>
            </div>
        </BrowserRouter>
    )
})

export default App;
