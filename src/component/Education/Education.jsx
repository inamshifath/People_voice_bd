import { useLoaderData } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import '../National/National.css';

const Education = () => {
    const allnews = useLoaderData();

    const education = allnews.filter(item => item.news_catagory === 'education');
    const lenN =education.length;

    let tempT = [];
    for(let i=lenN-6;i>=0;i--){
        tempT.push(i);
    }

    return (
        <div className="container mx-auto mt-12">
            <div className="flex">
                <span className="flex items-center w-fit py-2 px-5 bg-[#006c6e] text-white font-medium"><FaHome className="text-white mr-2" />Content </span>
                <span className="flex items-center py-2 px-5 bg-[#666666] text-white font-medium"><IoMenu className="text-white mr-2" />Education</span>
            </div>
            <div className="flex gap-8 mt-5">
                <div className="w-[64%] bg-[#f0f0f0]">
                    {/* main news */}
                    <img className="w-full h-[75%]" src={education[lenN-1].news_image} alt="" />
                    <div className="p-2 space-y-2">
                        <h1 className="text-2xl hover:text-green-800 font-semibold">{education[lenN-1].news_title}</h1>
                        <h1>{education[lenN-1].news_details.slice(0,250)}<span className="text-xl font-semibold">. . .</span></h1>
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-2 grid-rows-2">
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={education[lenN-2].news_image} alt="" />
                        <h1 className="text-xl hover:text-green-800 font-semibold">{education[lenN-2].news_title}</h1>
                    </div>
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={education[lenN-3].news_image} alt="" />
                        <h1 className="text-xl hover:text-green-800 font-semibold">{education[lenN-3].news_title}</h1>
                    </div>
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={education[lenN-4].news_image} alt="" />
                        <h1 className="text-xl hover:text-green-800 font-semibold">{education[lenN-4].news_title}</h1>
                    </div>
                    <div className="bg-[#f0f0f0]">
                        <img className="w-full h-48" src={education[lenN-5].news_image} alt="" />
                        <h1 className="text-xl hover:text-green-800 font-semibold">{education[lenN-5].news_title}</h1>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex gap-8">
                <div className="w-[72%]">
                    <h1 className="text-2xl text-[#006c6e] font-bold">All News from Sports</h1>
                    <hr className="mb-1 line" />
                    <hr className="line" />
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        {
                            tempT.map((index, i) => {
                                return (
                                    <div className="flex gap-2 p-1 bg-[#f0f0f0]" key={i}>
                                        <img className="w-36 h-24" src={education[index].news_image} alt="" />
                                       <h1 className="text-xl hover:text-green-800 font-semibold">{education[index].news_title}</h1>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
                <div className="w-[26%] mt-7">
                    <h1 className="w-full text-center py-2 px-5 bg-[#006c6e] text-white font-medium">Leatest News</h1>
                    <div>

                    </div>
                </div>
            </div>

            
            
        </div>
    );
};

export default Education;