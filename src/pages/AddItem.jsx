import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviderComponent";
import Swal from "sweetalert2";

const AddItem = () => {

    const { user } = useContext(AuthContext);

    const handleAddItem = e => {
        e.preventDefault();

        const form = e.target;

        const item_name = form.item_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;
        const subcategory_Name = form.subcategory_Name.value;

        const item = { item_name, short_description, price, rating, customization, processing_time, stock_status, email, name, image, subcategory_Name };

        fetch('http://kiln-craft-server.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success",
                        text: "Item add successfully",
                        icon: "success",
                        confirmButtonText: "ok",
                    });
                }
            })
    }
  
    return (
        <form onSubmit={handleAddItem} className="flex flex-col items-center my-10">
            <div>
                <h1 className="text-5xl font-bold text-center my-5 font-sofia">Add Item</h1>
            </div>
            <div className="lg:w-1/2 flex flex-col border-2 border-black rounded-2xl p-5 gap-6">
                {/* first row */}
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Item Name</span>
                            </div>
                            <input name="item_name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <input name="short_description" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="flex flex-col lg:flex-row justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input name="price" type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                            <select name="rating" className="select select-bordered">
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
                <div className="flex flex-col lg:flex-row  justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Customization</span>
                            </div>
                            <select name="customization" className="select select-bordered">
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
                            <select name="processing_time" className="select select-bordered">
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
                <div className="flex flex-col lg:flex-row  justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Stock Status</span>
                            </div>
                            <select name="stock_status" className="select select-bordered">
                                <option value={'In Stock'}>In Stock</option>
                                <option value={'Made to Order'}>Made to Order</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">User Email</span>
                            </div>
                            <input name="email" defaultValue={user?.email} type="email" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                </div>
                {/* fifth row */}
                <div className="flex flex-col lg:flex-row  justify-between gap-5">
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">User Name</span>
                            </div>
                            <input name="name" defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        </label>
                    </div>
                    <div className="flex-1">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">Sub-Category Name</span>
                            </div>
                            <select name="subcategory_Name" className="select select-bordered">
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
                            <input name="image" type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                <div>
                    <input type="submit" value="Add" className="btn w-full" />
                </div>
            </div>
        </form>
    );
};

export default AddItem;