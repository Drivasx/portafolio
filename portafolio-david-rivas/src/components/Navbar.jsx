import { NavLink } from "react-router";
import { navbar_items } from "../../data";

function Navbar(){

    const items = navbar_items.map(item =>
    
            <div key={item.id} className="w-16 h-16 place-self-center bg-gray-300 text-black p-4 rounded-xl">
                <NavLink to={item.link}><img src={item.icon} alt="" className="max-w-full max-h-full"/></NavLink>
            </div>    
        
    )

    return(
        
            <nav className="flex gap-4 w-max h-auto p-4 bg-gray-700 rounded-xl place-content-center container mx-auto justify-center">
                { items }
            </nav>
        
    )
}

export default Navbar;



//<img src={item.icon} alt="" className="max-w-full max-h-full" href/>