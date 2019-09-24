import NavAdmin from "./nav-admin/NavAdmin";

import "react-table/react-table.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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