import { useNavigate, useParams } from "react-router-dom";
import { userService } from "../services/userService";
import { useEffect, useState } from "react";
import { User } from "../types/userType";
import { numberService } from "../services/numberService";
import { avalibleNumber } from "../types/avalibleNumberType";
import CustomDropdown from "../components/CustomDropdown";

function EditUser() {
  const { id } = useParams<string>();
  const [user, setUser] = useState<User>();
  const [avalibleNumbers, setAvalibleNumbers] = useState<avalibleNumber[]>([]);
  const empresas = ["Iberdrola", "Endesa", "Gas Natural"];
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      let idUser = Number(id);
      const response = await userService.getUserById(idUser);
      setUser(response);
    } catch (error) {}
  };

  const handleClick = () => {
    if (user) {
      userService.updateUser(Number(id), user);
      navigate(`/home/${user.org_id}`);
    }
  };

  const fetchNumbers = async () => {
    try {
      const response = await numberService.getAvalibleNumber();
      setAvalibleNumbers(response);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
    fetchNumbers();
  }, [id]);

  return (
    <div
      style={{
        width: "39%",
        margin: "20px auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <h4
        style={{
          marginBottom: "16px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Edit user
      </h4>
      <div
        style={{
          marginBottom: "16px",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <label>User name</label>
        <label>User surname</label>
      </div>
      <div
        style={{
          marginBottom: "16px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Name name"
          value={`${user?.name}`}
          aria-label="Username"
          style={{ borderRadius: "5px" }}
          onChange={(e) =>
            setUser((newUser) => ({ ...newUser, name: e.target.value }))
          }
        />
        <input
          type="text"
          className="form-control"
          placeholder="Surname"
          value={`${user?.surname}`}
          aria-label="Surname"
          style={{ borderRadius: "5px" }}
          onChange={(e) =>
            setUser((newUser) => ({ ...newUser, surname: e.target.value }))
          }
        />
      </div>
      <div
        style={{
          marginBottom: "16px",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <label>User phone number</label>
        <label>User organisation</label>
      </div>
      <div
        style={{
          marginBottom: "16px",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <CustomDropdown
          numbers={avalibleNumbers}
          defaultValue={user?.phone_number}
          user={user}
          setUser={setUser}
        />
        <CustomDropdown
          orgs={empresas}
          defaultValue={user?.org_id}
          user={user}
          setUser={setUser}
        />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <button type="button" className="btn btn-success" onClick={handleClick}>
          <i className="fa-solid fa-plus"></i> Add new user
        </button>
      </div>
    </div>
  );
}

export default EditUser;
