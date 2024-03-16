import image from "../assets/image.png"
export default function WithoutNotes(){
    return(
        <div
            style={{
                width:"70vw",
                background:"#DAE5F5",
                height:"100vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
            }} 
        >
            <img style={{width:"500px"}} src={image}/>
            <h1>Pocket Notes</h1>
            <p>
                Send and receive messages without keeping your phone online.
                <br/>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
        </div>
    )
}