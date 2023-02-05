import React from "react";
import './ProductCategory.scss'

function ProductCategory() {
    return(
        <div className="app__category container">
            <div className="wrapper app__category-wrapper">
                <p className="head-text">Shop By Category</p>
                <div className="p-text">Shop All</div>
                <div className="category-container">

                </div>
            </div>
        </div>
    )
}

export default ProductCategory;