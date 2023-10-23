export const RightSide = ()=>{
      return (
        <div className="md:h-screen flex flex-col justify-center items-center">
          <div className="w-fit  p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-500 text-center">Moga Charity Association</h2>
            <p className="text-gray-700 mb-4 text-center font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              justo nec nunc commodo hendrerit. Duis vel ligula eu mauris maximus
              fringilla.
            </p>
            <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/nMPfFZ1Ynjk"
                title="Video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      );
}