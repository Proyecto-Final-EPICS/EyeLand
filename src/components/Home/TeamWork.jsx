import { useState, useEffect } from "react";
import Power from "./Power";
import Title from "../common/Title";
import Description from "./Description";

function TeamWork() {
  const [counter, setCounter] = useState(0);

  const [classPower1, setClassPower1] = useState("scale-110");
  const [classPower1D, setClassPower1D] = useState("opacity-100");
  const [classPower2, setClassPower2] = useState("scale-100");
  const [classPower2D, setClassPower2D] = useState("opacity-0");
  const [classPower3, setClassPower3] = useState("scale-100");
  const [classPower3D, setClassPower3D] = useState("opacity-0");

  useEffect(() => {
    switch (counter) {
      case 0:
        setClassPower2("scale-100");
        setClassPower2D("opacity-0");
        setClassPower3("scale-100");
        setClassPower3D("opacity-0");
        break;
      case 1:
        setClassPower1("scale-100");
        setClassPower1D("opacity-0");
        setClassPower3("scale-100");
        setClassPower3D("opacity-0");
        break;
      case 2:
        setClassPower1("scale-100");
        setClassPower1D("opacity-0");
        setClassPower2("scale-100");
        setClassPower2D("opacity-0");
        break;
      default:
        break;
    }
  }, [counter]);

  return (
    <div className="mt-20 flex h-auto w-screen flex-col items-center justify-center bg-secondary px-5">
      <Title textColor="text-black" title="Trabajo en equipo" />
      <Description>
        Cada sesión se realiza en grupos de 1 - 3 personas en las que cada
        persona se le asignará un rol con una habilidad útil para la realización
        de la TASK.
      </Description>
      <div className="mt-16 flex justify-center gap-10 pb-44 md:gap-20 md:pb-56 xl:gap-40">
        <Power
          title="Super hearing"
          img={"Power1.svg"}
          description="Tu poder es el de poder escuchar como se pronuncian las palabras que aparecen en las preguntas."
          setClassPowerD={setClassPower1D}
          setCounter={setCounter}
          classPowerD={classPower1D}
          classPower={classPower1}
          setClassPower={setClassPower1}
          index={0}
        />
        <Power
          title="Memory pro"
          img={"Power2.svg"}
          description="Tu poder es el de poder ver la traducción de la palabra clave en la pregunta."
          setClassPowerD={setClassPower2D}
          setCounter={setCounter}
          classPowerD={classPower2D}
          classPower={classPower2}
          setClassPower={setClassPower2}
          index={1}
        />
        <Power
          title="Super radar"
          img={"Power3.svg"}
          description="Tu poder es el de poder reconocer ubicar y escuchar las palabras que aparecen en las preguntas."
          setClassPowerD={setClassPower3D}
          setCounter={setCounter}
          classPowerD={classPower3D}
          classPower={classPower3}
          setClassPower={setClassPower3}
          index={2}
        />
      </div>
    </div>
  );
}

export default TeamWork;
