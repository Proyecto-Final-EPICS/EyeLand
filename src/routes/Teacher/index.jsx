import { Outlet } from "react-router-dom";
import Navbar from "../../components/Teacher/Navbar";
import useAuthStorage from '../../hooks/useAuthStorage';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Teacher() {
    const authStorage = useAuthStorage();
    const navigate = useNavigate();

    useEffect(() => {
        const token = authStorage.getAccessToken();
        if (!token) {
            navigate("/login");
        }
    }, [authStorage]);

    return (
        <div className="flex h-auto min-h-screen items-stretch">
            <Navbar />
            <div className="ml-[72px] w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default Teacher