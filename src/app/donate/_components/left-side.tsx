"use client";

export const LeftSide = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="rounded shadow-xl p-10 w-fit mx-auto mt-10">
        <h1 className="text-green-500 font-bold text-3xl text-center">
          Make a Donation
        </h1>
        {/* <p className="w-2/3 text-center">
        Every donation no matter how big or small makes a significant difference
        to our course. Thank you for doing your part to help
      </p> */}
          <p className=" font-semibold mt-5">Full Name</p>
        <div className="md:flex">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:outline-none focus:border-green-500 mr-5 mt-5 w-full md:w-1/2"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:outline-none focus:border-green-500 mt-5 w-full md:w-1/2"
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div>
          <p className="my-3 font-semibold">Donation Amount</p>
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:outline-none focus:border-green-500 w-full"
            type="number"
            placeholder="Amount in ETB"
          />
        </div>

        <button className="bg-green-500 text-white px-10 py-2 w-full rounded font-semibold mt-5 hover:bg-transparent hover:text-green-500 border-2 border-green-500 mx-auto">
          Submit Donation
        </button>
      </div>
    </div>
  );
};
