import Router from 'next/router'

const withAuth = BaseComponent => () => {
    const token = localStorage.getItem("token");
    debugger
    if (token) {
        return (
            <BaseComponent />
        );
    } else {
        Router.push('/admin/listpost')
    }

};

export default withAuth;