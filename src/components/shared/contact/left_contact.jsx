

export default function left() {

    return(

        <div className="flex flex-col justify-between font-[Montserrat]">
            <h1 className="text-gray-400 text-4xl">- GET IN TOUCH</h1>
            <form action="POST">
                <div className="flex gap-5 mt-4">
                    <input type="text" className="border border-gray-300 rounded p-2" placeholder="Full Name" required />
                    <input type="email" className="border border-gray-300 rounded p-2" placeholder="Your Email Here" required />
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-gray-400 text-lg">Message</label>
                    <textarea className="border border-gray-300 rounded p-2" rows="6" placeholder="Type your Message in here" required></textarea>
                </div>

                <div className="flex items-center gap-2">
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Send</button>
                    <span>*Your message will be recieve immediately</span>
                </div>
            </form>
            <div></div>
        </div>
    )
}