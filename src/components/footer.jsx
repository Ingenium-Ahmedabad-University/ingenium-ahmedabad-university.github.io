import { Link } from 'gatsby'
import React from 'react'
import{FaInstagramSquare} from 'react-icons/fa'
import{FaDiscord} from 'react-icons/fa'
import{GrMail} from 'react-icons/gr'

//import data from '../../content/data.json'
const contact_details = [
    {
        
        "name":"Instagram",
        "icon":<Link to ="https://www.instagram.com/tech.ingenium/"><FaInstagramSquare size = "40px" /></Link>
    },
    {
        "name":"Discord",
        "icon":<Link to ="https://discord.gg/6kRCWWcW"><FaDiscord size = "40px"/></Link>
    },
    {
        "name":'Mail',
        "icon":<Link to ="mailto:ingenium@ahduni.edu.in"><GrMail size = "40px"/></Link>
    },
    {
        "name":"Phone",
        "icon":"+919999999999"
    }
]

const Footer = () =>(

    <div className="bg-green-500 flex flex-row justify-end relative space-x-6 text-center font-sans">
    {
        contact_details.map(e => (
            <a>
                <h1>{e.name}</h1>
                <code>{e.icon}</code>
            </a>
        ))
    }
    </div>
)
export default Footer