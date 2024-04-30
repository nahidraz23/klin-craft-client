import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {

    const loadedInfo = useLoaderData()
    
    const { _id, item_name, short_description, price, rating, customization, processing_time, stock_status, image, subcategory_Name } = loadedInfo;

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const item_name = form.item_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const image = form.image.value;
        const subcategory_Name = form.subcategory_Name.value;

        const updatedItem = { item_name, short_description, price, rating, customization, processing_time, stock_status, image, subcategory_Name };

        fetch(`http://kiln-craft-server.vercel.app/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success",
                    text: "Item Updated successfully",
                    icon: "success",
                    confirmButtonText: "ok",
                });
            }
        })
    }

    return (
        <form onSubmit={handleUpdate} className="flex flex-col items-center">
            <div>
                <h1 className="text-3xl font-bold text-center">Update Item</h1>
            </div>
            <div className="w-1/2 flex flex-col  gap-6">
                {/* first row */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Item Name</span>
                            </div>
                            <input defaultValue={item_name} name="item_name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <input defaultValue={short_description} name="short_description" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input defaultValue={price} name="price" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                            <select defaultValue={parseInt(rating)} name="rating" className="select select-bordered">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* third row */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Customization</span>
                            </div>
                            <select defaultValue={customization} name="customization" className="select select-bordered">
                                <option value={'Yes'}>Yes</option>
                                <option value={'No'}>No</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Process Time</span>
                            </div>
                            <select defaultValue={processing_time} name="processing_time" className="select select-bordered">
                                <option value={"1 Hour"}>1 Hour</option>
                                <option value={"2 Hour"}>2 Hour</option>
                                <option value={"4 Hour"}>4 Hour</option>
                                <option value={"1 Day"}>1 Day</option>
                                <option value={"7 Days"}>7 Days</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* fourth row */}
                <div className="flex justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Stock Status</span>
                            </div>
                            <select defaultValue={stock_status} name="stock_status" className="select select-bordered">
                                <option value={'In Stock'}>In Stock</option>
                                <option value={'Made to Order'}>Made to Order</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Sub-Category Name</span>
                            </div>
                            <select defaultValue={subcategory_Name} name="subcategory_Name" className="select select-bordered">
                                <option value={'Clay-made pottery'}>Clay-made pottery</option>
                                <option value={'Stoneware'}>Stoneware</option>
                                <option value={'Porcelain'}>Porcelain</option>
                                <option value={'Terra Cotta'}>Terra Cotta</option>
                                <option value={'Ceramics & Architectural'}>Ceramics & Architectural</option>
                                <option value={'Home decor pottery'}>Home decor pottery</option>
                            </select>
                        </label>
                    </div>
                </div>
                {/* sixth row */}
                <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Image URL</span>
                            </div>
                            <input defaultValue={image} name="image" type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                <div>
                    <input type="submit" value="Update" className="btn w-full" />
                </div>
            </div>
        </form>
    );
};

export default UpdatePage;