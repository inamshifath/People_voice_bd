import { useLoaderData } from "react-router-dom";
import PartOneHome from "./PartOneHome";
import Part2Home from "./Part2Home";
import Part3Home from "./Part3Home";
import { FaInfinity } from "react-icons/fa6";

const Home = () => {

    const allnews = useLoaderData();
    const len = allnews.length;
    let t = [];
    for( let i=len-2;i>=len-4;i--){
        t.push(i);
    }
    let l = [];
    for( let i=len-5;i>=len-7;i--){
        l.push(i);
    }

    const education= allnews.filter(item => item.news_catagory === 'education');
    const lenE =education.length;

    const tech = allnews.filter(item => item.news_catagory === 'tech');
    const lenT =tech.length;

    const agriculture = allnews.filter(item => item.news_catagory === 'agriculture');
    const lenA =agriculture.length;
  

    return (
        <div className="container mx-auto">
            <div className="flex gap-4">
                <div className="grid grid-cols-3 grid-rows-3 mt-5 gap-5">
                    <div className="row-span-2 col-span-2 space-y-3 ">
                        <img className="w-full" src={allnews[len-1].news_image} alt="" />
                        <h1 className="text-3xl hover:text-red-600 font-semibold ">{allnews[0].news_title} </h1>
                        <p>{allnews[len-1].news_details.slice(0,250)}<span className="text-xl font-semibold"> . . .</span></p>
                    </div>
                    <div className="row-span-2">
                        {t.map((index) => (
                            <div className="flex mb-5" key={index}>
                                <div>
                                    <h1 className="text-xl hover:text-red-600  font-semibold">{allnews[index].news_title}</h1>
                                    <p>{allnews[index].news_details.slice(0,87)}<span className="text-xl font-semibold"> . . .</span></p>
                                </div>
                                <img className="w-40 h-28" src={allnews[index].news_image} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-3 flex gap-2 h-fit mt-6">
                        {l.map((index)=>(
                            <div className="flex items-center gap-2" key={index}>
                                <img className="w-52 h-32" src={allnews[index].news_image} alt="" />
                                <h1 className="text-xl hover:text-red-600 font-medium">{allnews[index].news_title}</h1>
                        </div>
                        ))}
                    </div>          
                </div>
                <div className=" h-full mt-5 w-[35%]">
                    <div className=""><img className="w-[100%]" src='https://i.ibb.co/HGgt0P0/7.png' alt="" /></div>
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>
                    </div>
                </div>
            </div>
            <PartOneHome allnews={allnews}></PartOneHome>
            <Part2Home allnews={allnews}></Part2Home>
            <Part3Home allnews={allnews}></Part3Home>
            <div className="flex space-x-8 mt-10 ">
                <div>
                    <hr className="line"/>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-semibold mt-2 mb-2 text-red-600 ml-3">Education</h1>
                        <FaInfinity />
                    </div>
                    <hr className="mb-1 line" />
                    <hr className="line" />
                    <div className="relative h-80 flex items-end mt-3 mb-5 bg-cover bg-center"  style={{ backgroundImage: `url(${education[lenE-1].news_image})` }}>
                        <h1 className="text-xl text-yellow-50 font-semibold  z-10">{education[lenE-1].news_title}</h1>
                    </div>
                    {
                        education.slice(-4).map((item,index)=><div className="flex mb-2 ml-2" key={index}>
                            <h1 className="text-xl font-semibold mr-2">{index +1}.</h1>
                            <h1 className="text-xl hover:text-red-600 font-semibold">{item.news_title}</h1>
                        </div>)
                    }
                </div>
                <div>
                    <hr className="line"/>
                    <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-semibold mt-2 mb-2 text-red-600 ml-3">Tech</h1>
                        <FaInfinity />
                    </div>
                    <hr className="mb-1 line" />
                    <hr className="line" />
                    <div className="relative h-80 flex items-end mt-3 mb-5 bg-cover bg-center" style={{ backgroundImage: `url(${tech[lenT-1].news_image})` }} >
                        <h1 className="text-xl text-yellow-50 font-semibold z-10">{tech[lenT-1].news_title}</h1>
                    </div>
                    {
                        tech.slice(-4).map((item,index)=><div className="flex mb-2 ml-2" key={index}>
                            <h1 className="text-xl font-semibold mr-2">{index +1}.</h1>
                            <h1 className="text-xl hover:text-red-600 font-semibold">{item.news_title}</h1>
                        </div>)
                    }
                    
                </div>
                <div>
                    <hr className="line"/>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-semibold mt-2 mb-2 text-red-600 ml-3">Ariculture</h1>
                        <FaInfinity />
                    </div>
                    <hr className="mb-1 line" />
                    <hr className="line" />
                    <div className="relative h-80 flex items-end mt-3 mb-5 bg-cover bg-center" style={{ backgroundImage: `url(${agriculture[lenA-1].news_image})` }}>
                        <h1 className="text-xl text-yellow-50 font-semibold z-10">{agriculture[lenA-1].news_title}</h1>
                    </div>
                    
                    {
                        agriculture.slice(-4).map((item,index)=><div className="flex mb-2 ml-2" key={index}>
                            <h1 className="text-xl font-semibold mr-2">{index +1}.</h1>
                            <h1 className="text-xl hover:text-red-600 font-semibold">{item.news_title}</h1>
                        </div>)
                    }
                </div> 
            </div>
        </div>
    );
};

export default Home;


  
  
  
 
  

  