import React from 'react';
import Image1 from '../../assets/checker-crop-mask.jpg';
import Image2 from '../../assets/zipper-black-skirt.jpg';
import Image3 from '../../assets/man-all-black-outfit.jpg';

export const Homepage = () => {

    return (
    
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Image 1 */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover object-center"
              src={Image1}
              alt="1"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-fang text-3xl font-bold">Wear.</h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover object-center"
              src={Image3}
              alt="2"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-fang text-3xl font-bold">Switch.</h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img
              className="w-full h-auto object-cover object-center"
              src={Image2}
              alt="3"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-fang text-3xl font-bold">Resurrect.</h3>
            </div>
          </div>

          {/* About Section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-midnight mb-8">
            About Us
          </h2>
          <p className="text-lg text-midnight mb-8">
          With online clothes shopping on the rise, many scramble to get what's fashionable and less expensive in search for new ways to express their style. 
          However, many of these options are often unethical and bad for the planet. Our mission is to bring new life into your closet without breaking the bank and
          making healthier choices for the planet! If your style leans more alternative and you want to find all sorts different 
          or discontinued pieces to buy, or want to free yourself from some of your own, Threads:Resurrected is for you.

          Swapping your closet while keeping your essence has never been this easy!

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
              className="bg-vamp text-fang px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
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
