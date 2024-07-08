import React from 'react';
import { listloai } from './data';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    render() { return (
        <ul>
            <li><Link to={"/"}>Home</Link></li>
        {listloai.map((loai,i) =>
        <li key={i}><Link to={"/loai/"+ loai.loai_id}>{loai.ten_loai}</Link></li>
        )
    }
    <li>
        <Link to={"/gioithieu"}>Introduce</Link>
    </li>
        </ul>)
}
};
export default Menu;