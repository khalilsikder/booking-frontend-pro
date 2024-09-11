import { Form } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container flex justify-around mt-6">
      <div className="w-1/2">
        <h2 className="text-2xl mb-2">Information</h2>
        <p className="mb-2">
          If want to know about ours.please flow our rules want to know about
          ours.
          <br />
          please flow our rules If want to know about ours.please flow our
          rules.
        </p>
        <div className="flex gap-2 mb-2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-[#003B95]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </p>
          <p>Email : jawhad@gmail.com</p>
        </div>
        <div className="flex gap-2 mb-2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-[#003B95]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </p>
          <p>Phone : +8801725468974</p>
        </div>
        <div className="flex gap-2 mb-2">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-[#003B95]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </p>
          <p> Address : 254,south paikpara,Mirpur,Dhaka</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Contact form</h2>
        <Form className="mt-2">
          <p className="mb-2">
            Name : <input type="text" name="name" placeholder="name" />
          </p>
          <p className="mb-2">
            Email : <input type="text" name="email" placeholder="email" />
          </p>
          <p className="mb-2">
            Subject : <input type="text" name="subject" placeholder="subject" />
          </p>
          <p className="mb-2">
            Message : <input type="text" name="message" placeholder="message" />
          </p>
        </Form>
        <button className="bg-[#003B95] text-white rounded-md p-2">
          send message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
