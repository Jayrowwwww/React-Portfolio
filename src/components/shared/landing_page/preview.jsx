import web1 from '../../../assets/_imgs/Desktop - 1.svg';
import web2 from '../../../assets/_imgs/Real Estate web Design.png';
import web3 from '../../../assets/_imgs/Landing Page.png';

export default function preview(){

    return(
        <div className='flex flex-col justify-between w-240 h-100 ml-150 overflow-hidden font-[Montserrat]'>

            <div className='flex justify-between items-center'>
                <span className='text-gray-100 text-2xl font-light'>PROJECTS</span>
                <div>
                    <a href="#2" className='text-gray-100 text-lg cursor-pointer underline'>See all</a>
                    <i class="fa-solid fa-angle-right text-gray-200 font-light"></i>
                </div>
            </div>

            <div className='flex gap-4 mt-2'>
                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    <img src={web2} alt="Project"/>
                </div>

                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    <img src={web3} alt="Project"/>
                </div>

                <div className='bg-gray-100 rounded-2xl overflow-hidden'>
                    <img src={web1} alt="Project"/>
                </div>
            </div>
        </div>

       
    )
}