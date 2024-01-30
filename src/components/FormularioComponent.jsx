import { useState } from "react"

export const FormularioComponent = () => {

const [formState, setFormState] = useState({
    userName:'Jose',
    email:'enrique@gmail.com',
    password:'12345678'
})

const {userName,email,password}=formState

const onInputChange=(event)=>{
    console.log(event)
}

    return (
        <form>
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
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div class="mb-3">
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
