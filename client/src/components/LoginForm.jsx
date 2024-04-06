// import { FaGoogle, FaGithub } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authQueries';
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setToken } from '../features/auth/authSlice';
import { registerUser } from '../features/auth/authQueries';
import { useState } from 'react';
import { useMutation } from "react-query";
import { setType,selectType } from "../features/auth/loginFormSlice";
import { useQueryClient } from "react-query";


// Handle login and register


const LoginForm = () => {
  const dispatch = useDispatch();  
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const formType = useSelector(selectType);
  // dispatch(setType('login'));
  // console.log(formType)
  // // const [closeButtonClicked, setCloseButtonClicked] = useState(false);
  // const queryClient = useQueryClient();

  

  const loginMutation = useMutation(loginUser,
    {
      onSuccess: (data) => {
        console.log(data);
        dispatch(setUser(data.foundUser));
        dispatch(setToken(data.accessToken));
        // queryClient.invalidateQueries('login');
        navigate('/home');
      },
      onError: (error) => {

        console.log(error.message);
      }
    }
  );
  const handleLogin = async (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  const registerMutation = useMutation(registerUser,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('register');
        dispatch(setType('login'));
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  const handleRegister = async (e) => {
    e.preventDefault();
    registerMutation.mutate({ name, email, password});
  };
  return (
    
      <div className="bg-black shadow-md rounded-xl pt-6 pb-8 flex h-auto w-8/12 border-2 border-white">
     
        <div className="flex flex-start justify-center w-6/12">

          {/*Form Container*/}
          <div className='flex-col w-7/12'>
            <h1 className="text-center text-3xl font-bold mb-4 text-white">{formType.charAt(0).toUpperCase() + formType.slice(1)}</h1>
            <p className="text-center text-white text-s mb-4">
              {formType == 'login' ? 'Welcome back! Sign in to your account' : ' Welcome! Sign up to create an account'}
            </p>
            <form action='' onSubmit={formType == 'login' ?handleLogin : handleRegister}>
              {formType == 'register' && (<div className="mb-4 text-l mt-8 text-start">
                <input
                  className="shadow appearance-none border rounded-3xl w-full ps-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                </div>)}
              <div className="mb-4 text-l mt-8 text-start">
                <input
                  className="shadow appearance-none border rounded-3xl w-full ps-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 mt-4 text-l">
                <input
                  className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{ formType == 'login' ? 
                (loginMutation.isError && (<p className="text-sm text-red-700">
                  Login failed! Please check your credentials and try again.
                </p>)) :
                (registerMutation.isError && (<p className="text-sm text-red-700">
                Registration failed! {registerMutation.error.message === 'Request failed with status code 409' ? 'User already exists' : 'Please enter all the details correctly'}
              </p>))
                }
                <a>
                  <p className="text-right text-sm text-teal-600 hover:text-blue-600">
                    Forgot Password?
                  </p>
                </a>
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-green-700 text-white py-2 px-3 rounded-3xl w-full focus:outline-none hover:scale-105 duration-300  focus:shadow-outline"
                  type="submit"
                > { formType == 'login' ?
                  (loginMutation.isLoading ? 'Logging in...' : 'Login') :
                  (registerMutation.isLoading ? 'Registering...' : 'Register')
                }
                </button>
              </div>
            </form>
            {/*Social Media Login*/}
            {/* <div className="flex items-center mt-4 mb-4">
              <div className="w-full border-t border-blue-700"></div>
              <div className="px-3">
                <span className="text-white">OR</span>
              </div>
              <div className="w-full border-t border-blue-700"></div>
            </div> */}
            {/* <div className="flex flex-col justify-center">
              <button
                className="flex items-center justify-center bg-blue-500 hover:bg-green-700 text-white py-2 px-3 rounded-3xl mr-3 mb-3 w-full focus:outline-none hover:scale-105 duration-300 focus:shadow-outline"
                type="button"
              >
                <FaGoogle className='w-4 h-4 mr-2' />
                Login with Google
              </button>
              <button
                className="flex items-center justify-center bg-blue-500 hover:bg-green-700 text-white py-2 px-3 rounded-3xl w-full focus:outline-none focus:shadow-outline hover:scale-105 duration-300"
                type="button"
              >
                <FaGithub className='w-4 h-4 mr-2' />
                Login with Github
              </button>
            </div> */}
          </div>

        </div>
        {/*Vertical line*/}
        <div className=' border-2 border-white border-opacity-30 w-0.5 rotate-180'></div>
        {/*Image Container*/}
        <div className='flex flex-col w-5/12 ml-6'>
          {/*Image*/}
          <div className="flex justify-center mt-6">
            <h3 className="text-white text-md my-6 "> {formType == 'login'? 'New to our website?' : 'Already have an account?'}</h3>
          </div>
          <div className="flex justify-center">
            <button onClick={() => formType == 'login'? dispatch(setType('register')) : dispatch(setType('login'))}
              className='flex justify-center bg-blue-500 hover:bg-green-700 text-white py-2 px-3 rounded-3xl w-8/12 focus:outline-none focus:shadow-outline hover:scale-105 duration-300'>
              {formType == 'login' ? 'Register': 'Login '}
            </button>
          </div>
        </div>
      </div>
  )
};


export default LoginForm;