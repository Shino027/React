import { listsp } from "./data";
import { Link } from "react-router-dom";
function SanPhamNhieuLoai(props) {
    let jsxcode = 
    <div id="spxn">
        {listsp.slice(0,props.sotin).map((sp,i) =>
        <div className="sp" key={i}> 
            <Link to={ "/sp/" + sp.id_sp}> {sp['ten_sp']}</Link> 
        </div>
        )}
        </div>
    return (jsxcode);
}
export default SanPhamNhieuLoai;