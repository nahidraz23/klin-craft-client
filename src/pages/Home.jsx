import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CraftItem from "../components/CraftItem";

const Home = () => {

    const craftItems = useLoaderData();
    console.log(craftItems)
    return (
        <div>
            <Banner></Banner>
            {/*  */}
            <div className="">
                <div className="mt-10">
                    <h1 className="text-center text-4xl font-bold font-sofia">Our Signature Items</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        craftItems.map((item, index) => <CraftItem key={index} item={item}></CraftItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;