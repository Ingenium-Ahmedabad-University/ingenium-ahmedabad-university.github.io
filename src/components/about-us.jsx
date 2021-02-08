import React from 'react'
import img1 from '../images/ingenium.jpg'
export const About = ()=> (
    <code>
        <div className="bg-gray-800 text-center text-6xl text-secondary py-8 font-serif font-title-oswald">
        ABOUT US
        </div>
        <div className="flex flex-row bg-gray-800 relative flex-wrap lg:flex-nowrap"> 
        <div className="flex flex-col w-10/12 p-8">
        <img src ={img1}></img>
        </div>
        <div className="flex flex-col space-y-5 px-8 py-8 justify-center text-justify relative font-sans flex-wrap text-primary">
        <h1> Computer science is the study of algorithmic processes, computational machines and computation itself.[1] As a discipline, computer science spans a range of topics from theoretical studies of algorithms, computation and information to the practical issues of implementing computational systems in hardware and software.</h1>
        <p><h1> Its fields can be divided into theoretical and practical disciplines. Algorithms and data structures have been called the heart of computer science.[4] Programming language theory considers approaches to the description of computational processes, while computer programming involves the use of them to create complex systems.  A digital computer is capable of simulating various information processes.[5] The fundamental concern of computer science is determining what can and cannot be automated.[6] Computer scientists usually focus on academic research. The Turing Award is generally recognized as the highest distinction in computer sciences.</h1></p>
        </div>
        </div>
        </code>
)