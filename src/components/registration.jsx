import React, { useState } from "react";
import { useEffect } from "react";

const Registration=()=>{
    const data=[
        {
            title:'Event',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            price:'100',
            brief:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        },
        {
            title:'Event1',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            price:'100',
            brief:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        },
        {
            title:'Event2',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            price:'100',
            brief:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        },
        {
            title:'Event3',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            price:'100',
            brief:'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        }
    ]
    return(
        <>
            <div className="pt-28">
            <div className="grid grid-cols-4 gap-4">
                    
                        {
                            data.map((item)=>{
                                return(
                                    <div className="text-black bg-white shadow shadow-white mx-12 px-10">
                                    <>
                                        <p>{item.title}</p>
                                        <p>{item.description}</p>
                                        <p>{item.price}</p>
                                        <p>{item.brief}</p>                    
                                        <button className="py-2 bg-gradient-to-br from-red-500 to-indigo-400 social-bg text-2xl font-bold sm:text-4xl flex justify-center rounded-xl">Register</button>
                                    </>
                                    </div>
                                )
                            })
                        }
                    
                </div>

                
            </div>
        </>
    );
}
export default Registration