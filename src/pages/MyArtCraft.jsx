import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviderComponent";
import MyCraftItemCard from "../components/MyCraftItemCard";
import { Select, Option } from "@material-tailwind/react";

const MyArtCraft = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;

    const [loadedItem, setloadedItem] = useState([])
    const [customSort, setCustomSort] = useState(null)
    

    useEffect(() => {
        fetch(`http://localhost:5300/myCraft/${email}`)
            .then(res => res.json())
            .then(data => {
                setloadedItem(data)
            })
    }, [user])

    const handleSort = (custom) => {
        const toLowerCase = custom.toLowerCase();
        setCustomSort(toLowerCase);
    }

    return (
        <div className="min-h-[calc(100vh-300px)]">
            <div className="p-10 bg-[#8f8f8f] bg-opacity-40">
                <h1 className="text-center text-4xl font-rokkitt">My art and craft</h1>
            </div>
            <div className="w-full flex justify-center pt-10">
                <div className="w-40">
                    <Select label="Sort By Customization" success>
                        <Option onClick={() => handleSort('Yes')}>Yes</Option>
                        <Option onClick={() => handleSort('No')}>No</Option>
                    </Select>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    loadedItem.filter(item => customSort === null || item.customization.toLowerCase() === customSort).map((item, index) => <MyCraftItemCard key={index} item={item} loadedItem={loadedItem} setloadedItem={setloadedItem}></MyCraftItemCard>)
                }
            </div>
        </div>
    );
};

export default MyArtCraft;