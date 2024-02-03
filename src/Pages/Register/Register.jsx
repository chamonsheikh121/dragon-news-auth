import Navbar from "../shared/Navbar/Navbar";
import FormEP from "../shared/FormEP/FormEP";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../layout/Providers/AuthProvider";

const Register = () => {


    const {creteUserWithPass} = useContext(AuthContext)

        const handleRegister =(e)=>{
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name = form.get('name');
            const imgURL = form.get('imgURL');
            const email = form.get('email')
            const password = form.get('password');
            console.log(name, imgURL, email, password);
            creteUserWithPass(email, password)
            .then((result) => {
                console.log(result.user);
            }).catch((err) => {
                console.log(err.message);
            });

        }




    return (
        <div>
            <div className="my-6"><Navbar></Navbar></div>
            <div className="max-w-3xl mx-auto my-16 shadow-inner bg-black">
                <h1 className="text-center text-white py-10 font-semibold text-4xl">Register Your Account</h1>
                <hr className="w-11/12 mx-auto border-2 border-gray-500" />
                <div className="w-10/12  mx-auto m-4 ">
                    <form onSubmit={handleRegister}>
                    <div className="py-4 space-y-4">
                        <label className="text-xl text-white py-4" htmlFor="name">Name:</label>
                        <input className="w-full text-xl p-3 rounded-sm" type="text" name="name" id="name" />
                    </div>
                    <div className="py-4 space-y-4">
                        <label className="text-xl text-white py-4" htmlFor="imgUrl">Image URL:</label>
                        <input className="w-full text-xl p-3 rounded-sm" type="text" name="imgURL" id="imgUrl" />
                    </div>
                    <FormEP></FormEP>
                    <div className="pt-10">
                        <button className="w-full text-[20px] font-semibold p-3 rounded-sm bg-gray-500 text-white ">Register</button>
                    </div>
                    </form>
                    <p className="text-xl text-center py-4">Already Have An Account ? <span className="text-red-700"><Link to="/login">Login</Link></span></p>
                </div>
            </div>

        </div>
    );
};

export default Register;