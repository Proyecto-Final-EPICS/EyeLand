import React from "react";

function TeacherNavbarButton({ title, background, img, onClick = null }) {
    return (
        <button
            className={
                "grop group relative flex h-12 w-12 items-center rounded-lg shadow-lg hover:shadow-none " +
                background
            }
            onClick={onClick}
        >
            <img src={img} className="mx-auto h-7 w-7" />
            <div className="absolute ml-[70px] flex scale-0 items-center rounded-md bg-gray-800 px-5 py-2 opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100">
                <div className="absolute -left-1 h-2 w-2 rotate-45 rounded-sm bg-gray-800"></div>
                <p className="text-sm font-bold text-white">{title}</p>
            </div>
        </button>
    );
}

export default TeacherNavbarButton;
