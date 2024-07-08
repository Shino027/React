import React from 'react';
import { useParams } from 'react-router-dom';
import { listsp } from './data';

function ChiTiet(){
    let {id} = useParams();
    let sp = listsp[id];
    return ( 
        <div id='chitiet' ><h1> Name Product: {sp['ten_sp']}</h1>
            <div id='row1'>
                <div id='trai'>
                    <img src= {sp['hinh']} alt={sp['ten_sp']} />
                </div>
                <div id='phai'>
                    <h1 class="h3"> {sp['ten_sp']} </h1>
                    <p><span>Price</span>:{(sp['gia'])}VND</p>
                    <p><span>Sale</span>:{(sp['gia_km'])}VND</p>
                    <p><span>Date</span>:{(sp['ngay'])}</p>
                    <p><span>Ram</span>: {sp['RAM']}</p>
                </div>
                <div id='row2'>Related Products</div>
            </div>
            
        </div>
    )
}
export default ChiTiet;