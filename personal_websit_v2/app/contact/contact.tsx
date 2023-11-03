"use client"
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
export default function Contact() {
    const [name, setName] = useState("");
    const [missingName, setMissingName] = useState(false);
    const [missingNameText, setMissingNameText] = useState(false);

    const [email, setEmail] = useState("");
    const [missingEmail, setMissingEmail] = useState(false);
    const [missingEmailText, setMissingEmailText] = useState(false);

    const [messages, setMessages] = useState("");
    const [missingMessages, setMissingMessages] = useState(false);
    const [missingMessagesText, setMissingMessagesText] = useState(false)

    const [messageAlert, setMessageAlert] = useState(false)



    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (name && email && messages) {
            emailjs.send(
                "service_p8nq2il",
                "template_4klxjmh",
                {
                    from_name: name,
                    to_name: 'Jonathan',
                    form_email: email,
                    to_email: 'jtmacoco.jobs@gmail.com',
                    message: messages
                },
                "qjMyh4PRr4cIefjVq"
            ).then(() => {
                setMissingName(false)
                setMissingNameText(false)

                setMissingEmail(false)
                setMissingEmailText(false)

                setMissingMessages(false)
                setMissingMessagesText(false)

                setEmail("");
                setName("");
                setMessages("");
                setMessageAlert(true);
            }, (error: string) => {
                console.log(error);
                alert("somethign went wrong");
            }
            )
        }
        else if (name && !email && !messages) {
            setMissingName(false)
            setMissingNameText(false)

            setMissingEmail(true)
            setMissingEmailText(true)

            setMissingMessages(true)
            setMissingMessagesText(true)
        }
        else if (!name && email && !messages) {
            setMissingName(true)
            setMissingNameText(true)

            setMissingEmail(false)
            setMissingEmailText(false)

            setMissingMessages(true)
            setMissingMessagesText(true)
        }
        else if (!name && !email && messages) {
            setMissingName(true)
            setMissingNameText(true)

            setMissingEmail(true)
            setMissingEmailText(true)

            setMissingMessages(false)
            setMissingMessagesText(false)
        }
        else if (!name && email && messages) {
            setMissingName(true)
            setMissingNameText(true)

            setMissingEmail(false)
            setMissingEmailText(false)

            setMissingMessages(false)
            setMissingMessagesText(false)
        }
        else if (name && !email && messages) {
            setMissingName(false)
            setMissingNameText(false)

            setMissingEmail(true)
            setMissingEmailText(true)

            setMissingMessages(false)
            setMissingMessagesText(false)
        }
        else if (name && email && !messages) {
            setMissingName(false)
            setMissingNameText(false)

            setMissingEmail(false)
            setMissingEmailText(false)

            setMissingMessages(true)
            setMissingMessagesText(true)
        }
        else {
            setMissingName(true)
            setMissingNameText(true)

            setMissingEmail(true)
            setMissingEmailText(true)

            setMissingMessages(true)
            setMissingMessagesText(true)
        }
    }
    return (
        <main>
            <h1 className="relative pl-4 sm:pl-10 top-20 sm:top-24 sm:text-4xl">
                Contact
                <div className="bg-white h-[4px] w-full" />
            </h1>
        </main>
    )
}