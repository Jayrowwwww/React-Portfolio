import Left_Hero from '../components/shared/about/left_hero';
import Right_Hero from '../components/shared/about/right_hero';

export default function about() {

    return(

        <div className="flex justify-between h-screen py-10 px-30" id='1'>
            <Left_Hero />
            <Right_Hero />
        </div>
    )
}