import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNavbar = () => {


    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])


    return (
        <div>

            <h1 className="text-2xl font-semibold">All category</h1>
            
            <div>
            <span className="pl-10 text-xl bg-gray-500 w-full block mt-6 py-2 rounded-md">National News</span>

            <div className=" p-10 space-y-6">
                
                {
                    category.map(cate =>{
    
                    return  <Link 
                    key={cate.id}
                    className="block text-xl "
                    to={`/category/${cate.id}`} 

                      >{cate.name}</Link>
    
                    })
                }
                </div>
            </div>
            
        </div>
    );
};

export default LeftNavbar;