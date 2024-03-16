import { useState } from 'react';

export default function AddNotes() {
  const buttonStyle = {
    borderRadius: "50%", // Make the button circular
    width: "40px", // Set width and height to control the size of the circle
    height: "40px",
    border: "none", // Remove default button border
    margin: "5px",
  };
  const buttonColor = [
    { backgroundColor: "#B38BFA" },
    { backgroundColor: "#FF79F2" },
    { backgroundColor: "#43E6FC" },
    { backgroundColor: "#F19576" },
    { backgroundColor: "#0047FF" },
    { backgroundColor: "#6691FF" },
  ];
  const [groupName, setGroupName] = useState([]);
  const [currentGroupName, setCurrentGroupName] = useState("");

  const handleChange = (e) => {
    setCurrentGroupName(e.target.value);
  }

  const handleClick = () => {
    if (currentGroupName.trim() !== "") {
      const trimmedName = currentGroupName.trim();
      if (!groupName.includes(trimmedName)) {
        const updatedGroupNames = [...groupName, trimmedName];
        setGroupName(updatedGroupNames);
        localStorage.setItem("groupNames", JSON.stringify(updatedGroupNames));
      }
      setCurrentGroupName("");
    }
  }

  return (
    <div style={{ textAlign: "left" }}>
      <p style={{ fontWeight: "bold", fontSize: "25px" }}>Create New Group</p>
      <div>
        <div>
          <label style={{ marginRight: "25px", fontWeight: "bold" }} htmlFor="groupName">Group Name</label>
          <input style={{ borderRadius: "20px", width: "350px", height: "20px", textAlign: "center" }} type="text" id="groupName" placeholder="Enter group name" onChange={handleChange} value={currentGroupName} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <div style={{ marginRight: "25px" }}>
              <p style={{ fontWeight: "bold" }}>Choose Color</p>
            </div>
            <div>
              <button style={{ ...buttonColor[0], ...buttonStyle }} ></button>
              <button style={{ ...buttonColor[1], ...buttonStyle }}></button>
              <button style={{ ...buttonColor[2], ...buttonStyle }}></button>
              <button style={{ ...buttonColor[3], ...buttonStyle }}></button>
              <button style={{ ...buttonColor[4], ...buttonStyle }}></button>
              <button style={{ ...buttonColor[5], ...buttonStyle }}></button>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{
          marginTop: "20px",
          width: "80px",
          height: "25px",
          borderRadius: "8px",
          background: "#001F8B",
          color: "white",
          marginLeft:"400px",
        }}
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  )
}
