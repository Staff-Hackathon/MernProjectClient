import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createFeedback } from "../services/feedback"
import { showErrorAlert, showSuccessAlert } from "../utils"
import { loadAllCourses, loadAllFaculties } from "../services/user"

export default function CreateFeedback() {
    const [faculties, setFaculties] = useState([])
    const [courses, setCourses] = useState('')
    const [course, setCourse] = useState('')
    const [type, setType] = useState('')
    const [sdate, setSDate] = useState('')
    const [edate, setEDate] = useState('')
    const [uid, setUID] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        
        loadAllFaculties((result) => {
            console.log("in loading fac");
            if (result["status"] === "success") {
              setFaculties(result["data"]);
            } else {
                showErrorAlert(result["error"]);
            }
        });
        loadAllCourses((result) => {
            console.log("in loading course");
            if (result["status"] === "success") {
                setCourses(result["data"]);
            } else {
                showErrorAlert(result["error"]);
            }
        });
    }, []);

    const onCreateFeedback = () => {
        createFeedback(course, sdate, edate, type, uid, (result) => {
            if (result["status"] === "success") {
                navigate("/home")
                showSuccessAlert("Added new Feedback")
            } else {
                showErrorAlert("error while adding a new Feedback")
            }
        })
    }

    return (
        <div className="main1">
            <h3 className="header">Create Feedback Page</h3>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">Course name</label>
                            <input
                                onChange={(e) => setCourse(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                            
                        </div>

                        {/* <div className="mb-3">
                            <label htmlFor="">Course name</label>
                            <select onChange={(e) => setCourse(e.target.value)} className="form-control">
                            {courses.map(Course => {
                                return <option value={Course["cname"]}>{Course["cname"]}</option>
                            })}
                            </select>
                        </div> */}

                        <div className="mb-3">
                            <label htmlFor="">Type</label>
                            {/* <input
                                onChange={(e) => setType(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                             */}
                            <select onChange={(e) => setType(e.target.value)} className="form-control">
                            <option value="Mid Module Lab">Mid Module Lab</option>
                            <option value="Mid Module Theory">Mid Module Theory</option>
                            <option value="Module End Lab">Module End Lab</option>
                            <option value="Module End Theory">Module End Theory</option>
                            <option value="Module End Infra">Module End Infra</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Start Date</label>
                            <input
                                onChange={(e) => setSDate(e.target.value)}
                                type="date"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">End Date</label>
                            <input
                                onChange={(e) => setEDate(e.target.value)}
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Faculty</label>
                            <select onChange={(e) => setUID(e.target.value)} className="form-control">
                            {faculties.map(faculty => {
                                return <option value={faculty["uid"]}>{faculty["firstName"]} {faculty["lastName"]}</option>
                            })}
                            </select>
                        </div>

                        <div className="mb-3">
                            <button
                                onClick={onCreateFeedback}
                                style={{ marginRight: 10 }}
                                className="btn btn-success"
                            >
                                Save
                            </button>
                            <button className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
