import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import Link from "next/link";

import { spinnerService } from "../../services/spinner";
import LayoutAdmin from "../../components/layout-admin";
import withAuth from "../../components/withAuth";
import server from "../../config";

const ListPost = (props) => {
    const [state, setState] = useState();
    useEffect(() => {
        axios.get(server + "api/posts")
            .then((res: any) => {
                setState(res.data);
                spinnerService.showLoading(false);
            }).catch((error: any) => {
                spinnerService.showLoading(false);
            });
    }, []);

    const del = (id: any) => {
        confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this.",
            closeOnClickOutside: true,
            closeOnEscape: true,
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        axios.get(server + "api/posts/delete/" + id).then((response: any) => {
                            spinnerService.showLoading(true);
                            toast.success("Deleted Successfully");
                            axios.get(server + "api/posts")
                                .then((res: any) => {
                                    setState(res.data);
                                    spinnerService.showLoading(false);
                                }).catch((error: any) => {
                                    spinnerService.showLoading(false);
                                });

                        }).catch((error: any) => {
                            // console.log(error);
                            spinnerService.showLoading(false);
                        });
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                        alert("no");
                    },
                },
            ],
        });
    };
    const columns = [{
        Cell: (row: any) => (<Link href="/admin/addpost/[id]" as={"/admin/addpost/" + row.original._id}><a className="link small">{row.original.heading}</a></Link>),
        Header: "Heading",
        accessor: "heading",
    }, {
        Header: "Post By",
        accessor: "postBy",
        width: 100,
    }, {
        Header: "Date",
        accessor: "date",
        width: 100,
    }, {
        Cell: (row: any) => (<div className="text-center"><i onClick={() => del(row.original._id)} className="fa fa-trash clr-red" aria-hidden="true"></i></div>),
        Header: "Actions",
        width: 65,
    }];
    return (
        <LayoutAdmin>
            <div className="row">
                <ToastContainer />
                <div className="col-md-12 pt-4">
                    <ReactTable
                        data={state}
                        columns={columns}
                        defaultPageSize={10}
                        getTrProps={(state: any, rowinfo: any) => {
                            return {
                                onClick: (e: any) => {
                                    // console.log(rowinfo);
                                },
                            };
                        }}
                    />
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default withAuth(ListPost);
