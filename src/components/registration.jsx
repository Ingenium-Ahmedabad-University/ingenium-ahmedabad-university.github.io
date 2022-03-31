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
                                    <div className="text-black bg-white shadow shadow-white mx-8 p-8 rounded-xl">
                                    <>
                                        <p className="text-3xl font-bold mb-6">{item.title}</p>
                                        <p className="mb-6">{item.description}</p>
                                        <p className="text-3xl font-bold mb-6">Entry Fee: {item.price} Rs</p>
                                        <p className="font-medium">Brief Detail : </p>
                                        <p className="font-medium mb-6">{item.brief}</p>                    
                                        <button className="bg-gradient-to-br from-red-500 to-indigo-400 social-bg text-xl font-bold sm:text-3xl flex justify-center rounded-3xl">Register</button>
                                    
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