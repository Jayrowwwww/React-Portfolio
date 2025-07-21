

export default function Footer() {

    return(

        <footer className="relative bg-slate-900 h-[40vh] w-full flex flex-col justify-between items-center">
            <div className="flex flex-col gap-20 items-center w-full h-[90%] mt-10">
                <p className="text-gray-200 text-2xl font-[Oswald]">Follow me on social media!</p>

                <div className="flex items-center gap-20 text-gray-200 text-[30px]">
                    <div className="flex flex-col items-center gap-1">
                        <a href="https://www.facebook.com/jayrowwwww/"><i class="fa-brands fa-facebook hover:text-blue-500"></i></a>
                        <span className="text-sm">@ Jerreh Romer Salera</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram hover:text-[#ee2a7b]"></i></a>
                        <span className="text-sm">@ Jayrowwwww</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-square-x-twitter hover:text-gray-600"></i></a>
                        <span className="text-sm">@ Jayrowwwww</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <a href="https://github.com/Jayrowwwww"><i class="fa-brands fa-square-github hover:text-gray-600"></i></a>
                        <span className="text-sm">@ Jayrowwwww</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 text-center w-full bg-slate-800 text-white py-4">
                <p>© 2023 Jerreh Romer Salera Personal Portfolio. All rights reserved.</p>
            </div>
        </footer>
    )
}