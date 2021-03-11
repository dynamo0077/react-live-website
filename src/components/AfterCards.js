import React from "react";

const AfterCards = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div style={{marginLeft:'100px'}} class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-20 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left ml-20 ">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Over <span style={{color:'orange'}}>1000+</span> Person 
            </h1>
            <p class="mb-8 leading-relaxed">
                Many people use Payless,it is not only simple, but<br/> Payless is very trusted and structured. Evidenced by <br/>the lack of complaints from users
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AfterCards;
