import Link from 'next/link'
import { authService } from '../../services/auth';

const NavAdmin = () => {
    return (
        <div>
            <Link href="/admin/listpost"><a className="nav-link">List Post</a></Link>
            <Link href="/admin/addpost/[id]" as="/admin/addpost/0"><a className="nav-link">Add Post</a></Link>
            <Link href="/admin/imagelist"><a className="nav-link">Images List</a></Link>
            <Link href="/admin/category"><a className="nav-link">Category</a></Link>
            <a className="nav-link" href="" onClick={() => authService.logout()}>Log Out</a>
        </div>
    );
}
export default NavAdmin;
