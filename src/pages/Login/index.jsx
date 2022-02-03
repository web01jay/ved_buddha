import React, { useEffect } from "react";
import "./login.css"

const Login = () => {

    useEffect(() => {
      const body = document.getElementsByTagName("body");
    }, []);
    

  return (
    <div className="login-box m-auto">
      <div className="login-logo">
        <b>Ved Buddha</b> Admin
      </div>
      {/* <!-- /.login-logo --> */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <form action="" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label for="remember">Remember Me</label>
                </div>
              </div>
              {/* <!-- /.col --> */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              {/* <!-- /.col --> */}
            </div>
          </form>

        </div>
        {/* <!-- /.login-card-body --> */}
      </div>
    </div>
  );
};

export default Login;
