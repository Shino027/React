import { Link } from "react-router-dom";
import { listsp } from "./data";


function Home() {return (
    <div className="home">
        {listsp.slice(0,6).map((sp,i)=>
        <div className="sp" key={i}>
            <h4> <Link to={ "/sp/" + sp.id_sp}> {sp['ten_sp']}</Link> </h4>
                <img src={sp['hinh']} alt= {sp['ten_sp']}/><br/>
               <span>{sp['gia']}$</span> <br/>
               <span>{sp['gia_km']}$</span> 
        </div>
)}
</div>
)}
export default Home;