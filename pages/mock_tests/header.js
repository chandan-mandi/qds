import React from 'react';

function HeaderMockTest(props) {

    const openNav = () => {

        console.log(props.email);
        $("#dashboardSidenav").css("width", "20%");
        $(".dashboard-nav").css("width", "80%");
        $(".dashboard-nav").css("margin-left", "20%");
        $(".content-container").css("width", "80%");
        $(".content-container").css("margin-left", "20%");
        $("body").css("background-color", "rgba(0,0,0,0.4)");

      }

    const closeNav = () => {

        $("#dashboardSidenav").css("width", "0");
        $(".dashboard-nav").css("width", "100%");
        $(".dashboard-nav").css("margin-left", "0%");
        $(".content-container").css("width", "100%");
        $(".content-container").css("margin-left", "3rem");
        $("body").css("background-color", "white");

    }

    return(

        <React.Fragment>
            <style>
                {`
                    .dashboard-nav
                    {
                        background-color: #192f5a;
                    }
                    .logo
                    {
                        width: 10%;
                        border-right: 1px solid white;
                    }
                    .welcomeText
                    {
                        font-weight: 200;
                        
                    }
                    .sidenav 
                    {
                        height: 100%;
                        width: 0;
                        position: fixed;
                        z-index: 1;
                        top: 0;
                        left: 0;
                        background-color: #213247;
                        overflow-x: hidden;
                        transition: 0.5s;
                        padding-top: 2%;
                    }
                        
                    .sidenav .nav-options 
                    {
                        text-decoration: none;
                        font-size: 20px;
                        color: #fff;
                        display: block;
                        transition: 0.3s;
                        margin-left: 10%;
                        margin-top: 5%;
                    }
                        
                    .nav-options:hover, .closebtn:hover 
                    {
                        color: #77bf43;
                    }

                    .closebtn
                    {
                        font-size: 20px;
                        color: white;
                        width: 25%;
                    }

                    .nav-title
                    {
                        width: 75%;
                    }
                    
                    .dashboard-nav 
                    {
                        transition: all .5s;
                    }

                `}
            </style>
            <div id="dashboardSidenav" className="sidenav">
                <div className="d-flex align-self-center justify-content-center text-white">
                    <h4 className="nav-title ml-4 p-1">Dashboard</h4>
                    <a href="javascript:void(0)" className="closebtn text-right pr-4" onClick={closeNav}>&times;</a>

                </div>
                <a href="#" className="nav-options">Test Series</a>
                <a href="#" className="nav-options">Scores</a>
                <a href="/login" className="nav-options">Logout</a>
            </div>

            <div className="container-fluid dashboard-nav p-2">
                <div className="row p-3 text-white">
                    <div className="col-10 d-flex pl-4">
                        <h4 className="align-self-center mr-3" onClick={openNav}><span className="fa fa-bars"></span></h4>
                        <img src="/assets/images/qds-logo.webp" alt="Logo" className="logo pr-3"></img>
                        <h4 className="welcomeText align-self-center pl-3">Welcome</h4>
                        {/* , { props.email != null && props.email.length > 0 && props.email.split("@", 1) }  */}
                    </div>
                    <div className="col-2 align-self-center">
                        <a href="/mock_tests/login" className="float-right mr-5 text-white">Logout</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default HeaderMockTest;
