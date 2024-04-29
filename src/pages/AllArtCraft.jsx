import { useLoaderData } from "react-router-dom";
import ItemList from "../components/ItemList";

const AllArtCraft = () => {

    const loadedItem = useLoaderData();

    return (
        <div className="min-h-[calc(100vh-298px)]">
            <div className="p-10 bg-[#8f8f8f] bg-opacity-40">
                <h1 className="text-center text-4xl font-rokkitt">All art and craft</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="">
                            <th>Item</th>
                            <th>Item Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        loadedItem.map((item, index) => <ItemList key={index} item={item}></ItemList>
                        )}
                    </tbody>
                </table>
            </div>
            {/* <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {
                    loadedItem.map((item, index) => <CraftItem key={index} item={item}></CraftItem>)
                }
            </div> */}
        </div>
    );
};

export default AllArtCraft;