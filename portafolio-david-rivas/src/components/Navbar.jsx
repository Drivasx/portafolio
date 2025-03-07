import { navbar_items } from "../../data";

function Navbar(){

    const items = navbar_items.map(item =>
        <>
            <div className="w-12 h-12 place-self-center bg-gray-300 p-4 rounded-xl"><img src={item.icon} alt="" className="max-w-full max-h-full" href/></div>
        </>
    )

    return(
        <>
            <nav className="flex gap-4 w-max h-auto p-4 bg-gray-700 rounded-xl place-content-center container mx-auto justify-center">
                { items }
            </nav>
        </>
    )
}

export default Navbar;