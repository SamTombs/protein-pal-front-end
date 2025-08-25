import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signIn } from "../services/authService";
import { UserContext } from "../contexts/UserContext";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setMessage("");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const signedInUser = await signIn(formData);
      setUser(signedInUser);
      navigate("/");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main>
      <section className="bg-neutral-200">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p>{message}</p>
          <div className="w-full bg-black rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
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
                    id="username"
                    className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleChange}
                    required=""
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
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="bg-white border border-gray-300 text-gray-900 cursor-pointer rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onClick={() => navigate('/')}
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInForm;

// <main>
//   <h1>Sign In</h1>
//   <p>{message}</p>
//   <form autoComplete='off' onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor='email'>Username:</label>
//       <input
//         type='text'
//         autoComplete='off'
//         id='username'
//         value={formData.username}
//         name='username'
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <label htmlFor='password'>Password:</label>
//       <input
//         type='password'
//         autoComplete='off'
//         id='password'
//         value={formData.password}
//         name='password'
//         onChange={handleChange}
//         required
//       />
//     </div>
//     <div>
//       <button>Sign In</button>
//       <button onClick={() => navigate('/')}>Cancel</button>
//     </div>
//   </form>
// </main>
