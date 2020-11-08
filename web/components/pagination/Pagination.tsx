import React, { useState, useEffect } from "react";
import axios from "axios";
import server from "../../config";
import Link from "next/link";

const Pagination = (props) => {
    const [state, setState] = useState(1);
    useEffect(() => {
        axios.get(server + "api/posts/count").then((response: any) => {
            setState(Math.ceil(response.data / 10));
        }).catch((error: any) => {
            // console.log(error);
        });
    }, []);
    const createPageNumber = () => {
        const elementLi = [];
        for (let i = 1; i <= state; i++) {
            if (i === 1) {
                elementLi.push(
                    <li key={i} className="page-item">
                        <Link href="/" as={`/`}>
                            <a className={`page-link ${props.pageNumber == undefined ? "page-link-active" : ""}`}>{i}</a>
                        </Link>
                    </li>);
            } else {
                elementLi.push(
                    <li key={i} className="page-item">
                        <Link href="/page/[pagination]" as={`/page/${i}`}>
                            <a className={`page-link ${props.pageNumber == i ? "page-link-active" : ""}`}>{i}</a>
                        </Link>
                    </li>);
            }

        }
        return elementLi;
    };
    return (
        <div className="mb-5 mt-5">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {
                        createPageNumber()
                    }
                    <li className="page-item">
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
