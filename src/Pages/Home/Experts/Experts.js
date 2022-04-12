import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'john sina', img: expert1 },
    { id: 2, name: 'john sina', img: expert2 },
    { id: 3, name: 'john sina', img: expert3 },
    { id: 4, name: 'john sina', img: expert4 },
    { id: 5, name: 'john sina', img: expert5 },
    { id: 6, name: 'john sina', img: expert6 },
]
const Experts = () => {
    return (
        <div className='container px-4'>
            <h1 className='text-primay text-center mt-5'>Our Experts : {experts.length}</h1>
            <div className='row g-5'>
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