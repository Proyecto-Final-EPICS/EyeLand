import React from "react";
import { Link } from "react-router-dom";

function AdminNavbarCRUDTable({ title, link }) {
  return (
    <Link
      className="flex h-10 items-center rounded-lg px-3 text-white hover:bg-white hover:bg-opacity-30"
      to={link}
    >
      <img src="Table.svg" alt="" className="mr-2" />
      {title}
    </Link>
  );
}

export default AdminNavbarCRUDTable;
