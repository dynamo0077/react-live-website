import React from "react";

const BeforeTestimonial = () => {
  return (
    <div>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-34 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-6xl text-3xl mb-8 px-40 font-medium text-gray-900">
              <h4 style={{paddingRight:'75%',paddingBottom: '10px',color: 'purple',fontSize: '20px',fontWeight:'400'}} >Feature</h4>
                Enjoy Now.
                <br class="hidden lg:inline-block" />
                Pay Later
              </h1>
              <div class="flex justify-center px-56">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-3 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Get Start
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default BeforeTestimonial;
