import TeacherNavbarCoursesTitle from "./TeacherNavbarCoursesTitle";
import TeacherNavbarCoursesCourse from "./TeacherNavbarCoursesCourse";
import useCourses from "../../hooks/useCourses";
import { AlertContext } from "../../contexts/AlertContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavBarCourses() {
    const { loading, error, data, getCourses } = useCourses();
    const { handleAlert } = useContext(AlertContext);
    const navigate = useNavigate();

    useEffect(() => {
        getCourses();
    }, []);

    useEffect(() => {
        if (data) {
            if (data.length !== 0) {
                navigate("/teacher/courses/" + data[0].id);
            }
        }
    }, [data]);

    if (loading || !data) return <p className="m-5">Loading...</p>

    if (error) {
        handleAlert(error, "error");
        return <p className="m-5">Error</p>
    }

    return (
        <div className="relative animate-appear bg-primary px-5 shadow-lateralNavbar">
            <TeacherNavbarCoursesTitle textColor="text-white" title="Cursos" />
            <div>
                <div className="flex flex-col">
                    {data.map((course, index) => {
                        return (
                            <TeacherNavbarCoursesCourse
                                title={course.name}
                                link={course.id}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default NavBarCourses;
