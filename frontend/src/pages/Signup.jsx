export function Signup() {

    return( 
    <>
    <h1>
        Signup
    </h1>
        
    <div className="form">

<div className="mb-3">
    <label htmlFor="">FirstName:</label>
    <input type="text" placeholder="abcd"
    className="form-control"
    ></input>
</div>

<div className="mb-3">
    <label htmlFor="">Lastname:</label>
    <input type="text" placeholder="abcd"
    className="form-control"
    ></input>
</div>

<div className="mb-3">
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="rk@Sunbeaminfo.com"
            className="form-control"
            ></input>
        </div>
    
        <div className="mb-3">
            <label htmlFor="">Password:</label>
            <input type="passwoed" placeholder="xxxxxxxx"
            className="form-control"
            ></input>
        </div>
        <div className="mb-3">
    <label htmlFor="">Role</label>
    <input type="text" placeholder="Students"
    className="form-control"
    ></input>
    <div className="mb-3">
    <label htmlFor="">Course</label>
    <input type="text" placeholder="abcd"
    className="form-control"
    ></input>
</div>
</div>
<div className="mb-3">
    <button className="btn btm-primary">Signin</button>
</div>


</div>


    </>
    )
}
export default Signup;