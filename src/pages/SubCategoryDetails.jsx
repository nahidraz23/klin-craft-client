import { useLoaderData } from "react-router-dom";
import SubCategoryCard from "../components/SubCategoryCard";

const SubCategoryDetails = () => {

    const loadedItems = useLoaderData();

    return (
        <div className="min-h-[calc(100vh-296px)]">
            <div className="grid lg:grid-cols-3 gap-10 container mx-auto">
                {
                    loadedItems.map((item, index) => <SubCategoryCard key={index} item={item}></SubCategoryCard>)
                }
            </div>
        </div>
    );
};

export default SubCategoryDetails;