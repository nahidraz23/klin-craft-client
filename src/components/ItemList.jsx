import { Link } from "react-router-dom";

const ItemList = ({ item }) => {

    const { _id, item_name, image, name, email } = item;

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <h1>{item_name}</h1>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>

            <td >
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <th>
                <Link to={`/craftitemsdetails/${_id}`}>
                    <button className="btn btn-sm">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default ItemList;