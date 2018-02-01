import React, {PropTypes} from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userBabyActions from '../../actions/userBabyActions';

class SideAvatar extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      baby : {}
    };

    this.goToAddBaby = this.goToAddBaby.bind(this);
    this.babyNotPresent = this.babyNotPresent.bind(this);
    this.babyPresent = this.babyPresent.bind(this);
  }

  goToAddBaby(){
    this.props.history.push("/addBaby");
  }

  calculateBabyAge(){
    let firstDate = moment();
    return firstDate.diff(this.props.baby.birthDate, 'days');
  }

  babyNotPresent() {
    return <div>
      <p>Add your Baby!</p>
      <button className="btn btn-sm btn-primary" onClick={this.goToAddBaby}>ADD</button>
    </div>;
  }

  babyPresent() {
    return <div>
      <p id="myBabyNameSide">{this.props.baby.firstName}</p>
      <p id="myBabyBarAge">{this.calculateBabyAge()} Days</p>
    </div>;
  }

  imageSource(noBaby){
    return noBaby ? 'images/baby2.png' : 'rest/baby/myBabyPicture';
  }

  render() {
    const noBaby = this.props.baby === null || this.props.baby.id === null;

    return (<div className="myBabyBar">
        <img src={this.imageSource(noBaby)} className="sideBabyPic" title="No baby"/>
        {noBaby ? this.babyNotPresent() : this.babyPresent()}
      </div>
    );
  }
}

SideAvatar.propTypes = {
  history: PropTypes.object.isRequired
};

SideAvatar.contextTypes = {
  router : PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(userBabyActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    baby : state.userBaby
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideAvatar));
