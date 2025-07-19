import TitleHeading from "../components/shared/landing_page/title_heading";
import Preview from "../components/shared/landing_page/preview";
import Profile from "../assets/_imgs/02751f5c-cc00-44f7-a83b-09d9f1669fa3-removebg-preview.png"

export default function Landing_page() {
    return (
        <div className="relative flex bg-slate-900 w-[90%] rounded-4xl h-[86vh] mt-5 px-25 py-10 overflow-hidden" id="top">
            <TitleHeading />
            <img src={Profile} alt="" className="absolute h-200 left-0"/>
            <Preview />
        </div>
    );
}
