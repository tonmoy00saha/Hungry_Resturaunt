
const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='text-center space-y-4 mx-auto md:w-3/12'>
        <p className='text-[#D99904] text-xl italic capitalize'>{heading}</p>
        <hr />
        <h3 className='text-3xl'>{subheading}</h3>
        <hr />
    </div>
    );
};

export default SectionTitle;