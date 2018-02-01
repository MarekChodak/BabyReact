import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './addBaby.css';
import moment from 'moment';
import FileUpload from '../common/fileUpload/FileUpload';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userBabyActions from '../../actions/userBabyActions';

class AddBabyPage extends React.Component {

  constructor(props) {
    super(props);
    let baby = {};
    baby.birthDate = moment();
    this.state = {
      baby: baby,
      imageSrc: ""
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.saveBaby = this.saveBaby.bind(this);
  }

  handleFirstNameChange(event){
    let baby = Object.assign(this.state.baby, {firstName : event.target.value});
    this.setState({
      baby : baby
    });
  }

  handleLastNameChange(event){
    let baby = Object.assign(this.state.baby, {lastName : event.target.value});
    this.setState({
      baby : baby
    });
  }

  handleDateChange(date) {
    let baby = Object.assign(this.state.baby, {birthDate : date});
    this.setState({
      baby : baby
    });
  }

  handlePhotoChange(photo){
    let reader = new FileReader();

    this.setState({
      babyPhoto : photo
    });

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(photo);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.setState({
      imageSrc : reader.result
    });
  }

  saveBaby(){
    this.props.actions.addUserBaby(this.state.baby, this.state.babyPhoto).then(() => this.redirect());
  }

  redirect() {
    this.props.actions.loadUserBaby();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container-fluid col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">Create a Baby</div>
          <div className="panel-body">
            <div className="form-group">
              <label htmlFor="newBabyName">First Name:</label>
              <input onChange={this.handleFirstNameChange} placeholder="First name" id="newBabyName" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="newBabyLastName">Last Name:</label>
              <input onChange={this.handleLastNameChange} placeholder="Last Name" id="newBabyLastName" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label className="block">Birth date:</label>
              <DatePicker
                selected={this.state.baby.birthDate}
                onChange={this.handleDateChange}
              />
            </div>

            <div className="form-group">
              <label className="block">Photo:</label>
              <FileUpload onFileChange={this.handlePhotoChange}/>
              <img className="newBabyPhoto imageLoaded"
                    src={this.state.imageSrc} />
            </div>

            <button onClick={this.saveBaby} className="btn btn-primary createBabySave">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddBabyPage));
