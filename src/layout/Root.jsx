import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="text-4xl font-poppins max-w-6xl mx-auto">
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;