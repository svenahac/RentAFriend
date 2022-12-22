import "../assets/Home.css";

export default function Home() {
  return (
    <div
      id="Home"
      className="m-0 flex flex-col min-h-screen justify-center items-center"
    >
      <h1 className="text-4xl font-bold mb-10">Rent a Friend</h1>
      <div className="rounded-xl w-85 h-100 bg-white flex flex-col justify-center items-center ">
        <div className="relative z-0 mb-6 w-72">
          <input
            type="text"
            name="username"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="usernmae"
            className="peer-focus:font-medium absolute left-0 text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="relative z-0 mb-6 w-72">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-900 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute left-0 text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="w-36 h-10 mb-2">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-primary focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2"
          >
            Login
          </button>
        </div>
        <div>
          <p className="text-primary text-sm">
            Haven't created an account yet?
          </p>
          <button className="text-primary font-bold">Register</button>
        </div>
      </div>
    </div>
  );
}
