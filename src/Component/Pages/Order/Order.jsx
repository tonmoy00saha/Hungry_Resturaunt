import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react'; 
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            });
    }, []);
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Hungry | Order Food</title>
            </Helmet>
            <Cover
                img={orderCover}
                title="Order food"
                description="Would you like to try a dish?"
            ></Cover>


           <div className='mt-12'>
            {
                 <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                 <div className='text-center text-2xl font-medium'>
                     <TabList>
                         <Tab>SALADS</Tab>
                         <Tab>PIZZAS</Tab>
                         <Tab>SOUPS</Tab>
                         <Tab>DESSERTS</Tab>
                         <Tab>DRINKS</Tab>
                     </TabList>
                 </div>
 
                 <div className='mt-12'>
                 <TabPanel>
                     <OrderTab items={salad}></OrderTab>
 
                 </TabPanel>
                 <TabPanel>
                 <OrderTab items={pizza}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                 <OrderTab items={soup}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                 <OrderTab items={dessert}></OrderTab>
                 </TabPanel>
                 <TabPanel>
                 <OrderTab items={drinks}></OrderTab>
                 </TabPanel>
                 </div>
 
             </Tabs>
            }
           </div>
            

        </div>
    );
};

export default Order;