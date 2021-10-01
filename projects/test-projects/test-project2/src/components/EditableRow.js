import React from 'react'

const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input typte="text"
                required="required"
                placeholder="Enter a name"
                name="fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input typte="text"
                required="required"
                placeholder="Enter a address"
                name="address"
                value={editFormData.address}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input typte="text"
                required="required"
                placeholder="Enter a phone number"
                name="phoneNumber"
                value={editFormData.phoneNumber}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input typte="email"
                required="required"
                placeholder="Enter a email"
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow
