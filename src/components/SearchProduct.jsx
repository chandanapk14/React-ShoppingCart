import React from 'react'
import Navbar from './Navbar'

const SearchProduct = () => {
  return (
    <div>
        <Navbar/><br></br>
        <h5 align="center"><u>SEARCH PRODUCT</u></h5>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><label htmlFor="" className="form-label">PRODUCT ID</label></center>
                            <input type="text" className="form-control" />
                        </div>
                        <center><div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-danger">SEARCH</button>
                        </div></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct