import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
    },[])
    return (
        <div className={{mt:3}}>
            <h2 style={{fontWeight:'800', color:'black'}}>Our cars</h2>
            <div className="row">
                {
                    items.map((item) => <Item
                        key={item.id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
        </div>
    );
};

export default Items;


const items = [
    {
        id: 1,
        name: 'Dodge Durango',
        description: 'Mid-size SUV (1998–2003; 2011–present) Full-size SUV (2004–2009) Crossover SUV (2011–present).Front engine, rear-wheel drive / Four-wheel drive',
        price: 3000,
        img: 'https://i.ibb.co/VwFkKCb/car-1.jpg'
    },
    {
        id: 2,
        name: 'Dodge Avenger',
        description: 'The Dodge Avenger is a front-wheel drive, mid-sized sedan that was marketed by Dodge. The Avenger made its North American debut in 1994 as a two-door coupe that was produced until 2000. The model name was reintroduced to the market as a four-door sports sedan starting in 2007.',
        price: 4000,
        img: 'https://i.ibb.co/F4LYfyC/car-2.jpg'
    },
    {
        id: 3,
        name: 'Dodge Caliber',
        description: 'The Dodge Caliber is a front-engine, front-wheel drive five-door compact hatchback manufactured and marketed by Chryslers Dodge division from model years 2007 to 2012, replacing the Dodge Neon and Chrysler PT Cruiser.',
        price: 5000,
        img: 'https://i.ibb.co/RHqyXMg/car-3.jpg'
    },
    {
        id: 4,
        name: 'Dodge Caravan',
        description: 'The Dodge Caravan (and the long-wheelbase Dodge Grand Caravan) is a series of minivans that was manufactured by Chrysler from the 1984 to 2020 model years.Produced for five generations across 36 model years, Dodge Caravan is the second longest-lived Dodge nameplate (exceeded only by the Dodge Charger).',
        price: 6000,
        img: 'https://i.ibb.co/XsM4RbR/car-5.jpg'
    },
    {
        id: 5,
        name: 'Dodge Dart',
        description: 'The Dodge Dart is a front-engine, front-wheel drive, four-door compact sedan that was manufactured and marketed by FCA US LLC, a subsidiary of Fiat Chrysler Automobiles. The automobile made its debut at the 2012 North American International Auto Show in Detroit, Michigan.',
        price: 6500,
        img: 'https://i.ibb.co/YZPqYhh/car-4.jpg'
    },
    {
        id: 6,
        name: 'Dodge Dakota',
        description: 'Mid-size pickup truck. Layout. Front engine, rear-wheel drive / four-wheel drive. The Dodge Dakota, known as the Ram Dakota for the final two years of production, is a mid-size pickup truck from Chryslers Ram (formerly Dodge Truck) division.',
        price: 3000,
        img: 'https://i.ibb.co/LSPd4jR/car-6.jpg'
    },
    {
        id: 7,
        name: 'Dodge Charger',
        description: 'Like a bat out of hell, the ominously powerful Dodge Charger is a statement of speed and performance. Boasting a spine-chilling 797 horsepower with the HEMI® SRT Hellcat V8 engine, the fastest mass-produced sedan 4 is an achievement we are proud to deliver',
        price: 23000,
        img: 'https://i.ibb.co/CKcJvcj/car-7.jpg'
    },
    {
        id: 8,
        name: 'Dodge Nitro',
        description: 'The Dodge Nitro is a compact SUV that was produced by Dodge from the 2007 to the 2012 model year to compete with the likes of the Ford Escape and Hyundai Tucson. The Nitro shared its platform with the second-generation Jeep Liberty.',
        price: 22000,
        img: 'https://i.ibb.co/W0XPsk7/car-8.jpg'
    },
    {
        id: 9,
        name: 'Dodge Journey',
        description: 'Mid-size crossover SUV,Front-engine, front-wheel drive or four-wheel drive,Chrysler JC platform.',
        price: 18000,
        img: 'https://i.ibb.co/TTX9K71/car-9.jpg'
    },
    {
        id: 10,
        name: 'Dodge Viper',
        description: '2-door liftback coupe 2-door convertible,Longitudinally-mounted, Front mid-engine, rear-wheel drive.Viper V10: 8.0 L (488 cu in) 8.3 L (506 cu in) 8.4 L (512 cu in)',
        price: 65000,
        img: 'https://i.ibb.co/c3MqYYX/car-11.jpg'
    },
]