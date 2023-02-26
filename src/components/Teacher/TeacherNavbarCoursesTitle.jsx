import React from "react";

function TeacherNavbarCRUDTitle({ textColor, title }) {
    const lineClass = "w-10 border-" + textColor.split("-")[1];

    return (
        <div className="flex items-center justify-center gap-5 py-3">
            <hr className={lineClass} />
            <h2 className={"text-xl " + textColor}>{title}</h2>
            <hr className={lineClass} />
        </div>
    );
}

export default TeacherNavbarCRUDTitle;
