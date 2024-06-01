import { useEffect, useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { avalibleNumber } from "../types/avalibleNumberType";
import { numberService } from "../services/numberService";
import { User } from "../types/userType";
import { userService } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

function CreateUser() {
  const [avalibleNumber, setAvalibleNumbers] = useState<avalibleNumber[]>([]);
  const [user, setUser] = useState<User>({
    name: "",
    surname: "",
    org_id: 0,
  });
  const empresas = ["Iberdrola", "Endesa", "Gas Natural"];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const response = await numberService.getAvalibleNumber();
        console.log(response);
        setAvalibleNumbers(response);
      } catch (error) {}
    };
    fetchNumbers();
  }, []);

  const handleClick = () => {
    userService.createUser(user);
    navigate(`/home/${user.org_id}`);
  };

  return (
    <>
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
          Create a new user
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
            numbers={avalibleNumber}
            user={user}
            setUser={setUser}
          />
          <CustomDropdown orgs={empresas} user={user} setUser={setUser} />
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <button
            type="button"
            className="btn btn-success"
            disabled={
              user.org_id != 0 &&
              user.name?.trim() != "" &&
              user.surname?.trim() != ""
                ? false
                : true
            }
            onClick={handleClick}
          >
            <i className="fa-solid fa-plus"></i> Add new user
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
