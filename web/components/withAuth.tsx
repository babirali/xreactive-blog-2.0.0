import Router from 'next/router'
import { useEffect, useState } from 'react';

const withAuth = BaseComponent => (props) => {
    const [token, setToken] = useState(undefined);
    useEffect(() => {
        setToken(localStorage.getItem("token"));
        const t = localStorage.getItem("token");
        if (localStorage.getItem("token") === null) {
            Router.push('/login');
        }
    }, [])

    return (
        token !== undefined ? <BaseComponent /> : ''
    )
};

export default withAuth;