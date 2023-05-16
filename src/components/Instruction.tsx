import {useState} from "react";
import '../index.css'


const Instruction = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <div className="burger" onClick={() => setOpen(prevState => !prevState)}>
                <div className={"line" + (open ? " open" : "")}/>
                <div className={"line" + (open ? " open" : "")}/>
            </div>
            <div className={"layout" + (open ? " blackout" : "")}/>
            <div className={"menu" + (open ? " open" : "")}>
                <h4>Как это работает?</h4>
                <p>
                    Вы загружаете результаты вавешго обследования а мы выдаем вам всегда плохой результат!!
                </p>
            </div>
        </>
    )
}

export default Instruction