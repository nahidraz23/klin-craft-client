import { useState } from "react";

const BestSellerSection = () => {

    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1523367662635-ec427c441fe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNlcmFtaWNzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1530006498959-b7884e829a04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNlcmFtaWNzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1554042861-0ad2fc2a8dc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcmNlbGFpbnxlbnwwfDB8MHx8fDA%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1613376050219-7182945e9a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcmNlbGFpbnxlbnwwfDB8MHx8fDA%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1565972093658-620985899236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcmNlbGFpbnxlbnwwfDB8MHx8fDA%3D",
        },
    ];

    const [active, setActive] = useState(
        "https://images.unsplash.com/photo-1565972093658-620985899236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcmNlbGFpbnxlbnwwfDB8MHx8fDA%3D",
    );

    return (
        <div>
            <div className="my-5">
                <h1 className="text-4xl font-sofia font-bold text-center">Best Seller</h1>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto w-full max-w-full rounded-lg md:h-[480px]"
                        src={active}
                        alt=""
                    />
                </div>
                <div className="grid grid-cols-5 gap-4 justify-items-center">
                    {data.map(({ imgelink }, index) => (
                        <div key={index}>
                            <img
                                onClick={() => setActive(imgelink)}
                                src={imgelink}
                                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                alt="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellerSection;