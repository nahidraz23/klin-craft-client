import CraftItem from "../components/CraftItem";
import { useLoaderData } from "react-router-dom";

const SubCategoryDetails = () => {

    const loadedItems = useLoaderData();

    return (
        <div className="min-h-[calc(100vh-296px)]">
            <div className="grid grid-cols-3 gap-10 container mx-auto">
                {
                    loadedItems.map((item, index) => <CraftItem key={index} item={item}></CraftItem>)
                }
            </div>
        </div>
    );
};

export default SubCategoryDetails;