import Lottie from "lottie-react";
import TeacherAnimation from "../../assets/teacher.json"

function TeacherHome() {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()


    return (
        <div className='m-5'>
            <h2>Bienvenido, profesor/a</h2>
            <p className='text-2xl mt-3'>{dd}/{mm}/{yyyy}</p>
            <div className="w-2/3 absolute -top-28 right-0">
                <Lottie animationData={TeacherAnimation} loop={true} />
            </div>
        </div>
    )
}

export default TeacherHome