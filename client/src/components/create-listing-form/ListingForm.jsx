import React from 'react';
import { CREATE_LISTING } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';


export const ListingForm = () => {
  const [ createListing ] = useMutation(CREATE_LISTING);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("this works!!");
    const mutationResult = await createListing({
      variables: {
        title:  document.getElementById('title').value,
        description:  document.getElementById('description').value,
        price:  document.getElementById('price').value,
        color:  document.getElementById('color').value,
        condition:  document.getElementById('condition').value,
        size:  document.getElementById('size').value,
      }
    });
    console.log(mutationResult);
    return (
        <div>
            <h3>Your new listing has been created! You may return to the homepage now.</h3>
                <Link to="/">
                    <button>Return to Home</button>
                </Link>
        </div>
    )
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create a listing</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Create your new listing below!
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
            </div>
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-semibold leading-6 text-gray-900">
              Size
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="size"
                id="size"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="price" className="block text-sm font-semibold leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="condition" className="block text-sm font-semibold leading-6 text-gray-900">
              Condition
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="condition"
                id="condition"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="color" className="block text-sm font-semibold leading-6 text-gray-900">
              Color
            </label>
            <div className="mt-2.5">
              <textarea
                type="text"
                name="color"
                id="color"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <textarea
                name="description"
                id="description"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleFormSubmit}
          >
            Upload my listing
          </button>
        </div>
      </form>
    </div>
  )
}
