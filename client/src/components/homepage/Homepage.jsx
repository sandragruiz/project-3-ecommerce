import React from 'react';

export const Homepage = () => {

    return (
    
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover object-center"
              src="/path/to/image1.jpg"
              alt="1"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-white text-3xl font-bold">Subtitle 1</h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover object-center"
              src="/path/to/image2.jpg"
              alt="2"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-white text-3xl font-bold">Subtitle 2</h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover object-center"
              src="/path/to/image3.jpg"
              alt="3"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-white text-3xl font-bold">Subtitle 3</h3>
            </div>
          </div>

          {/* About Section */}
      <div className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            About Us
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec elit sit amet
            risus dignissim scelerisque. Fusce consequat urna sed elementum cursus.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Contact Us
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg text-gray-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send
            </button>
          </form>
          
        </div>
      </div>
    </div>
  </div>

      {/* Rest of the content */}
      {/* ... */}
    </div>
  );
}
