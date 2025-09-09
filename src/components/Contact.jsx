import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_jdx7cps",
        "template_xo6ccnk",
        {
          from_name: form.name,
          to_name: "Nikolai",
          from_email: form.email,
          to_email: "nikolaifredriksen5@gmail.com",
          message: form.message,
        },
        "4q7Xr_359niDpzzuJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:!mt-1 !flex xl:!flex-row !flex-col-reverse !gap-10 !overflow-hidden !mb-15">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="!flex-[0.75] !bg-tertiary !p-8 !rounded-2xl"
      >
        <p className="!text-secondary !text-[14px] !uppercase !tracking-wider">
          La oss sette i gang!
        </p>
        <h3 className="!text-white !font-black !text-[60px] !leading-tight">
          Kontakt.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="!mt-12 !flex !flex-col !gap-8"
        >
          <label className="!flex !flex-col">
            <span className="!text-white !font-medium !mb-4">Ditt navn</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Hva heter du?"
              className="!bg-[#F6F0E9] !py-4 !px-6 placeholder:!text-font-black-100 !text-black-100 !rounded-lg !outline-none !border-none !font-medium"
            />
          </label>
          <label className="!flex !flex-col">
            <span className="!text-white !font-medium !mb-4">Din e-post</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Hva er e-postadressen din?"
              className="!bg-[#F6F0E9] !py-4 !px-6 placeholder:!text-font-black-100 !text-black-100 !rounded-lg !outline-none !border-none !font-medium"
            />
          </label>
          <label className="!flex !flex-col">
            <span className="!text-white !font-medium !mb-4">Din melding</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hva vil du snakke eller spørre om?"
              className="!bg-[#F6F0E9] !py-4 !px-6 placeholder:!text-font-black-100  !text-black-100 !rounded-lg !outline-none !border-none !font-medium"
            />
          </label>

          <button
            type="submit"
            className="!bg-secondary !py-3 !px-8 !rounded-xl !outline-none !w-fit !text-black-100 !font-bold !shadow-md"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:!flex-1 xl:!h-auto md:!h-[550px] !h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
