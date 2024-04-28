import { useLoaderData } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

const CraftItemsDetails = () => {

    const loadedItem = useLoaderData();

    const { item_name, short_description, price, rating, customization, processing_time, stock_status, image, subcategory_Name } = loadedItem;

    return (
        <div className="min-h-[calc(100vh-296px)]">
            <div className="p-10 bg-[#8f8f8f] bg-opacity-40">
                <h1 className="text-2xl font-rokkitt text-center uppercase">{subcategory_Name}</h1>
            </div>
            <div className="flex container mx-auto gap-10 p-10">
                <div className="">
                    <img
                        className="w-[770px] h-[524px]"
                        src={image}
                        alt="nature image"
                    />
                </div>
                <div className="lg:w-1/2 space-y-8 flex flex-col justify-center">
                    <div>
                        <div>
                            <h1 className="text-4xl font-semibold font-rokkitt">{item_name}</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold font-rokkitt">{short_description}</h1>
                        </div>
                    </div>
                    <div>
                        <table className="w-1/2">
                            <tbody className="font-rokkitt text-2xl ">
                                <tr >
                                    <td className="py-2 ">Customization:</td>
                                    <td>{customization}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Stock Status:</td>
                                    <td>{stock_status}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Processing Time: </td>
                                    <td>{processing_time}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Rating:</td>
                                    <td ><Rating readonly value={parseInt(rating)} /></td>
                                </tr>
                                <tr>
                                    <td className="py-2">Price:</td>
                                    <td>${price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CraftItemsDetails;