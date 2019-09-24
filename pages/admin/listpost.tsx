import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import Link from 'next/link'

import { spinnerService } from "../../services/spinner";
import LayoutAdmin from "../../components/layout-admin";

class ListPost extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            post: []
        };
    }
    delete = (id: any) => {
        confirmAlert({
            title: "Confirm to submit",
            message: "Are you sure to do this.",
            closeOnClickOutside: true,
            closeOnEscape: true,
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        axios.get(process.env.API_ENDPOINT + "api/posts/delete/" + id).then((response: any) => {
                            spinnerService.showLoading(true);
                            toast.success("Deleted Successfully");

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
    }
    render() {
        const columns = [{
            Cell: (row: any) => (<Link href={"/editpost/" + row.original._id}><a className="link small"></a>{row.original.heading}</Link>),
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
            Cell: (row: any) => (<div className="text-center"><i onClick={() => this.delete(row.original._id)} className="fa fa-trash clr-red" aria-hidden="true"></i></div>),
            Header: "Actions",
            width: 65,
        }];
        return (
            <LayoutAdmin>
                <div className="row">
                    <ToastContainer />
                    <div className="col-md-12 pt-4">
                        <ReactTable
                            data={this.state.post}
                            columns={columns}
                            defaultPageSize={10}
                            // filterable={true}
                            getTrProps={(state: any, rowinfo: any) => {
                                return {
                                    onClick: (e: any) => {
                                        // console.log(rowinfo);
                                    },
                                };
                            }}
                            onFetchData={(state, instance) => {
                                spinnerService.showLoading(true);
                                axios.get(process.env.API_ENDPOINT + "api/posts")
                                    .then((res: any) => {
                                        // this.setState({
                                        //     post: res.data,
                                        // });
                                        spinnerService.showLoading(false);
                                    }).catch((error: any) => {
                                        spinnerService.showLoading(false);
                                    });
                            }}
                        />
                    </div>
                </div>
            </LayoutAdmin>
        );
    }
}
export default ListPost;
