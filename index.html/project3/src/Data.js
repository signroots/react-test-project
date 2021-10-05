import React,{useState} from 'react'
import MaterialTable from 'material-table'

function Data() {
    
    const [tableData,setTableData] = useState([
        {name:"Afc",email:"abc@gamil.com",phone:"546548945",housename:"fdghij",fee:46465},
        {name:"hfvjh",email:"jhfdk@gamil.com",phone:"58864945",housename:"fdghij",fee:54989},
        {name:"dgi",email:"alkl@gamil.com",phone:"5498156945",housename:"fdghij",fee:65565},
        {name:"dsbl",email:"shfc@gamil.com",phone:"579865645",housename:"fdghij",fee:54498},
    ])

    const columns=[
        {title:"Name", field:"name"},
        {title:"Email",field:"email",filterPlaceholder:"filter by email"},
        {title:"Phone number",field:"phone"},
        {title:"House name",field:"housename"},
        {title:"School fee",field:"fee"},
    ]
    return (
        <div>
            <h1>Data</h1>
            <MaterialTable columns={columns} data={tableData} 
            editable={{
                onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
                    setTableData([...tableData,newRow])
                    resolve()

                })
            }}

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
                sorting:true,
                searchFieldAlignment:"right",
                searchFieldVariant:"outlined",
                filtering:true,
                paging:true,
                pageSizeOptions:[2,5,10,20,50],
                pageSize:2,
                paginationType:"stepped",
                showFirstLastPageButtons:false,
                exportButton:true,
                addRowPosition:"first",
                actionsColumnIndex:-1,
                selection:true,
                rowStyle:{background:"#e6e6e6"}
            }}
            title="Studente information" />

           
        </div>
    )
}

export default Data
