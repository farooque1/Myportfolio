import React from 'react'

function Service() {
  return (
    <div>
      <h1 className='text-white text-center text-4xl font-extrabold py-7'>Service</h1>

      <div class="container">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">

          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Web Application Development</h3>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">User Interface (UI) Design</h3>
            </div>
          </div>
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Performance Optimization</h3>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Collaboration and Maintenance</h3>
            </div>
          </div>

          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Deployment and Hosting</h3>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          

        </div>
      </div>

    </div>
  )
}

export default Service