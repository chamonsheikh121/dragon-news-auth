import "./Style.css"
import Header from "../shared/Header/Header";
import RightNavbar from "../shared/RightNavbar/RightNavbar";
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const NewsDetails = () => {


    const {id} =useParams()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 my-20  md:grid-cols-4 md:gap-4 ">
                <div className="col-span-3 ">
                    <div>this is the main news body</div>
                    <div className="item3 ">{id}</div>
                </div>
                <div className="item2 "><RightNavbar></RightNavbar></div>
                
            </div>

        </div>
    );
};

export default NewsDetails;