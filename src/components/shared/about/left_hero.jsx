import Profile from '../../../assets/_imgs/profile.png';

export default function left_hero(){

    return(
        <div className='flex flex-col justify-between'>
            <span className="text-4xl font-[Montserrat] text-gray-400">- ABOUT ME</span>

            <img src={Profile} alt="" className='rounded-full h-90'/>
            <div></div>
        </div>

    )
}