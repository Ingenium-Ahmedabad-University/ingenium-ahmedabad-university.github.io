import React from "react";
import SEO from "../components/SEO";
import Header from "../components/header";
import Footer from "../components/footer";
import Registration from "../components/registration";


const Registration_Detail=()=>{
    return(
        <>
        <div>
            <SEO/>
            <div className="base bg-base">
                <Header/>
                <Registration/>
                <Footer/>
            </div>
        </div>
        </>
    )
    
}

export default Registration_Detail;
