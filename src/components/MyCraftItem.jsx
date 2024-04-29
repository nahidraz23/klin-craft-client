import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Rating
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MyCraftItem = ({ item, loadedItem, setloadedItem }) => {

    const { _id, item_name, short_description, price, rating, image, customization, stock_status } = item;

    // Handle for delete 
    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5300/myartcraft/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = loadedItem.filter(item => item._id !== id);
                            setloadedItem(remaining);
                        }
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your item has been deleted.",
                    icon: "success"
                });
            }
        });
    }

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
                        onClick={() => handleDeleteItem(_id)}
                        ripple={false}
                        fullWidth={false}
                        className="bg-gray-200 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Delete
                    </Button>
                    <Link to={`/updatepage/${_id}`}>
                        <Button
                            ripple={false}
                            fullWidth={false}
                            className="bg-gray-200 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            Update
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MyCraftItem;