import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../services/authService";
import { UserContext } from "../contexts/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });

  const { username, password, passwordConf } = formData;

  const handleChange = (event) => {
    setMessage("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      console.log(formData);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <section className="bg-neutral-200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up for an account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="passwordConf"
                    id="confirm"
                    placeholder="••••••••"
                    className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="bg-white border border-gray-300 text-gray-900 cursor-pointer rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  disabled={isFormInvalid()}
                  onClick={() => navigate('/')}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// <form onSubmit={handleSubmit}>
//   <div>
//     <label htmlFor='username'>Username:</label>
//     <input
//       type='text'
//       id='name'
//       value={username}
//       name='username'
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div>
//     <label htmlFor='password'>Password:</label>
//     <input
//       type='password'
//       id='password'
//       value={password}
//       name='password'
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div>
//     <label htmlFor='confirm'>Confirm Password:</label>
//     <input
//       type='password'
//       id='confirm'
//       value={passwordConf}
//       name='passwordConf'
//       onChange={handleChange}
//       required
//     />
//   </div>
//   <div>
//     <button disabled={isFormInvalid()}>Sign Up</button>
//     <button onClick={() => navigate('/')}>Cancel</button>
//   </div>
// </form>

export default SignUpForm;
