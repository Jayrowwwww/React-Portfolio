

export default function title_heading() {

    return (
        <div className="flex flex-col items-center text-stone-100 z-1">
            <span className="text-2xl font-light">Hello I'm</span>
            <p className="text-6xl font-bold font-[Montserrat] mt-2">JERREH ROMER SALERA</p>
            <p className="text-2xl text-blue-500 font-[Oswald] mt-2">BSIT STUDENT</p>
            
            <p className="font-[Montserrat] text-lg text-center mt-7 px-50">I’m a passionate web developer skilled in crafting modern, responsive interfaces using <b className="text-blue-500">Figma, React, and Tailwind CSS</b>. From concept design to front-end implementation, I bring ideas to life with clean code and user-focused design. Explore my work and see how I blend creativity with functionality.</p>

            <a href="#3" className="flex gap-2">
                <button className="mt-4 px-10 py-2 bg-blue-500 text-white text-xl font-[Oswald] rounded-full cursor-pointer">Contact Me</button>
            </a>
        </div>
    );
}