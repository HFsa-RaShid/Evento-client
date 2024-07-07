
import banner from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="h-[600px] " >
            <img src={banner} className="h-full w-full " />
            <h1 className='absolute top-1/4 left-20 text-white text-[55px] w-1/3'>
                We Create Culinary dishes to your tease
            </h1>
        </div>
    );
};

export default Banner;