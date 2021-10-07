 import MaterialTable from 'material-table'
 

 import React from 'react'






// const Table = () => {
//     const data=[
//         {name:'Anu',age:12},
//         {name:'sonu',age:20},
//         {name:'manu',age:26},
//         {name:'Akash',age:38}
//     ]
//     const columns=[
//         {
//             title:'Name',field:'name'
//         },
//         {
//             title:'Age',field:'age'
//         },
       
//     ]
    

//     return (
//         <div>
//             <MaterialTable title="Material Table"
//             data={data}
//             columns={columns}
//             options={{
//                 search:true,
//                 paging:true,
//                 filtering:true,
//                 exportButton:true,
                
                
//             }}
            

//             actions={[
//                 {
//                   icon: 'save',
//                   tooltip: 'Save User',
//                   onClick: (event, rowData) => alert("You saved " + rowData.name)
//                 },
//                 {
//                     icon: 'save',
//                     tooltip: 'Save User',
//                     onClick: (event, rowData) => alert("You saved " + rowData.name)
//                   },
//                   rowData => ({
//                     icon: 'delete',
//                     tooltip: 'Delete User',
//                     onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
//                     disabled: rowData.birthYear < 2000
//                   })
                
                    
                  
//               ]}

              
//             />

            
            
//         </div>
//     )
// }

// export default Table


const Table =()=> {
  

    
    

    return (

      
     <div>
       
      <MaterialTable
        title="Family Name"
        columns={[
          { title: 'Name', field: 'name',cellStyle:{color:"blue"},headerStyle:{color:"red"}, },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: 'edit',
            tooltip: 'Edit User',
            onClick: (event, rowData) => alert("You Added " + rowData.name)
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => ("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1,
          exportButton:true,
          rowStyle:{background:"grey"}
          
          
        }}
        

       


        
      />

</div>  

     
      
     
    )
  }


  export default Table