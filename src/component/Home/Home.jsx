import { useLoaderData } from "react-router-dom";
import InterNational from "../InterNational/InterNational";
import National from "../National/National";
import { useState } from "react";
import PropTypes from 'prop-types';

const TruncatedArticle = ({ details }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleExpand = () => {
      setIsExpanded(true);
    };
  
    const truncatedContent = details.split(' ').slice(0, 30).join(' ');
  
    return (
      <div>
        <p>{isExpanded ? details : truncatedContent}{!isExpanded && <span className="text-3xl text-blue-600 ml-2" onClick={handleExpand}>... </span>}</p>
        
      </div>
    );
};

TruncatedArticle.propTypes = {
    details: PropTypes.string.isRequired
};

const TruncatedArticlesmall = ({ details }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleExpand = () => {
      setIsExpanded(true);
    };
  
    const truncatedContent = details.split(' ').slice(0, 10).join(' ');
  
    return (
      <div>
        <p>{isExpanded ? details : truncatedContent}</p>
        {!isExpanded && <span className="text-3xl text-blue-600" onClick={handleExpand}>... </span>}
      </div>
    );
  };
  TruncatedArticlesmall.propTypes = {
    details: PropTypes.string.isRequired
};



const Home = () => {

    const allnews = useLoaderData();

    return (
        <div className="container mx-auto">
            <div className="flex gap-4">
                <div className="grid grid-cols-3 grid-rows-3 mt-5 gap-5">
                    <div className="row-span-2 col-span-2 space-y-3 ">
                        <img className="w-full" src={allnews[0].news_image} alt="" />
                        <h1 className="text-3xl font-semibold text-red-800">{allnews[0].news_title} </h1>
                        <TruncatedArticle details={allnews[0].news_details} ></TruncatedArticle>
                    </div>
                    <div className="row-span-2">
                        {[1, 2, 3].map((index) => (
                            <div className="flex mb-5" key={index}>
                                <div>
                                    <h1 className="text-xl font-semibold">{allnews[index].news_title}</h1>
                                    <TruncatedArticlesmall details={allnews[index].news_details} />
                                </div>
                                <img className="w-40 h-28" src={allnews[index].news_image} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-3 flex gap-2 ">
                        {[2,3,4].map((index)=>(
                            <div className="flex items-center gap-2" key={index}>
                            <img className="w-52 h-32" src={allnews[index].news_image} alt="" />
                            <h1 className="text-xl font-medium">{allnews[index].news_title}</h1>
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
            <National allnews={allnews}></National>
            <InterNational allnews={allnews}></InterNational>
        </div>
    );
};

export default Home;


  
  
  
 
  

  