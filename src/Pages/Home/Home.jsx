import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftNavbar from "../shared/LeftNavbar/LeftNavbar";
import Navbar from "../shared/Navbar/Navbar";
import RightNavbar from "../shared/RightNavbar/RightNavbar";
import BreakingNews from "./BreakingNews";
import { CiShare2, CiBookmark} from "react-icons/ci";
import { Link } from "react-router-dom";


const Home = () => {

    const allNews = useLoaderData();




    return (
        <div>

            <Header></Header>

            <BreakingNews></BreakingNews>

            <Navbar></Navbar>


            <div className="py-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="">
                    <LeftNavbar></LeftNavbar>
                </div>

                <div className="col-span-2 ">
                    <h1 className="text-2xl font-semibold">Dragon News Home</h1>
                    
                    {
                        allNews?.map(news=>{
                            return <div 
                            key={news._id}
                            className="my-4 border-[1px] border-gray-600"
                            >
                                <div>
                        <div className="flex justify-between p-4 bg-slate-600">
                            <div className="flex justify-center items-center gap-4">
                                <img className="w-10 rounded-full" src={news?.author?.img} alt="" />
                                <span>
                                    <h5 className="text-xl font-semibold">{news?.author?.name}</h5>
                                    <p className="text-sm">{news?.author?.published_date}</p>
                                </span>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <CiBookmark className="text-3xl"></CiBookmark>
                                <CiShare2 className="text-3xl"></CiShare2>
                            </div>
                        </div>
                        <div className="space-y-4 p-4 ">
                            <h3 className="text-2xl font-semibold">{news?.title}</h3>
                            <img className="w-full" src={news?.image_url} alt="" />
                            <p className="text-sm">
                            {
                                news.details.length > 200 ? <span>{news.details.slice(0, 200)}<Link 
                                className="text-red-600 pl-2"
                                to={`/news/${news._id}`}
                                >see more...</Link> </span>
                                : news.details
                            }
                            </p>
                            <hr />
                            <p>
                                <span></span>
                                <span><span></span></span>
                            </p>
                        </div>

                    </div>
                            </div>
                        })
                    }

                </div>


                <div className="">
                    <RightNavbar></RightNavbar>
                </div>
            </div>

        </div>
    );
};

export default Home;