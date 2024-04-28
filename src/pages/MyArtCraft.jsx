import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviderComponent";
import CraftItem from "../components/CraftItem";
import MyCraftItem from "../components/MyCraftItem";

const MyArtCraft = () => {

    const {user} = useContext(AuthContext);
    const email = user?.email;

    const [loadedItem, setloadedItem] = useState([])
    console.log(loadedItem)

    useEffect(() => {
        fetch(`http://localhost:5300/myCraft/${email}`)
        .then(res => res.json())
        .then(data => {
            setloadedItem(data)
        })
    },[user])

    return (
        <div className="min-h-[calc(100vh-300px)]">
            <div className="p-10 bg-[#8f8f8f] bg-opacity-40">
                <h1 className="text-center text-4xl font-rokkitt">My art and craft</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    loadedItem.map((item, index) => <MyCraftItem key={index} item={item}></MyCraftItem>)
                }
            </div>
        </div>
    );
};

export default MyArtCraft;