
import Nav from './Nav';
import netZero from '../../public/net-zero-img.jpg';
import carbon from '../../public/carbon-credits.jpeg';
const Home = () => {
  return (
    <>
    <Nav/>
    <div className='text-white justify-center flex'>
        <div className='w-[80%]'>
            <div className='flex flex-col min-h-[85vh] justify-between lg:flex-row items-center'>
                <div>
                    <h1 className='text-8xl font-semibold bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95% bg-clip-text text-transparent p-4 pl-0'>Trade <span className='hover:underline'>Carbon Credits</span> In An Instant</h1>
                    <p className='text-xl font-light'>Want to reduce your carbon footprint?</p>

                </div>
                <img src={netZero} alt="" className='max-w-[40%] p-4'/>
            </div>
            <div className='flex flex-row min-h-[85vh] items-center justify-between'>
                <div className='flex flex-col max-w-[40%] align-center'>
                    <img className="" src={carbon} alt="Carbon Trading" />
                </div>
                <div className='flex flex-col max-w-[50%] py-5'>
                    <div className='flex justify-center'>
                        <h1 className='text-7xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95%'>About Us</h1>
                    </div>
                    <br/>
                    <h1 className='text-xl font-light text-center'>We are a one stop solution for Carbon Offsetting</h1>
                    <br/>
                    <h1 className='text-xl font-light text-center'>Carbon offsetting is a carbon trading mechanism that allows entities such as businesses to compensate for their greenhouse gas emissions through projects that remove these emissions.</h1><br/>
                    <h1 className='text-xl font-light text-center'>Say No To Pollution</h1>
                </div>
            </div>
            <div className='flex flex-row min-h-[85vh] items-center justify-between'>
                <div className='flex flex-col max-w-[40%] align-center w-[40%]'>
                    <h1 className='text-7xl font-bold tracking-wide'>Join The</h1>
                    <h1 className='text-7xl tracking-wide font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-200 from-0% via-yellow-100 via-50% to-green-200 to-95%'>Movement</h1>
                    <div className='flex flex-row gap-4'>
                        <img src = "phone.svg" alt="phone" className='w-10 my-10'/>
                        <div className='flex flex-col w-100 my-10'>
                            <h1>Call Us</h1>
                            <h1>Phone +919999999999</h1>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <img src = "mail.svg" alt="mail" className='w-10 my-10'/>
                        <div className='flex flex-col w-100 my-10'>
                            <h1>Mail Us</h1>
                            <h1>Carbonxchange@gmail.com</h1>
                        </div>
                    </div>
                </div>
                <form className='flex flex-col justify-center w-[60%]'>
                    <div className='flex flex-row justify-between'>
                        <input type="text" placeholder='Enter Your Name*' className='mx-5 p-3 rounded-lg min-w-[45%] my-10 text-white bg-slate-800 placeholder-white' required/>
                        <input type="text" placeholder='Enter Organisation Name' className='mx-5 p-3 rounded-lg min-w-[45%] my-10 text-white bg-slate-800 placeholder-white' required/>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <input type="text" placeholder='Enter Your Email' className='mx-5 p-3 rounded-lg min-w-[45%] mb-10 text-white bg-slate-800 placeholder-white' />
                        <input type="text" placeholder='Enter Phone Number' className='mx-5 p-3 rounded-lg min-w-[45%] mb-10 text-white bg-slate-800 placeholder-white' />
                    </div>
                    <div className='flex flex-row'>
                        <textarea placeholder='Message' className='mx-5 p-3 rounded-lg min-w-[96%] min-h-[100px] mb-10 text-white bg-slate-800 placeholder-white' required/>
                    </div>
                    <div className='flex justify-center'>
                        <button className='pointer px-6 py-3 bg-slate-800 text-white rounded-lg'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home;