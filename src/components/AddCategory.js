import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue(e.target.value)
    }

    const handleSumit = (e) => {
       e.preventDefault()
    //console.log('Sumit hecho')
    if(inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories])
            setinputValue('')

        }


    }


    return (
        <div>
            <form onSubmit = {handleSumit}>
            <input
                type = 'text'
                value = {inputValue}
                onChange = {handleInputChange}
            
            ></input>
            </form>
        </div>
    )
}
export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}