import React, { Component, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { spinnerService } from "../../services/spinner";
import useForm from "../../components/form/useForm";
import LayoutAdmin from "../../components/layout-admin";
import withAuth from "../../components/withAuth";

const Category = () => {
    const [categories, setCategories] = useState([]);
    console.log("rendered")

    useEffect(() => {
        getCategory();
    }, []);
    const formData = {
        values: {
            name: "",
        },
        validations: {
            name: {
                required: { flag: true, message: "Name is required" }
            },
        }
    };
    const save = () => {
        if (formValid) {
            spinnerService.showLoading(true);
            const data = inputs.values;
            axios.post(process.env.API_ENDPOINT + "api/category/save", data).then((response: any) => {
                toast.success("Saved Successfully");
                getCategory();
                spinnerService.showLoading(false);
            }).catch((error: any) => {
                toast.error("Error");
                // console.log(error);
            });
        }
    };
    const clear = () => {
        clearForm();
    };
    const { inputs, handleChange, handleSubmit, clearForm, formValid, isDirty } = useForm(save, formData);
    const getCategory = () => {
        spinnerService.showLoading(true);
        axios.get(process.env.API_ENDPOINT + "api/category").then((response: any) => {
            setCategories(response.data);
            spinnerService.showLoading(false);
        }).catch((error: any) => {
            // console.log(error);
        });
    };

    const deleteCategory = (id) => {
        spinnerService.showLoading(true);
        axios.get(process.env.API_ENDPOINT + "api/category/delete/" + id).then((response: any) => {
            getCategory();
            spinnerService.showLoading(false);
        }).catch((error: any) => {
            // console.log(error);
        });
    };
    return (
        <LayoutAdmin>
            <ToastContainer />
            <h1>Add Category</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" tabIndex={1} className="form-control" name="name" value={inputs.values ? inputs.values.name : ""} onChange={handleChange} id="name" aria-describedby="name" placeholder="Name" required />
                        <span className="text-danger">{inputs.errors ? inputs.errors.name : ""}</span>
                    </div>
                    <div className="col-md-12 pb-5">
                        <div className="pull-right pt-4">
                            <button type="submit" className="btn btn-primary mr-2">Save</button>
                            <button type="button" className="btn btn-primary mr-2" onClick={clear}>Clear</button>
                        </div>
                    </div>
                </div>
            </form>
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((c, i) =>
                        < tr key={i} >
                            <th>{c._id}</th>
                            <td>{c.name}</td>
                            <td><i className="fa fa-trash" onClick={() => deleteCategory(c._id)} /> <i className="fa fa-pencil" /></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </LayoutAdmin >
    );
};
export default withAuth(Category);
