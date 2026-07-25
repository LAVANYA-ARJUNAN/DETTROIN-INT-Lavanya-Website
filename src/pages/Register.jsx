const Register = () => {
  return (
    <div className="pt-32 min-h-screen flex justify-center items-center">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>


        <input
          className="w-full border p-3 mt-6 rounded"
          placeholder="Full Name"
        />


        <input
          className="w-full border p-3 mt-4 rounded"
          placeholder="Email"
        />


        <input
          className="w-full border p-3 mt-4 rounded"
          placeholder="Password"
          type="password"
        />


        <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded">
          Register
        </button>


      </div>

    </div>
  );
};

export default Register;