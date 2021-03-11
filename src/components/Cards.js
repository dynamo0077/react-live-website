import React from "react";
import wallet from "../images/wallet.png" 

const Cards = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
              <div style={{marginLeft: '33%',paddingBottom: '10px',color: 'purple',fontSize: '20px',fontWeight:'500'}} className="flex justify-center px-56">
              <h4 >Feature</h4>
              </div>
            <div class="lg:w-1/1 w-full mb-6 lg:mb-0">
              <h1 style={{marginLeft: "43%"}} class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                So simple So fun
              <div class="h-1 w-60 bg-indigo-500 rounded"></div>

              </h1>
            </div>
          </div>
          <div style={{marginLeft:'15%'}} class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-purple-300 p-6 rounded-lg bg-blue">
                <img
                  class="h-50 rounded w-50 object-cover object-center mb-6"
                  style={{marginLeft: '50px'}}
                  src={wallet} 
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Easy Payment
                </h2>
                <p class="leading-relaxed text-base">
                  Customise your cashier, offer multiple payments or provide a unified shopping experience.Everything for your customers.
                </p>
              </div>
            </div>
            <div style={{marginLeft: '50px'}} class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-50 rounded w-50 object-cover object-center mb-6"
                  style={{marginLeft: '50px'}}
                  src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/mail_email_inbox_message-2-512.png"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  No credit check
                </h2>
                <p class="leading-relaxed text-base">
                  Higly secure encryption algorithms and hashed integrity checks to protect your data.
                </p>
              </div>
            </div>
            <div style={{marginLeft: '50px'}} class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-50 rounded w-50 object-cover object-center mb-6"
                  style={{marginLeft: '50px'}}
                  src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_13-512.png"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Many people use
                </h2>
                <p class="leading-relaxed text-base">
                  Start accepting your customers preferred payments methods and grow your buisness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
