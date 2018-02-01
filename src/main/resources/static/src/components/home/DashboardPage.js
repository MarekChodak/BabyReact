import React from 'react';
import * as userBabyActions from '../../actions/userBabyActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class DashboardPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.noBabyMessage = <h3 style={{"text-align": "center"}}>Please add your baby to see its dashboard</h3>;
  }

  babyInfo(baby) {
    return (
      <div id="babyInfo" className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Your baby info</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className=" col-md-9 col-lg-9 ">
              <table className="table">
                <tbody>
                <tr>
                  <td>First Name:</td>
                  <td>{baby.firstName}</td>
                </tr>
                <tr>
                  <td>Last name</td>
                  <td>{baby.lastName}</td>
                </tr>
                <tr>
                  <td>Birth Date</td>
                  <td>{baby.birthDate}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-3 col-lg-3 " align="center">
              <img alt="User Pic" id="babyInfoPicture" src="rest/baby/myBabyPicture"
                   className="img-circle img-responsive"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const noBabyDefined = this.props.baby === null || this.props.baby.id === null;
    return (
      <div>
        {noBabyDefined ? this.noBabyMessage : this.babyInfo(this.props.baby)}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userBabyActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    baby: state.userBaby
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
