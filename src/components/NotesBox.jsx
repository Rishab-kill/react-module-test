import { useNavigate } from "react-router-dom"
export default function NotesBox(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/addNotes");
    }
    return(
        <div style={{
                width:"30vw",
                textAlign:"center",
            }}>
            <h1 style={{
                position:"sticky",
                top:"0",
                zIndex:"1000",
            }}>Pocket Notes</h1>
            <button
                style={{
                    borderRadius: "50%", // Make the button circular
                    width: "40px", // Set width and height to control the size of the circle
                    height: "40px",
                    border: "none", // Remove default button border
                    backgroundColor: "#16008B", // Set button background color
                    color: "white", // Set text color
                    fontSize: "2.2rem", // Set font size
                    cursor: "pointer", // Change cursor to pointer on hover
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position:"sticky",
                    top: "calc(100% - 60px)", // Center vertically
                    left:"350px",
                    zIndex: "1000"
                  }}
            onClick={handleClick}>+</button>
        </div>
    )
}