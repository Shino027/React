import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { listloai,listsp } from './data';

function SPTrongLoai(){
    let {id_loai} = useParams();
    let list_sp = listsp.filter( sp => sp.id_loai === id_loai)
    let loai = listloai.find( loai => loai.id_loai === id_loai);
    return ( 
        <div id='listsp' >
            <h1> Page Show Product In Category {loai['ten_loai']} </h1>
            {list_sp.map((sp, index )=>
            <div id='data'>
                <h4><Link to={"/sp" + sp.id_sp}>{sp['ten_sp']}</Link></h4>
                <img src={sp['hinh']} alt= {sp['ten_sp']} />
            </div>
            )}
        </div>
    )
}
export default SPTrongLoai; 