import React from "react";
import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../features/categorySlice/categorySlice";
import './ProductCategory.scss'

function ProductCategory() {

    const { data, error, isLoading } = useGetAllCategoryQuery();

    const Category = () => {

        return (

            data.map((item, index) => {

                return(

                    <div className="category flex">
                        
                        <img src={item.image} alt={`${item.name} cloth`} />

                        <Link to={`/shopping:${item.name}`}>{item.name}</Link>
                    </div>

                )

            })
        )
    }
    return(
        <div className="app__category container">
            <div className="wrapper app__category-wrapper">
                <p className="head-text">Shop By Category</p>
                <div className="p-text">Shop All</div>
                <div className="category-container flex">
                    { 
                        isLoading ? <p>Loading</p> : Category()    
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;