import { useState } from "react";
import { Button, TextInput } from ".";

export default function Form({setList, list}) {

    const [form, setForm] = useState({name: '', tel: ''})

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if(form.name === "" || form.tel === ""){
            alert('lütfen gerekli alanları doldurunuz.');
            return false;
        }

        setList([form, ...list]);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <TextInput placeholder="Full Name" name="name" onChange={onChangeInput} />
            <TextInput placeholder="Phone Number" name="tel" onChange={onChangeInput} />
            <Button />
        </form>
    )
}
