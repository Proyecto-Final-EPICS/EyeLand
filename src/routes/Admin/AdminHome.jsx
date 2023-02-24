import React, { useEffect, useState } from "react";
import Title from "../../components/common/Title";

function AdminHome() {
  const [date, setDate] = useState(new Date());

  // create a useEffect to update the date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex max-h-screen flex-col px-5 pb-5">
      <h2>Bienvenido, administrador</h2>
      <h3>
        {date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          ", " +
          date.getHours() +
          ":" +
          date.getMinutes() +
          ":" +
          date.getSeconds()}
      </h3>
      <div className="card mx-auto w-fit">
        <Title title={"Diagrama de base de datos"} textColor={"text-black"} />
        <img src="DataBaseDiagram.png" className="mx-auto -mt-16 h-5/6" />
      </div>
    </div>
  );
}

export default AdminHome;
