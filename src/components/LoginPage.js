import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expense Tracker</h1>
          <button
            className="login-button"
            onClick={this.props.startLogin}
          ></button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => {
      return dispatch(startLogin());
    },
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
