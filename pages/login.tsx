import React from "react";
import { spinnerService } from "../services/spinner";
import { authService } from "../services/auth";
import useForm from "../components/form/useForm";

const Login = (props) => {
    const formData = {
        values: {
            email: "",
            password: ""
        },
        validations: {
            email: {
                required: { flag: true, message: "Email is required" }
            },
            password: {
                required: { flag: true, message: "Password is required" }
            },
        }
    };
    const submit = async () => {
        if (formValid) {
            spinnerService.showLoading(true);
            authService.login(inputs.values, props);
        }
    };
    const clear = () => {
        clearForm();
    };
    const { inputs, handleChange, handleSubmit, clearForm, formValid, isDirty } = useForm(submit, formData);
    return (
        <div className="container min-vh-100" style={{ paddingBottom: "30px" }}>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={inputs.values ? inputs.values.email : ""} onChange={handleChange} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <span className="text-danger">{inputs.errors ? inputs.errors.email : ""}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={inputs.values ? inputs.values.password : ""} onChange={handleChange} name="password" id="password" placeholder="Password" />
                    <span className="text-danger">{inputs.errors ? inputs.errors.password : ""}</span>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <button type="button" className="ml-2 btn btn-primary" onClick={clear}>Clear</button>
            </form>
        </div>
    );
};
export default Login;
