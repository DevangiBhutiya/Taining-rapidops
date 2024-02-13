export default function Error() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xxl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-4xl text-gray-900 font-bold md:text-xxxl">
              404-Not Found
            </h2>
            {/* <button     
              type="submit"
              className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
            >
              Login
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
