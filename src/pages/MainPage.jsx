import WithoutNotes from "../components/WithoutNotes"
import NotesBox from "../components/NotesBox"
export default function MainPage(){
    return (
        <div
            style={{
                display:"flex",
            }} 
        >
            <NotesBox />
            <WithoutNotes />
        </div>
    )
}