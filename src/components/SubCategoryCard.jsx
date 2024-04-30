import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Rating
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const SubCategoryCard = ({ item }) => {

    const { _id, item_name, short_description, price, rating, customization, processing_time, stock_status, image, subcategory_Name } = item;

    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/craftitemsdetails/${id}`)
    }

    return (
        <Card className="w-auto lg:max-w-[26rem] shadow-lg p-4 rounded-2xl">
            <CardHeader floated={false} color="blue-gray" className="rounded-2xl">
                <img
                    src={image}
                    className="h-72 w-full rounded-2xl"
                />
            </CardHeader>
            <CardBody className="p-2">
                <table className="table">
                    {/* head */}
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>Category: </th>
                            <td>{subcategory_Name}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>Item Name: </th>
                            <td>{item_name}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>Short Description: </th>
                            <td>{short_description}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>Processing Time: </th>
                            <td>{processing_time}</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>Rating: </th>
                            <td><Rating readonly value={parseInt(rating)} /></td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <th>Price: </th>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </table>
            </CardBody>
            <CardFooter>
                <Button
                    onClick={() => handleViewDetails(_id)}
                    size="lg" fullWidth={true} className="p-3">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SubCategoryCard;