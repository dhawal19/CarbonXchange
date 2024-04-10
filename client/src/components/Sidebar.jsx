import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { selectUser, setUser } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";
export const Sidebar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const naviagate = useNavigate();
    const user = useSelector(selectUser);
    const handleLogout = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post('http://localhost:3000/logout', {}, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
            );
            setIsLoading(false);
            if (response.status !== 200) {
                const errorMessage = `An error has occured: ${response.status}`;
                throw new Error(errorMessage || 'Failed to logout');
            }
            dispatch(setUser({}));
            naviagate('/');
        }
        catch (error) {
            throw new Error('Failed to logout: ' + error.message);
        }
    }
  return (
    <div className="bg-black p-4 w-1/5 h-full fixed flex-column top-0 left-0 overflow-y-auto border-white border-r">
             <div className="">
                <h2 className="text-2xl font-semibold p-2 text-transparent  bg-clip-text bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95%"><a href="/">CarbonXchange</a></h2>
            </div> 
            <div className='mb-4 p-2  mt-3 flex flex-row items-center justify-between'>
                <p className="text-lg font-semibold mb-1 text-slate-300">Name</p>
            </div>
            <div className="mb-4 p-2 mt-3 flex flex-row items-center justify-between">
                <p className="text-sm font-semibold mb-1 p-3 text-slate-300 w-[50%]">Credit Calculator</p>
                <img src="calculator.svg" className="h-8" alt="calculator"/>
            </div>
            <div className="mb-4 p-2 flex flex-row items-center justify-between">
                <p className="text-sm font-semibold mb-1 p-3 text-slate-300">Transaction History</p>
                <img src="history.svg" className="h-8" alt="history"/>
            </div>
            <div className="mb-4 p-2 flex flex-row items-center justify-between">
                <p className="text-sm font-semibold mb-1 p-3 text-slate-300">NGO Partners</p>
                <img src="partner.svg" alt="partner" className="h-8"/>
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 hover:bg-green-700 text-white py-2 px-3 rounded-3xl w-full focus:outline-none hover:scale-105 duration-300  focus:shadow-outline"
                    type="submit"
                    id="logout-button"
                    onClick={() => handleLogout()}
                >
                    {isLoading ? 'Logging out...' : 'Logout'}
                </button>
            </div>
        </div>
  )
}
