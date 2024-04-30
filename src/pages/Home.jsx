import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CraftItem from "../components/CraftItem";
import ArtandCraftCategory from "../components/ArtandCraftCategory";
import NewsLetter from "../components/NewsLetter";
import BestSellerSection from "../components/BestSellerSection";

const Home = () => {

    const craftItems = useLoaderData();

    return (
        <div className="overflow-hidden">
            <Banner></Banner>
            <div className="">
                <div className="mt-10">
                    <h1 className="text-center text-4xl font-bold font-sofia">Our Signature Items</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                    {
                        craftItems.slice(0, 6).map((item, index) => <CraftItem key={index} item={item}></CraftItem>)
                    }
                </div>
                {/* Art and craft Categorry Section*/}
                <div>
                    <ArtandCraftCategory></ArtandCraftCategory>
                </div>
                {/* Newsletter section */}
                <div className="my-10">
                    <NewsLetter></NewsLetter>
                </div>
                {/* Best seller section */}
                <div className="container mx-auto my-10">
                    <BestSellerSection></BestSellerSection>
                </div>
            </div>
        </div>
    );
};

export default Home;