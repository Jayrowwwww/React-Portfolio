import Left from "../components/shared/contact/left_contact"
import Right from "../components/shared/contact/right_contact"

export default function contact(){

    return(

        <div className="flex justify-between w-[80%] h-[60vh] mt-10" id="3">
            <Left />
            <Right />
        </div>
    )
}