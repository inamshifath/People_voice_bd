import { FaInfinity } from "react-icons/fa6";
import PropTypes from 'prop-types';
import '../National/National.css'

const PartOneHome = ({allnews}) => {
    const national = allnews.filter(item => item.news_catagory === 'national');
    const len =national.length;
    return (
        <div className="container mx-auto">
            <hr className="line"/>
            <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold mt-2 mb-2 text-green-900 ml-3">National</h1>
                <FaInfinity />
            </div>
            <hr className="mb-1 line" />
            <hr className="line" />
            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className=" col-span-2 flex gap-2">
                    {/* main news */}
                    <div className="space-y-3">
                        <h1 className="text-2xl hover:text-green-800 font-semibold">{national[len-1].news_title}</h1>
                        <h1>{national[len-1].news_details.slice(0,250)}<span className="text-xl font-semibold">. . .</span></h1>
                    </div>
                    <img className="w-[70%] h-[85%]" src={national[len-1].news_image} alt="" />
                </div>
                <div className="">
                    <hr className="vertical-hr absolute "></hr>
                    {/* side news */}
                    {
                       national.slice(-4).map((item,index)=><div className="flex mb-2 ml-2" key={index}>
                            <h1 className="text-xl hover:text-green-800 font-semibold">{item.news_title}</h1>
                            <img className="w-40 h-24" src={item.news_image} alt="" />
                        </div>)
                    }
                </div>
            </div>
            <hr className="line" />
            <div className="flex">
                {/* Under news */}
                {
                    national.slice(-4).map((item,index)=><div className=" mb-2 ml-2 space-y-3 mt-3" key={index}>
                        <h1 className="text-xl hover:text-green-800 font-semibold">{item.news_title}</h1>
                        <p>{item.news_details.slice(0,150)}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

PartOneHome.propTypes = {
    allnews: PropTypes.string.isRequired
};

export default PartOneHome;