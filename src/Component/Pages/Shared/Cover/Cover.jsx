import './Cover.css'

const Cover = ({ img, title, description }) => {
    return (
     
        <div style={{ backgroundImage: `url(${img})` }} className='p-28 bg-cover'>
        <div className=' text-white bg-[#151515] bg-opacity-70 text-center px-40 py-24 space-y-4'>
        <h1 className="mb-5 text-7xl font-bold uppercase cinzel">{title}</h1>
            <p className=" uppercase cinzel">{description}</p>
        </div>
    </div>
    );
};

export default Cover;