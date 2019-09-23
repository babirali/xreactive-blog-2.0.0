import NavAdmin from "./nav-admin/NavAdmin";

const LayoutAdmin = (props) => {
    return (
        <div className="row min-vh-100">
            <div className="sidenav col-2">
                <NavAdmin />
            </div>
            <div className="main col-10">
                {props.children}
            </div>
        </div>
    );
}

export default LayoutAdmin;