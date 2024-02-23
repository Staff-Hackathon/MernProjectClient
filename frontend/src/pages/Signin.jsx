export function Signin() {

    return(
    <>     
    <h1>
        Signin

    </h1>

    <div className="form">

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
            <button  className="btn btm-primary">Signin</button>
        </div>
    </div>
    </>
    )
    
}
export default Signin;
