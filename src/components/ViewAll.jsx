import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/><br></br>
        <h5 align="center"><u>PRODUCT DETAILS</u></h5><br></br>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                                    (value,index)=>{   
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                        <img src={value.image}></img>
                                        <div class="card-body">
                                        <h5 class="card-title">PRODUCT ID:{value.productid}</h5>
                                          <h5 class="card-title">PRICE:{value.price}</h5>
                                          <h5 class="card-title">CATEGORY:{value.category}</h5>
                                          
                                        </div>
                                      </div>
                                      </div>

                                    }
                                )
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewAll