import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../CreateContext/CreateContext";

const Registor = () => {
  const [errorData, setErrorData] = useState('')
  const {createUer} = useContext(AuthContext)
  const hendelRegistor = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    setErrorData('')
    /* if (password.length < 6) {
      return setErrorData("Password must be 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      return setErrorData("Password must be one uppercase");
    }
    if (!/[@#$%^&+=!]/.test(password)) {
      return setErrorData("Password must be special symbol");
    } */
    createUer(email, password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrorData(errorMessage);
    });
  };
  return (
    <div className="w-11/12 mx-auto pt-20 pb-10">
      <div className="w-full p-5 ">
        <form
          onSubmit={hendelRegistor}
          className="lg:w-[600px] mx-auto border-2 shadow-2xl rounded-lg p-5 border-[#2B2E33]"
        >
          <h1 className="text-xl md:text-3xl font-medium text-white text-center">Registor Youre Account</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-2xl text-orange-500">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="text"
              className="input input-bordered w-full text-white bg-[#2b2e3328] border-2"
              // required
            />
          </div>
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
                Photo Url
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
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
            </div>
          {
            errorData? <p className="text-xl text-red-600
            ">{errorData}</p>:''
          }
          <input
            type="submit"
            className="w-full py-2 text-xl mt-7 text-black bg-gradient-to-r from-orange-500 to-orange-300 rounded-lg"
            value="Registor"
          />
          <p className="text-xl text-white pt-5">Already have an account <Link to="/login" className="text-orange-500 hover:underline"> Please Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Registor;
