import { useState,useEffect } from "react"
import { useForm } from "../hooks/useForm"
import { useRef } from "react"

export const FormularioComponent = () => {

    const focusRef = useRef()

    console.log(focusRef)

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const { formState, userName, email, password, onInputChange } = useForm(initialForm)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    useEffect(() => {
        focusRef.current.focus()        
    }, [])


    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="userName" className="form-label">User Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter name"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    ref={focusRef}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    )
}
