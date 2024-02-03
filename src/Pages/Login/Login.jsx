import { useContext } from "react";
import FormEP from "../shared/FormEP/FormEP";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../layout/Providers/AuthProvider";


const Login = () => {


    const {loginUserWithEmailPass} = useContext(AuthContext)
    const naviGate = useNavigate();

    const location = useLocation()
    console.log(location.state)


    const handleLogin = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        loginUserWithEmailPass(email, password)
        .then((result) => {
            console.log(result.user);

            naviGate(location?.state ? location.state : '/')

            
        }).catch((err) => {
            console.log(err.message);
        });

    }


    return (
        <div>

            <div className="my-6"><Navbar></Navbar></div>
            <div className="max-w-3xl mx-auto my-16 shadow-inner bg-black">
                <h1 className="text-center text-white py-10 font-semibold text-4xl">Login Your Account</h1>
                <hr className="w-11/12 mx-auto border-2 border-gray-500" />
                <form onSubmit={handleLogin}>
                <div className="w-10/12  mx-auto m-4 ">
                    <FormEP></FormEP>
                    <div className="pt-10">
                        <button className="w-full text-[20px] font-semibold p-3 rounded-sm bg-gray-500 text-white ">Login</button>
                    </div>
                    <p className="text-xl text-center py-4">Do not Have An Account ? <span className="text-red-700"><Link to="/register">Register</Link></span></p>
                </div>
                </form>
            </div>



        </div>
    );
};

export default Login;