import { Link, useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
  console.log(error);
  return (
    <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
      <div className="flex flex-col justify-center items-center my-10">
        <h3 className="text-3xl font-bold text-orange-500">Go Back To Home</h3>

        <div className="text-2xl font-bold text-orange-500 mt-2">
          {error.statusText || error.message}
        </div>

        <div className="text-2xl font-bold">
          {error.status === 404 && (
            <div className="relative">
            <img
              src="https://assets.materialup.com/uploads/c0d66e33-944f-40a1-b7a7-a45387c2ba47/preview.jpg"
              alt=""
              className="rounded-lg h-[70vh]"
            />
            <div className="absolute bottom-[22%] left-[20%] md:left-[40%] flex flex-col justify-center items-center mt-4 ">
              <Link to="/">
                <button className=" px-12 py-3 font-medium text-xl bg-gradient-to-r from-orange-500 to-orange-300 rounded-b-lg  rounded-lg text-white">
                  Go To Home
                </button>
              </Link>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Error;