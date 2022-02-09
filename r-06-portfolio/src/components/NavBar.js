import { NavLink } from "react-router-dom"
import {SocialIcon} from "react-social-icons"

export default function Navbar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">

                    <NavLink 
                        to="/" 
                        exact 
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-white"
                    >Start</NavLink>

                    <NavLink 
                        to="/post"
                        activeClassName="text-red-100 bg-red-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    >Posty</NavLink>
                        
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >Projekty</NavLink>
                        
                    <NavLink 
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-red-100 bg-red-700"
                    >o mnie</NavLink>
                    
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon url="https://twitter.com/Verantius_des" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://www.youtube.com/channel/UCC92k1PMxzpRBWxBvlHHxRA" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://www.linkedin.com/in/adam-misiag-9027a4123/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                
                
                </div>


            </div>
        </header>
    )
}