import React from "react";
import Head from "next/head";

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
        <div>
            <Head>
                <title>XReactive-Tutorials on JavaScript, React, Angular and more</title>
                <meta name="description" content="Tutorials on JavaScript, React, Angular and more" />
            </Head>

            <div className="container pt-5 min-vh-100" style={{ paddingBottom: "30px" }}>
                <div className="row">
                    <div className="col-4 offset-4 login p-5">
                        <h2 className="text-center">Login</h2>
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
                </div>
            </div>
        </div>
    );
};
export default Login;
