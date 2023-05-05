import React from 'react'
import { SingleData } from './SingleDataExcel'

export const Data = ({excelData}) => {
    return excelData.map((soloExcelData)=>(
        <tr key={soloExcelData.Id}>
            <SingleData soloExcelData={soloExcelData}/>
        </tr>        
    ))
}