import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { avalibleNumber } from "../types/avalibleNumberType";
import { useEffect, useState } from "react";
import { User } from "../types/userType";

interface CustomDropdownProps {
  numbers?: avalibleNumber[];
  orgs?: string[];
  defaultValue?: number;
  user: User | undefined;
  setUser: (user: User) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  numbers,
  orgs,
  user,
  setUser,
  defaultValue,
}) => {
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [selectedOrg, setSelectedOrg] = useState<string>();

  function handleSelectNumber(value: number) {
    setSelectedNumber(value);
    let createUser = { ...user, phone_number: value };
    setUser(createUser);
  }

  function handleSelectOrg(value: number, name: string) {
    setSelectedOrg(name);
    let createUser = { ...user, org_id: value };
    setUser(createUser);
  }

  const orgNames = {
    1: "Iberdrola",
    2: "Endesa",
    3: "Gas Natural",
  };

  function setOrganisation() {
    if (defaultValue === 1 || defaultValue === 2 || defaultValue === 3) {
      return orgNames[defaultValue];
    }
    return "";
  }

  return (
    <>
      {numbers && !defaultValue && (
        <DropdownButton
          id="dropdown-basic-button"
          title={
            selectedNumber != undefined
              ? `${selectedNumber}`
              : "Select a phone number"
          }
        >
          {numbers.map &&
            numbers.map((number, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleSelectNumber(number.idAvalibleNumber)}
              >
                {number.idAvalibleNumber}
              </Dropdown.Item>
            ))}
        </DropdownButton>
      )}
      {orgs && !defaultValue && (
        <DropdownButton
          id="dropdown-basic-button"
          title={
            selectedOrg != undefined
              ? `${selectedOrg}`
              : "Select an organisation"
          }
        >
          {orgs.map((org, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleSelectOrg(index + 1, org)}
            >
              {org}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}
      {orgs && defaultValue && (
        <DropdownButton
          id="dropdown-basic-button"
          title={
            selectedOrg != undefined ? `${selectedOrg}` : `${setOrganisation()}`
          }
        >
          {orgs.map((org, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleSelectOrg(index + 1, org)}
            >
              {org}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}
      {numbers && defaultValue && (
        <DropdownButton
          id="dropdown-basic-button"
          title={
            selectedNumber != undefined
              ? `${selectedNumber}`
              : `${defaultValue}`
          }
        >
          {numbers.map((number, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleSelectNumber(number.idAvalibleNumber)}
            >
              {number.idAvalibleNumber}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      )}
    </>
  );
};

export default CustomDropdown;
