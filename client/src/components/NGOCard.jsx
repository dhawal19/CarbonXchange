
const NGOCard = (ngo) => {
  return (
    <div className='  p-6 rounded-xl border-2 border-slate-100 h-auto bg-slate-800 flex flex-row items-center my-10'>
      <div className='m-2 flex-column w-auto'>
        <div className='text-slate-300'>
          <img src={ngo.props.image_url} alt="image" className="h-100px w-100px"/>
        </div>
        <div className="mb-4 p-2 flex flex-row items-center">
          <p className="text-sm font-semibold mb-1 text-slate-300">NGO: {ngo.props.name}</p>
        </div>
        <div className="mb-4 p-2 flex flex-row items-center">
          <p className="text-sm font-semibold mb-1 text-slate-300">Founder: {ngo.props.history.founder}</p>
        </div>
        <div className="mb-4 p-2 flex flex-row items-center">
          <p className="text-sm font-semibold mb-1 text-slate-300">Founded: {ngo.props.history.year}</p>
        </div>
      </div>
        <div className='flex-column w-[70%]'>
        <div className="mb-4 p-2 flex flex-row items-center justify-center">
          <p className="text-sm font-semibold mb-1 text-slate-300 ">Description: {ngo.props.description}</p>
        </div>
        <div className="mb-4 p-2 flex flex-row items-center justify-center">
          <a href={ngo.props.website_url} className="text-sm font-semibold mb-1 text-slate-300">Company Website</a>
        </div>
        <div className="mb-4 p-2 flex flex-row items-center justify-center">
          <p className="text-sm font-semibold mb-1 text-slate-300">Email: {ngo.props.email}</p>
        </div>
        <div className="mb-4 p-2 flex flex-row items-center justify-center">
          <p className="text-sm font-semibold mb-1 text-slate-300">Contact: {ngo.props.contact}</p>
        </div>
      </div>
    </div>

  )
}



export default NGOCard
