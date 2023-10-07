import { Link } from "react-router-dom";

const Login = () => {
    const hendelLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
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
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
          </div>
          <input
            type="submit"
            className="w-full py-2 text-xl mt-7 text-black bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg"
            value="Registor"
          />
          <p className="text-xl text-white pt-5">
            New website vigit{" "}
            <Link className="text-orange-500 hover:underline">
              {" "}
              Please Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
