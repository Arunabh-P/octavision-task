import React, { useState } from 'react'

function Home() {
    const [btn1, setBtn1] = useState(false)
    const [btn2, setBtn2] = useState(false)

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <nav class="navbar navbar-light bg-dark text-white">
                       <div className="container">
                       <button class="btn btn-info ms-auto text-white" type="button" onClick={(() => {
                            setBtn1(true)
                            setBtn2(false)
                        })} > button1</button>
                        <button class="btn   btn-info mx-2 text-white" type="button" onClick={(() => {
                            setBtn2(true)
                            setBtn1(false)
                        })} >button2</button>
                       </div>
                    </nav>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 mx-auto bg-info border rounded py-5 text-white text-center">
                        {btn1 && "discription 1 here"}
                        {btn2 && "discription 2 here"}
                        {!btn1 && !btn2 && "nothing selected"}
                    </div>
                    <div className="col-md-5 mx-auto border bg-info rounded py-5 d-flex justify-content-center">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {btn1 && "Button 1"}
                            {btn2 && "Button 2"}
                            {!btn1 && !btn2 && "Dropdown"}
                        </a>
                        <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                            <li><a class=" text-decoration-none py-2" onClick={(() => {
                                setBtn1(true)
                                setBtn2(false)
                            })} >Button 1</a></li>
                            <li><a class=" text-decoration-none py-2" onClick={(() => {
                                setBtn2(true)
                                setBtn1(false)
                            })} >Button 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home