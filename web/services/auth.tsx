
import Router from "next/router";

import { toast } from "react-toastify";
import { spinnerService } from "./spinner";
import axios from "axios";
import server from "../config";

// const isloggedin = new Subject<boolean>();
// const isloggedin = false;

export const authService = {
    checkAuth: () => {
        const token = localStorage.getItem("token");
        if (token != null) {
            authService.isAuthenticated = true;
        } else {
            authService.isAuthenticated = false;
        }
    },
    isAuthenticated: false,
    login: (user: any, props: any) => {
        const userData = {
            user,
        };
        axios.post(server + "api/users/login", userData).then((response: any) => {
            localStorage.setItem("token", response.data.user.token);
            authService.isAuthenticated = true;
            spinnerService.showLoading(false);
            // props.history.push("/listpost");
            Router.push("/admin/listpost");
        }).catch((error: any) => {
            toast.error("Error");
            spinnerService.showLoading(false);
            // console.log(error);
        });
    },
    logout: () => {
        localStorage.removeItem("token");
        authService.isAuthenticated = false;
    },
    // getLoggedUser: () => isloggedin.asObservable(),

};
