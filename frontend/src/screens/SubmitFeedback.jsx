import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { showErrorAlert, showSuccessAlert } from "../utils"
import { submitFeedback } from '../services/feedback'


export default function SubmitFeedback() {
    const [Punctuality, setPunctuality] = useState([])
    const [queries_solved, setQueries_solved] = useState('')
    const [Initiative, setInitiative] = useState('')
    const [responsiveness, setResponsiveness] = useState('')
    const navigate = useNavigate()

    const onSubmitFeedback = () => {
        const fid = sessionStorage['fid']
        const sid =  {
            "id": sessionStorage['uid']
        }
        
        const total = (parseInt(Punctuality) + parseInt(queries_solved) + parseInt(Initiative) + parseInt(responsiveness))/4;

        submitFeedback(fid, sid, Punctuality, queries_solved, Initiative, responsiveness, total, (result) => {
            if (result["status"] === "success") {
                navigate("/student-Dashboard")
                showSuccessAlert("Submitted new Feedback")
            } else {
                showErrorAlert("error while adding a new Feedback")
            }
        })
    }

    return (
    <div className="main1">
            <h3 className="header">Submmit Feedback Page</h3>

            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="">Punctuality</label>
                            <select onChange={(e) => setPunctuality(e.target.value)} className="form-control">
                            <option value={""}>Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>
                            
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">queries_solved</label>
                            <select onChange={(e) => setQueries_solved(e.target.value)} className="form-control">
                            <option value={""}>Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Initiative</label>
                            <select onChange={(e) => setInitiative(e.target.value)} className="form-control">
                            <option value={""}>Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">responsiveness</label>
                            <select onChange={(e) => setResponsiveness(e.target.value)} className="form-control" >
                            <option value={""}>Select Rating</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <button
                                onClick={onSubmitFeedback}
                                style={{ marginRight: 10 }}
                                className="btn btn-success"
                            >
                                Submit
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

