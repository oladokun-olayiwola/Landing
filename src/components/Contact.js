import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="m-20">
      <div className="ml-8 flex">
        <h2 className=" text-2xl md:text-4xl font-semibold pr-5 border-r-2">
          Get in touch
        </h2>
        <h4 className="text-xl p-4 ">
          If you have any questions, just fill in the contact form, and we will
          answer you shortly.
        </h4>
      </div>
      <div className="ml-8 w-11/12 lg:flex">
        <input
          type="text"
          placeholder="Your name"
          className="h-16 text-slate-900 bg-gray-300 my-8 ml-0 md:my-8 m-8 md:ml-0 text-xl block min-w-1/4 lg:flex border-2 border-gray-300 p-4 focus:outline-0 "
        />
        <input
          type="email"
          placeholder="E-mail"
          className="h-16 text-slate-900 bg-gray-300 m-8 ml-0 md:ml-0 text-xl md:my-8 min-w-1/4 block lg:flex border-2 my-8 border-gray-300 p-4 focus:outline-0 "
        />
        <input
          type="text"
          placeholder="Phone"
          className="h-16 text-slate-900 bg-gray-300 m-8 ml-0 md:ml-0 text-xl block md:my-8 lg:flex min-w-1/4 border-2 my-8 border-gray-300 p-4 focus:outline-0 "
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="w-4/5 border-2 ml-8 text-slate-900 bg-gray-300 text-xl border-gray-300 p-4 focus:outline-0"
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          className="bg-blue-400 w-48 h-14 font-semibold ml-8 text-md text-white uppercase font-roboto mt-8 transition-colors duration-700 ease-in hover:bg-black active:color:blue"
        >
          Send message
        </button>
      </div>
    </div>
  );
}

export default Contact
