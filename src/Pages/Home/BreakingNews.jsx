import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className="flex justify-center items-center gap-6 bg-gray-600 my-6 py-2 px-6">

            <button className="btn btn-secondary text-xl text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={150} className="h-full text-xl">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: </Marquee>
            
        </div>
    );
};

export default BreakingNews;