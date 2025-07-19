import web1 from '../../../assets/_imgs/Desktop - 1.svg';
import web2 from '../../../assets/_imgs/Real Estate web Design.png';
import web3 from '../../../assets/_imgs/Landing Page.png';

export default function preview(){

    return(
        <div className='absolute flex flex-col justify-between w-240 h-100 right-30 bottom-10 overflow-hidden'>
            <span className='text-gray-100 text-2xl font-[Montserrat] font-light'>PROJECTS</span>

            <div className='flex gap-4 mt-2'>
                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    <img src={web2} alt="" className='' />
                </div>

                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    <img src={web3} alt="" className='' />
                </div>

                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    <img src={web1} alt="" className='' />
                </div>
            </div>
        </div>

       
    )
}