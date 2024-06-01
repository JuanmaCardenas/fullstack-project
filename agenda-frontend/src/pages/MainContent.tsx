import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { User } from "../types/userType";
import { userService } from "../services/userService";
import "../styles/MainContent.css";

function MainContent() {
  const { id } = useParams<{ id: string }>();
  const orgId = Number(id);
  const [userInfo, setUserInfo] = useState<User[]>([]);

  function handleDeleteClick(id: number) {
    const updatedUserInfo = userInfo.filter((user) => user.iduser !== id);
    setUserInfo(updatedUserInfo);
    userService.deleteUser(id);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getUsers(orgId);
        setUserInfo(response);
      } catch (error) {}
    };

    fetchUsers();
  }, [orgId]);

  return (
    <div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr className="table-info">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Organisation</th>
            <th>Phone Number</th>
            <th>
              <Link to={"/user"} type="button" className="btn btn-success">
                <i className="fa-solid fa-plus"></i>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user) => (
            <tr key={user.iduser}>
              <td>{user.iduser}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.org_id}</td>
              <td>{user.phone_number}</td>
              <td>
                <Link
                  to={`/user/editUser/${user.iduser}`}
                  type="button"
                  className="btn btn-warning"
                  style={{ marginRight: "5px" }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(user.iduser ?? 0)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//meter en el button el delete

export default MainContent;
