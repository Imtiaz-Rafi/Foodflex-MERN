import React, { useState, useEffect } from "react";
import Logo from "./controllers/Logo";
import NavLinks from "./controllers/NavLinks";
import NavCards from "./controllers/NavCards";

import PropTypes from "prop-types";

const Header = ({ toggleLoginForm }) => {
    // const [LoggedIn,setLoggedIn] = useState(false);
    // const isLoggedIn=async()=>{
    //     try{
    //         const res = await fetch("/",{
    //             method:"GET",
    //             headers:{
    //                 Accept:"application/json",
    //                 "Content-Type":"application/json"
    //             },
    //             credentials:"include"
    //         })
    //         const data = await res.json();
    //         console.log(data);
    //         if(!res.status ===200){
    //             const error = new Error(res.error);
    //             throw error;
    //         }else{
    //             setLoggedIn(true)
    //         }
    //     }catch(err){
    //         console.log(err);
    //         setLoggedIn(false)
    //     }
    // }

    // useEffect(() => {
    //     isLoggedIn();
    // }, [])

    return (
        <section className="navbar custom-navbar navbar-fixed-top navbar-home" role="navigation">
            <div className="container">
                <Logo />
                {/* MENU LINKS */}
                {/* <div className="collapse navbar-collapse"> */}
                <div className="collapse navbar-collapse">
                    <NavLinks />
                    <NavCards toggleLoginForm={toggleLoginForm} />
                </div>
            </div>
        </section>
    );
};
Header.propTypes = {
    toggleLoginForm: PropTypes.func.isRequired,
};

export default Header;
