import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" container mx-auto w-fit">
            <div className="text-3xl mt-80">
                <p className="text-center text-6xl font-semibold">No Rout found !</p>
                <button className="bg-gray-600 text-white p-5 rounded-2xl hover:bg-slate-400"><Link to='/'>Go to Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;