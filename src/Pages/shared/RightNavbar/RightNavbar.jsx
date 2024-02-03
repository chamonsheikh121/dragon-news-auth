import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img1 from "../../../assets/qZone1.png"
import img2 from "../../../assets/qZone2.png"
import img3 from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../layout/Providers/AuthProvider";

const RightNavbar = () => {


    const {logInWithGoogle, logInWithGithub} = useContext(AuthContext)

    const handleGoogleLogin = ()=>{
        logInWithGoogle()
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    const handleGithubLogIn=()=>{
        logInWithGithub()
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err.message);
        });
    }





    return (
        <div className="">
            {/* ================ Login with ============================= */}
            <div className="mb-6">
                <h5 className="text-[20px] font-semibold mb-6">LogIn Width</h5>
                <button onClick={handleGoogleLogin} className="text-sm flex gap-4 justify-center items-center w-full border py-2 rounded-md my-2"><FaGoogle className="text-center"></FaGoogle> <span>Login with Google</span></button>
                <button onClick={handleGithubLogIn} className="text-sm flex gap-4 justify-center items-center w-full border py-2 rounded-md my-2"><FaGithub className="text-center"></FaGithub> <span>Login with Github</span></button>
                
            </div>

            {/* ================ follow us on============================= */}
            <div>
                <h5 className="text-[20px] font-semibold mb-6 ">Find Us On</h5>
                <div className="border rounded-md">
                <button className="text-sm flex gap-4 pl-4 justify-start items-center w-full border-b py-4  "><FaFacebookF className="text-center text-blue-600 bg-white rounded-full text-xl p-[2px]"></FaFacebookF> <span>Facebook</span></button>
                <button className="text-sm flex gap-4 pl-4 justify-start items-center w-full border-b py-4  "><FaInstagram className="text-center text-xl text-red-500 bg-white rounded-full p-[2px]"></FaInstagram> <span>Instagram</span></button>
                <button className="text-sm flex gap-4 pl-4 justify-start items-center w-full py-4  "><FaTwitter className="text-center bg-white rounded-full text-xl text-blue-600 p-[2px]"></FaTwitter> <span>Twitter</span></button>
                </div>

                {/* ==================Q-zone=========================== */}
                <div className="p-2 mt-6 space-y-6 bg-gray-600 ">
                <h5 className="text-[20px] font-semibold mb-6 ">Q-Zone</h5>
                    
                    <div><img className="mx-auto" src={img1} alt="" /></div>
                    <div><img className="mx-auto" src={img2} alt="" /></div>
                    <div><img className="mx-auto" src={img3} alt="" /></div>
                </div>
                
            </div>
            
        </div>
    );
};

export default RightNavbar;