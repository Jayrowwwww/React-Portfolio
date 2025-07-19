import logo from '../../assets/_imgs/JRS Logo with Bright Orange Impact.png';

export default function Header() {

    return (
        <header className="flex justify-evenly items-center w-full">
            <a href="#top"><img src={logo} alt="" className='h-20 rounded-2xl' /></a>

            <nav className="flex justify-between w-[20%] font-[Oswald] text-2xl font-medium">
                <a href="#1">ABOUT</a>
                <a href="#2">PROJECTS</a>
                <a href="#3">GET IN TOUCH</a>
            </nav>
        </header>
    );
}