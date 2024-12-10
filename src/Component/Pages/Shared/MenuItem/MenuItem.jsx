
import './MenuItem.css'

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex gap-8">
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px]' src={image} alt=""/>
            <div className='flex'>
            <div>
                <h3 className="uppercase cinzel text-xl">{name}--------</h3>
                <p className='inter text-[#737373]'>{recipe}</p>
            </div>
            <p className='inter text-xl text-[#BB8506]'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;