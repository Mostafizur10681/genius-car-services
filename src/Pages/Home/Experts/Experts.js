import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Leo Messi', img: expert1 },
    { id: 2, name: 'Cristiano Ronaldo', img: expert2 },
    { id: 3, name: 'Neymar Jr', img: expert3 },
    { id: 4, name: 'Mbappe', img: expert4 },
    { id: 5, name: 'Leowandoski', img: expert5 },
    { id: 6, name: 'Holand', img: expert6 },
]
const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h1 className='services-title mt-3 mb-2 text-danger'>Our Experts</h1>
            <hr style={{ width: '20%', margin: '0  auto' }} className='mb-4' />
            <div className='services-container'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;