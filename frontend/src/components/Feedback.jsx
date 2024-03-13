import { useNavigate } from "react-router-dom"

export default function Feedback({ feedback }) {
    const navigate = useNavigate()

   
    

    return (
        <div style={styles.container}>
            <div style={styles.course}>{feedback["course"]}</div>
            <div style={styles.type}>{feedback["type"]}</div>
            <div style={styles.sdate}>{feedback["sdate"]}</div>
            <div style={styles.edate}>{feedback["edate"]}</div>
            <div style={styles.rating}>{feedback["rating"]}</div>
        </div>
    )
}
const styles = {
    by: {
        marginTop: 5,
        fontWeight: 500,
    },
    container: {
        borderStyle: "solid",
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 20,
        display: "inline-block",
        width: 200,
    },
    title: {
        fontWeight: "bold",
    },
    types: {
        marginTop: 10,
    },
}
