import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const CraftItem = ({ item }) => {

    const { item_name, short_description, price, rating, customization, processing_time, stock_status, email, name, image, subcategory_Name } = item;

    return (
        <Card className="w-96 rounded-2xl my-10">
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
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {short_description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
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