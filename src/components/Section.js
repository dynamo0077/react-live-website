import Reacr from 'react'

const Section = () => {
    return(
        <div><section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-6xl text-3xl mb-4 px-20 font-medium text-gray-900">The next generation
              <br class="hidden lg:inline-block"/>payment method
            </h1>
            <p class=" px-48 py-2 mb-8 leading-relaxed">Accept payments easily and globally.The one<br/> single integration platform that you control in<br/> your new life.</p>
            <div class="flex justify-center px-56">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Watch Demo</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1572274407649-6cb883740677?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          </div>
        </div>
      </section></div>
    )
}

export default Section;