import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";


const ArtandCraftCategory = () => {

    const navigate = useNavigate()

    const handleClayMadePottery = type => {
        navigate(`/subcategorydetails/${type}`)
    }
    const handleStoneware = type => {
        navigate(`/subcategorydetails/${type}`)
    }
    const handlePorcelain = type => {
        navigate(`/subcategorydetails/${type}`)
    }
    const handleTerraCotta = type => {
        navigate(`/subcategorydetails/${type}`)
    }
    const handleCeramicsAndArchitecture = type => {
        navigate(`/subcategorydetails/${type}`)
    }
    const handleHomeDecor = type => {
        navigate(`/subcategorydetails/${type}`)
    }


    return (
        <div className="container mx-auto my-10">
            <div className="my-10">
                <h1 className="text-center text-4xl font-bold font-sofia">Art & Craft Categories</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div
                    onClick={() => handleClayMadePottery('Clay-Made Pottery')}
                >
                    <Card
                        shadow={false}
                        className="relative hover:cursor-pointer hover:scale-105 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1622258699373-89e5c8437b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxwb3R0ZXJ5fGVufDB8fDB8fHww')] bg-cover bg-center rounded-2xl"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Clay-Made Pottery
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div
                    onClick={() => handleStoneware('Stoneware')}
                >
                    <Card
                        shadow={false}
                        className="relative hover:cursor-pointer hover:scale-105 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1556321360-f492c2ffea64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RvbmV3YXJlfGVufDB8fDB8fHww')] bg-cover bg-center rounded-2xl"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Stoneware
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div
                    onClick={() => handlePorcelain('Porcelain')}
                >
                    <Card
                        shadow={false}
                        className="relative hover:cursor-pointer hover:scale-105 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1634557943536-9fa1b17b72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fFBvcmNlbGFpbnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center rounded-2xl"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Porcelain
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div
                    onClick={() => handleTerraCotta('Terra Cotta')}
                >
                    <Card
                        shadow={false}
                        className="relative hover:cursor-pointer hover:scale-105 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1511772368976-3c7815f56fb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlcnJhJTIwY290dGElMjBwb3R8ZW58MHwxfDB8fHww')] bg-cover bg-center rounded-2xl"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Terra Cotta
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div
                    onClick={() => handleCeramicsAndArchitecture('Ceramics & Architectural')}
                >
                    <Card
                        shadow={false}
                        className="relative hover:cursor-pointer hover:scale-105 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                    >
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="absolute inset-0 m-0 h-full w-full bg-[url('https://plus.unsplash.com/premium_photo-1679811667938-653de2474ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxDZXJhbWljc3xlbnwwfDF8MHx8fDA%3D')] bg-cover bg-center rounded-2xl"
                        >
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                        </CardHeader>
                        <CardBody className="relative py-14 px-6 md:px-12">
                            <Typography variant="h5" className="mb-4 text-gray-400">
                                Ceramics & Architectural
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                <div
                    onClick={() => handleHomeDecor('Home decor pottery')}
                >
                    <Link to={``}>
                        <Card
                            shadow={false}
                            className="relative hover:cursor-pointer hover:scale-105 grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
                        >
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="absolute inset-0 m-0 h-full w-full bg-[url('https://plus.unsplash.com/premium_photo-1701194078976-b3169340a6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxIb21lJTIwZGVjb3IlMjBwb3R0ZXJ5fGVufDB8MXwwfHx8MA%3D%3D')] bg-cover bg-center rounded-2xl"
                            >
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-12">
                                <Typography variant="h5" className="mb-4 text-gray-400">
                                    Home decor pottery
                                </Typography>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArtandCraftCategory;