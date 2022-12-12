import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

export function ContactForm() {
    const emailRegex = /(\w+\.?|-?\w+?)+@\w+\.?-?\w+?(\.\w{2,3})+/;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const isValidEmail = () => {
        console.log(emailRegex.test(email))
        return emailRegex.test(email) || email.length === 0
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Ім\'я: ' + name + '\nEmail: ' + email + '\nТема: ' + subject + '\nПовідомлення: ' + message)
        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div><TextField value={name} id="name" placeholder="Ім'я" variant="filled" sx={{ m: 1, width: 350 }} onChange={(e) => setName(e.target.value)} /></div>
            <div><TextField value={email} id="Email" placeholder="E-mail*" variant="filled" sx={{ m: 1, width: 350 }} required
                onChange={(e) => setEmail(e.target.value)}
                error={!isValidEmail()}
                helperText={!isValidEmail() ? "Неправильний E-mail" : ""} /></div>
            <div><TextField value={subject} id="subject" placeholder="Тема*" variant="filled" sx={{ m: 1, width: 350 }} required onChange={(e) => setSubject(e.target.value)}/></div>
            <div><TextField value={message}  id="message" placeholder="Повідомлення" variant="filled" sx={{ m: 1, width: 350 }} multiline rows={6} onChange={(e) => setMessage(e.target.value)}/></div>
            <div><Button type="submit" variant="contained" disabled={!isValidEmail()}>Відправити</Button></div>
        </form>
    )
}