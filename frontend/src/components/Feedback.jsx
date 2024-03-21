import { useNavigate } from "react-router-dom"

export default function Feedback({ feedback }) {
    const navigate = useNavigate()

    const onFeedbackSelect = () => {
        sessionStorage.setItem('fid', feedback.id);
        navigate("/submit-feedback", { state: feedback })
    }

    return (
        <div style={styles.container} onClick={onFeedbackSelect}>
            <div style={styles.course}>{feedback["course"]}</div>
            <div style={styles.type}>{feedback["type"]}</div>
            <div style={styles.sdate}>{feedback["sdate"]}</div>
            <div style={styles.edate}>{feedback["edate"]}</div>
            <div style={styles.rating}>{feedback["rating"]}</div>
        </div>
    )
}
const styles = {
    container: {
        borderStyle: "solid",
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 20,
        display: "inline-block",
        width: "auto",
    },
    course: {
        fontWeight: "bold",
    },
    type: {
        fontWeight: "",
    },
    rating: {
        fontWeight: "bold",
    }
}
