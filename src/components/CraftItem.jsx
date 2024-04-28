import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const CraftItem = ({ item }) => {

    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/craftitemsdetails/${id}`)
    }

    const { _id, item_name, short_description, price, rating, image } = item;

    return (
        <Card className="rounded-2xl my-10">
            <CardHeader shadow={false} floated={false} className="h-96 px-4">
                <img
                    src={image}
                    className="h-full w-full object-fill rounded-2xl"
                />

            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {item_name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        ${price}
                    </Typography>
                </div>
                <div className=" flex justify-between items-center">
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {short_description}
                    </Typography>
                    <div className="">
                        <Rating readonly value={parseInt(rating)} />
                    </div>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    onClick={() => handleViewDetails(_id)}
                    ripple={false}
                    fullWidth={true}
                    className="bg-gray-200 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>

    );
};

export default CraftItem;