import { useState, useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/common/Footer";
import ReactLoading from "react-loading";
import useLogin from "../hooks/useLogin";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const VALIDATION = {
  username: (value) => !value && "El usuario es requerido",
  password: (value) => !value && "La contraseña es requerida",
};

function Login() {
  const [form, setForm] = useState(INITIAL_STATE);
  const { handleAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  const { loading, error, data, login } = useLogin();

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = form;
    const usernameError = VALIDATION.username(username);
    const passwordError = VALIDATION.password(password);
    if (usernameError) {
      handleAlert(usernameError, "error");
      return;
    }
    if (passwordError) {
      handleAlert(passwordError, "error");
      return;
    }
    await login({ username, password });
  };

  if (data && !error) {
    navigate("/teacher/home");
  }

  if (error) {
    handleAlert(error, "error");
  }


  return (
    <>
      <NavBar showTeacherButton={false} />
      <div className="flex h-auto w-auto flex-col items-center justify-center">
        <div className="relative w-fit">
          <img src="Logo.svg" className="absolute -top-48 -right-48 w-96" />
          <div className="card relative flex w-96 flex-col items-stretch justify-center">
            <h2 className="text-center">Iniciar sesión</h2>
            <form onSubmit={handleSubmit} className="my-5 w-full">
              <div className="w-full">
                <label htmlFor="username">Usuario</label>
                <input
                  type="username"
                  name="username"
                  id="login-teacher-form-username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="login-teacher-form-password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="button mt-5 w-full bg-primary text-white"
                type="submit"
              >
                {loading ? (
                  <ReactLoading
                    type="spin"
                    color="white"
                    height={20}
                    width={20}
                  />
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
