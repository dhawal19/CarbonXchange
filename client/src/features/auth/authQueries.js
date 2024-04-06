import axios from 'axios';


export const loginUser = async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password}, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      {enabled: false,}
      );    
    if(response.status !== 200){
        const errorMessage = `An error has occured: ${response.status}`;
        throw new Error(errorMessage || 'Failed to login');
    }
    return  response.data;
    }
    catch (error) {
        throw new Error('Failed to login: ' + error.message);
    }
  };

export const registerUser = async ({name, email, password}) => {
   try {
        const response = await axios.post('http://localhost:3000/signup',{
            name, email, password
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        },
        {enabled: false,}
        );
        if(response.status === 201){
            return response.data;
        }
        if(response.status === 409){
            throw new Error('User already exists');
        }
        if(response.status === 400){
            throw new Error('Please enter all the details correctly');
        }
        if(response.status !== 200){
            const errorMessage = `An error has occured: ${response.status}`;
            throw new Error(errorMessage || 'Failed to register');
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
}

// export const  useGoogleLoginHook = () => {
//     const {signIn} = useGoogleLogin({
//         clientId: '832780997758-1o4mfj4lt1biihtbqpbbpj9a9kgh652q.apps.googleusercontent.com',
//         scope: 'profile email',
//         onSuccess: (res) => {
//             console.log('Login Success: currentUser:', res.profileObj);
//         },
//         onFailure: (res) => {
//             console.log('Login failed: res:', res);
//         },
//         onRequest: () => {
//             console.log('Login Requested');
//         },
//         // offlineAccess: true,
//     });
//     return {signIn};
// }