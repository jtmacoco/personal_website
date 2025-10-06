"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "../globals.css";

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();
    const [messageAlert, setMessageAlert] = useState(false);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            console.error("EmailJS env vars missing!");
            return;
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                from_name: data.name,
                form_email: data.email,
                message: data.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(() => {
            reset();
            setMessageAlert(true);
        }).catch((error) => {
            console.log(error);
            alert("Something went wrong");
        });
    };

    return (
        <main>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: messageAlert ? 1 : 0 }}
                className="flex items-center justify-center"
            >
                <div className="w-52 z-50 absolute top-20 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 rounded-md flex flex-col">
                    <p className="font-bold">Message sent</p>
                    <p className="text-sm pb-10">Thanks! I will get back to you asap.</p>
                    <div className="absolute bottom-0 right-2">
                        <button type="button" onClick={() => setMessageAlert(false)} className="px-2 text-blue-700">
                            <span className="text-sm">Close</span>
                        </button>
                    </div>
                </div>
            </motion.div>

            <h1 className="relative pl-4 sm:pl-10 top-20 sm:top-24 sm:text-4xl">
                Contact
                <div className="bg-white h-[4px] w-full" />
            </h1>

            <form
                className="container flex relative top-28 mx-auto items-center justify-center flex-col gap-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label className="block text-sm text-white">Your Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className={`w-80 sm:w-96 h-12 pl-2 rounded-xl text-white bg-transparent placeholder:text-[20px] border border-slate-500
              ${errors.name ? "placeholder-red-500" : "placeholder-grey"}`}
                        placeholder={errors.name ? errors.name.message : "your name"}
                    />
                </div>

                <div>
                    <label className="block text-sm text-white">Your Email</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        className={`w-80 sm:w-96 h-12 pl-2 rounded-xl text-white bg-transparent placeholder:text-[20px] border border-slate-500
              ${errors.email ? "placeholder-red-500" : "placeholder-grey"}`}
                        placeholder={errors.email ? errors.email.message : "your email"}
                    />
                </div>

                <div>
                    <label className="block text-sm text-white">Your Message</label>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        className={`h-40 sm:h-48 w-80 sm:w-[700px] pl-2 text-white bg-transparent border border-slate-500 rounded-xl
              ${errors.message ? "placeholder-red-500" : "placeholder-grey"}`}
                        placeholder={errors.message ? errors.message.message : "your message"}
                    />
                </div>

                <button
                    type="submit"
                    className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        Send
                    </span>
                </button>
            </form>
        </main>
    );
}
