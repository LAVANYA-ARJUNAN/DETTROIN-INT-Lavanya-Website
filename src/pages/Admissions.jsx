const Admissions = () => {
  return (
    <div className="pt-32 pb-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-blue-700 font-semibold">
          ADMISSIONS
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Begin Your Child's Learning Journey
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Our admission process is designed to welcome students
          into a supportive and inspiring learning environment.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">
              Step 1
            </h3>
            <p className="mt-3 text-gray-600">
              Submit admission enquiry.
            </p>
          </div>


          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">
              Step 2
            </h3>
            <p className="mt-3 text-gray-600">
              Attend interaction session.
            </p>
          </div>


          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">
              Step 3
            </h3>
            <p className="mt-3 text-gray-600">
              Complete admission process.
            </p>
          </div>

        </div>


      </div>

    </div>
  );
};

export default Admissions;