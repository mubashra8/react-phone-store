import React from "react";

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 ext-capatiliza text-center">
            <div className=" col-10  col-lg-2">
                <img src={img}
                    style={{ width: "5rem", height: "5rem" }}
                    className=" img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10  col-lg-2" style={{ fontSize: "20px" }}>
                <strong><span className="d-log-none" >Product: </span>
                    {title}</strong>
            </div>
            <div className="col-10  col-lg-2">
                <strong> <span className="d-log-none">Price: $ </span>
                    {price}</strong>
            </div>

            <div className="col-10  col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1"
                            onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                            +
                        </span>

                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-10   col-lg-2">
                <div className="cart-icon"  onClick={()=> removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10   col-lg-2">
                <strong> item total : $ {total} </strong>
            </div>
        </div>
    )
}