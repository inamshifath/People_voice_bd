import { useLoaderData } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import '../National/National.css';
import { useState } from "react";

const Agriculture = () => {
    const allnews = useLoaderData();

    const agriculture = allnews.filter(item => item.news_catagory === 'agriculture');
    const lenN =agriculture.length;

    let tempT = [];
    for(let i=lenN-6;i>=0;i--){
        tempT.push(i);
    }

    const [visible, setvisible]= useState(2);
    const handleMore = () =>{
        setvisible(visible+2);
    }


    return (
        <div className="container mx-auto mt-12">
            <div className="flex">
                <span className="flex items-center w-fit py-2 px-5 bg-red-600 text-white font-medium"><FaHome className="text-white mr-2" />Content </span>
                <span className="flex items-center py-2 px-5 bg-[#666666] text-white font-medium"><IoMenu className="text-white mr-2" />Agriculture</span>
            </div>
            <div className="flex gap-8 mt-5">
                <div className="w-[64%] bg-[#f0f0f0]">
                    {/* main news */}
                    <img className="w-full h-[75%]" src={agriculture[lenN-1].news_image} alt="" />
                    <div className="p-2 space-y-2">
                        <h1 className="text-2xl hover:text-red-600 font-semibold">{agriculture[lenN-1].news_title}</h1>
                        <h1>{agriculture[lenN-1].news_details.slice(0,250)}<span className="text-xl font-semibold">. . .</span></h1>
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-2 grid-rows-2">
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={agriculture[lenN-2].news_image} alt="" />
                        <h1 className="text-xl hover:text-red-600 font-semibold">{agriculture[lenN-2].news_title}</h1>
                    </div>
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={agriculture[lenN-3].news_image} alt="" />
                        <h1 className="text-xl hover:text-red-600 font-semibold">{agriculture[lenN-3].news_title}</h1>
                    </div>
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={agriculture[lenN-4].news_image} alt="" />
                        <h1 className="text-xl hover:text-red-600 font-semibold">{agriculture[lenN-4].news_title}</h1>
                    </div>
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={agriculture[lenN-5].news_image} alt="" />
                        <h1 className="text-xl hover:text-red-600 font-semibold">{agriculture[lenN-5].news_title}</h1>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex gap-8">
                <div className="w-[72%]">
                    <h1 className="text-2xl mb-2 text-red-600 font-bold">All News from Agriculture</h1>
                    <hr className="mb-1 line" />
                    <hr className="line" />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        {
                            tempT.slice(0,visible).map((index, i) => {
                                return (
                                    <div className="flex gap-2 p-1 bg-[#f0f0f0]" key={i}>
                                        <img className="w-36 h-24" src={agriculture[index].news_image} alt="" />
                                       <h1 className="text-xl hover:text-red-600 font-semibold">{agriculture[index].news_title}</h1>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button className="bg-red-600 text-white px-16 rounded-xl hover:btn-ghost py-2 text-2xl font-medium ml-[50%] mt-5" onClick={handleMore}>See more</button>
                    
                </div>
                <div className="w-[26%] mt-7">
                    <h1 className="w-full text-center py-2 px-5 bg-red-600 text-white font-medium">Leatest News</h1>
                    <div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Agriculture;