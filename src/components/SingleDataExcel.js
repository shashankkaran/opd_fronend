import React from 'react'

export const SingleData = ({soloExcelData}) => {
    return (
        <>
            <th>{soloExcelData.Products}</th>
            <th>{soloExcelData.Description}</th>
            <th>{soloExcelData.Product_Id}</th>
        </>
    )
}