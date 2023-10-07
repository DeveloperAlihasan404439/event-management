import { Link } from "react-router-dom";
import { BsGoogle,BsGithub } from 'react-icons/bs';
import { useContext, useState } from "react";
import { AuthContext } from "../../CreateContext/CreateContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const [errorDatas, setErrorDatas] = useState('')
    const {loginUser,googleUser,githubUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
  const hendelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
    .then(result => {
        const userInfo = result.user
        console.log(userInfo);
    })
    .cetch(error =>{
        const errorMessage = error.message;
      setErrorDatas(errorMessage);
    })
  };
  const hendelGoogleLogin = ()=>{
    googleUser(googleProvider)
    .then(resutl => {
        const userInfo = resutl.user;
        console.log(userInfo);
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const hendelGithubLogin = ()=>{
    githubUser(githubProvider)
    .then(resutl => {
        const userInfo = resutl.user;
        console.log(userInfo);
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className="w-11/12 mx-auto pt-20 pb-10">
      <div className="w-full p-5 ">
        <form
          onSubmit={hendelLogin}
          className="lg:w-[600px] mx-auto border-2 shadow-2xl rounded-lg p-5 border-[#2B2E33]"
        >
          <h1 className="text-xl md:text-3xl font-medium text-white text-center">
            Please Login
          </h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl text-orange-500">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered text-white bg-[#2b2e3328] border-2"
              // required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl text-orange-500">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered text-white bg-[#2b2e3328] border-2 w-full"
              // required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          {
            errorDatas?<p className="text-xl text-red-500 pt-4">{errorDatas}</p>
            :<p className="text-xl text-red-500 pt-4">Success login </p>
          }
          <input
            type="submit"
            className="w-full py-2 text-xl mt-7 text-black bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg"
            value="Login"
          />
          <div className="flex w-full pt-4 text-white">
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
              <div onClick={hendelGoogleLogin} className="flex gap-3 text-black items-center">
                <BsGoogle/>
                <h1 className="text-xl font-medium">Login</h1>
              </div>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
            <div onClick={hendelGithubLogin} className="flex gap-3 text-black items-center">
                <BsGithub/>
                <h1 className="text-xl font-medium">Login</h1>
              </div>
            </div>
          </div>
          <p className="text-xl text-white pt-5">
            New website vigit{" "}
            <Link to="/registor" className="text-orange-500 hover:underline">
              {" "}
              Please Registor
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
