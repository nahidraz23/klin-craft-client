
import newsletterBG from '../assets/newsletterBG.png';


const NewsLetter = () => {

    const newsletterSection = {
        backgroundImage: `url(${newsletterBG})`,
    }

    return (
        <div className="p-28 flex flex-col lg:flex-row lg:justify-between items-center" style={newsletterSection}>
            <div className='space-y-3'>
                <h1 className='text-5xl font-bold font-sofia'>JOIN OUR COMMUNITY</h1>
                <h2 className='text-lg font-sofia'>Subscribe our newsletter and get discount 30% off</h2>
            </div>
            <div className='flex flex-col lg:flex-row gap-1'>
                <div>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs night:text-black" />
                </div>
                <div>
                    <button className='btn'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;