import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuthStorage from "../../hooks/useAuthStorage";
import TeacherNavbarButton from "./TeacherNavbarButton";

function Navbar() {
    const [classActive, setClassActive] = useState("");
    const [selected, setSelected] = useState(0);
    const authStorage = useAuthStorage();

    const handleLogout = () => {
        authStorage.removeAccessToken();
        window.location.reload();
    };

    const handleSelect = (index) => {
        setSelected(index);
        if (index === 0) {
            setClassActive("top-0");
        } else {
            setClassActive("top-[61px]");
        }
    };

    const location = useLocation();

    useEffect(() => {
        if (location.pathname.split("/")[2] === "home") {
            handleSelect(0);
        } else if (location.pathname.split("/")[2] === "courses") {
            handleSelect(1);
        }
    }, [location]);

    return (
        <div className="fixed z-10 flex h-screen flex-col items-stretch justify-between bg-terciary py-5 px-3 shadow-lateralNavbar">
            <div className="flex flex-col gap-3">
                <img src="Logo.svg" className="mx-auto w-10" />
                <div className="relative mt-5 flex flex-row">
                    <div
                        className={
                            "absolute -left-3 h-12 w-1 rounded-r-lg bg-white transition-all duration-300 ease-in-out " +
                            classActive
                        }
                    ></div>
                    <div className="flex flex-col gap-3">
                        <Link to={"home"}>
                            <TeacherNavbarButton
                                background={"bg-primary"}
                                img={"Home.svg"}
                                title={"Home"}
                            />
                        </Link>
                        <Link to={"courses"}>
                            <TeacherNavbarButton
                                background={"bg-primary"}
                                img={"courses.svg"}
                                title={"Cursos"}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <TeacherNavbarButton
                background={"bg-red-600"}
                onClick={handleLogout}
                img={"Logout.svg"}
                title={"Cerrar sesión"}
            />
        </div>
    );
}

export default Navbar;
