import React, { useEffect, useState } from "react";
import "./adminList.css";
import axios from "axios";
import Popup from "reactjs-popup";
import Select from "react-select";
import { firestore } from "../../../auth/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

function AdminManagement() {
  const [adminData, setAdminData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState({ value: "", label: "" });
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [popupButtonText, setPopupButtonText] = useState("Tambah");

  useEffect(() => {
    // Fetch data from your API
    axios
      .get("http://127.0.0.1:5050/admin-data")
      .then((response) => {
        const admins = response.data.data.map((admin) => {
          const [adminId, adminDetails] = Object.entries(admin)[0];
          return { id: adminId, ...adminDetails };
        });
        setAdminData(admins);
      })
      .catch((error) => {
        console.error("Error fetching admin data:", error);
      });
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (selectedAdmin) {
      setPopupButtonText("Update");
    } else {
      setPopupButtonText("Tambah");
    }
  }, [selectedAdmin]);

  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const role = selectedRole.value;

    const adminToUpdate = {
      email: formData.get("email"),
      name: formData.get("name"),
      role: role,
    };

    if (selectedAdmin) {
      const adminId = selectedAdmin.id;
      updateAdmin(adminId, adminToUpdate);
    } else {
      addAdmin(adminToUpdate);
    }
  };

  const updateAdmin = async (adminId, updatedAdminData) => {
    try {
      await updateDoc(doc(firestore, "admin", adminId), updatedAdminData);
      setAdminData((prevAdminData) =>
        prevAdminData.map((admin) =>
          admin.id === adminId ? { ...admin, ...updatedAdminData } : admin
        )
      );
      setShowPopup(false);
      setSelectedAdmin(null);
      console.log("Admin updated successfully");
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };

  const addAdmin = async (newAdminData) => {
    axios
      .post("http://127.0.0.1:5050/insert-data-admin", newAdminData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setShowPopup(false);
        console.log("New admin added:", response.data);
      })
      .catch((error) => {
        console.error("Error adding new admin:", error);
      });
  };

  const handleDelete = async (adminId) => {
    try {
      await deleteDoc(doc(firestore, "admin", adminId));
      setAdminData((prevAdminData) =>
        prevAdminData.filter((admin) => admin.id !== adminId)
      );
      console.log("Admin deleted successfully");
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  const roles = [
    { value: "admin", label: "Admin" },
    { value: "super-admin", label: "Super Admin" },
  ];

  const totalPages = Math.ceil(adminData.length / itemsPerPage);

  const handleClick = (type) => {
    if (type === "prev") {
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
    } else if (type === "next") {
      setCurrentPage((prevPage) =>
        prevPage < totalPages ? prevPage + 1 : totalPages
      );
    }
  };

  const handleEdit = (adminId) => {
    const adminToUpdate = adminData.find((admin) => admin.id === adminId);

    if (adminToUpdate) {
      setSelectedAdmin(adminToUpdate);
      setSelectedRole(roles.find((role) => role.value === adminToUpdate.role));
      setShowPopup(true);
    } else {
      console.error("Admin not found");
    }
  };

  const handleCancel = () => {
    setShowPopup(false);
    setSelectedAdmin(null); // Reset selected admin data when cancel is clicked
    setSelectedRole({ value: "", label: "" }); // Reset selected role
  };
  return (
    <div className="container">
      <div className="adminContainer">
        <div className="tableAdmin">
          <table>
            <thead>
              <tr>
                <th>Nama Admin</th>
                <th>Email</th>
                <th>Role</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>
                    {admin.role === "admin" ? "Administrator" : "Super Admin"}
                  </td>
                  <td>
                    <button onClick={() => handleEdit(admin.id)}>Ubah</button>
                    <button onClick={() => handleDelete(admin.id)}>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button
            onClick={() => handleClick("prev")}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => handleClick("next")}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className="addAdmin">
          {/* Button triggers the Popup */}
          <button onClick={() => setShowPopup(true)}>{popupButtonText} Admin</button>
          {/* Popup component */}
          {showPopup && (
            <Popup open={showPopup} closeOnDocumentClick={false} modal nested>
              <form onSubmit={handleUpdate} className="container-form-admin">
                <div className="form-admin">
                  <label>Email</label> <br />
                  <input 
                   value={selectedAdmin ? selectedAdmin.email : ''}
                  type="email" name="email" placeholder="Masukkan Email" 
                  onChange={(e) => setSelectedAdmin(prev => ({ ...prev, email: e.target.value }))}/>
                </div>
                <div className="form-admin">
                  <label>Nama Lengkap</label> <br />
                  <input 
                   value={selectedAdmin ? selectedAdmin.name : ''}
                  type="text" name="name" placeholder="Masukkan Nama Lengkap"
                  onChange={(e) => setSelectedAdmin(prev => ({ ...prev, name: e.target.value }))} />
                </div>
                <div className="form-admin">
                  <label>Roles</label> <br />
                  <Select
                    options={roles}
                    value={selectedRole}
                    onChange={handleRoleChange}
                    placeholder="Pilih Role...."
                    isClearable
                  />
                </div>
                <button className="addAdminBtn" type="submit">
                  {popupButtonText}
                </button>
                <button onClick={() => handleCancel()}>Cancel</button>
              </form>
            </Popup>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminManagement;
