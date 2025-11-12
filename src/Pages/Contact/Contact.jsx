import React from "react";
import ContactCards from "./ContactComponents/ContactCards";
import ContactForm from "./ContactComponents/ContactForm";

const Contact = () => {
  return (
    <section className="container max-w-[1600px] mx-auto my-10">
      <div className="mx-[62.5px] px-3 gap-6 font-poppins text-accent text-[14px] py-2.5">
        {/* Contact Cards */}
        <ContactCards/>
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
