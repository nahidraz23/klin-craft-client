import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating
} from "@material-tailwind/react";

const MyCraftItem = ({ item }) => {

    const { _id, item_name, short_description, price, rating, image, customization, stock_status } = item;

    return (
        <div>
            <Card className="rounded-2xl my-10">
                <CardHeader shadow={false} floated={false} className="h-96 px-4">
                    <img
                        src={image}
                        className="h-full w-full object-fill rounded-2xl"
                    />

                </CardHeader>
                <CardBody className="space-y-3">
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-semibold text-xl">
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
                    <div className="flex justify-between font-normal opacity-75">
                        <Typography>
                            Customiztion: {customization}
                        </Typography>
                        <Typography>
                            Stock: {stock_status}
                        </Typography>
                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex justify-between">
                    <Button
                        ripple={false}
                        fullWidth={false}
                        className="bg-gray-200 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Delete
                    </Button>
                    <Button
                        ripple={false}
                        fullWidth={false}
                        className="bg-gray-200 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Update
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MyCraftItem;