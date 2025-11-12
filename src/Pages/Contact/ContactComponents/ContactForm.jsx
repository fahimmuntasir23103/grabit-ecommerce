import React from "react";

const ContactForm = () => {
  return (
    <div className="grid grid-cols-2 gap-6 pt-20">
      <div className="col-span-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.069240183691!2d90.40777097584304!3d23.780548587617265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70656402a31%3A0xc98d276e49087864!2sKaderia%20Tower!5e0!3m2!1sen!2sbd!4v1762917574654!5m2!1sen!2sbd"
          className="w-full h-full"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col w-full gap-[30px] col-span-1">
        <input className="py-2.5 px-[15px] outline-none border border-[#eee] rounded-[5px]"  type="text" placeholder="Full Name" />
        <input className="py-2.5 px-[15px] outline-none border border-[#eee] rounded-[5px]" type="text" placeholder="Email" />
        <input className="py-2.5 px-[15px] outline-none border border-[#eee] rounded-[5px]"  type="text" placeholder="Phone" />
        <textarea
         className="py-2.5 px-[15px] outline-none border border-[#eee] rounded-[5px]" 
          name=""
          id=""
          rows="3"
          placeholder="Message"
        ></textarea>
        <button className="bg-primary text-white py-2.5 px-[15px] rounded-[5px] font-medium w-2/12">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
