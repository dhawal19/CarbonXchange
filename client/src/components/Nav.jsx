import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
const Nav = ()=>{
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setIsVisible(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
  }, [])
    const handleClick = () =>{
        setShowLoginForm(true);
    }
    return ( 
        <>
        {showLoginForm && (
            <div ref={formRef} className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                {isVisible && <LoginForm />}
            </div>
            )}
                <div className="flex justify-center">
                <div className=" w-[80%] p-4 text-white">
                    <ul className="list-none flex flex-row justify-between items-center">
                        <div className="">
                            <li className="text-4xl font-semibold p-2 text-transparent  bg-clip-text bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95%"><a href="/">CarbonXchange</a></li>
                        </div>    
                        <div className="flex flex-row items-center">
                            <li className="mx-10 3xl font-semibold p-2 "><Link to="/home">HOME</Link></li>
                            <li className="mx-10 3xl font-semibold p-2 "><Link to="/buy">Buy Credits</Link></li>
                            <li className="mx-10 3xl font-bold px-4 p-2 text-transparent  bg-clip-text bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95%">
                                <button onClick={handleClick}>
                                    GET STARTED
                                </button>
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Nav;