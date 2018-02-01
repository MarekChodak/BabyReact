import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as measuresActions from '../../actions/measuresActions';
import MeasuresTable from "./MeasuresTable";


class MeasuresPage extends React.Component {

  constructor(props) {
    super(props);
    this.addMeasure = this.addMeasure.bind(this);
  }

  addMeasure(measure){
    this.props.actions.addBabyMeasure(measure);
  }

  render() {
    return (
      <div>
        <MeasuresTable onAddMeasure={this.addMeasure} measures={this.props.measures}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(measuresActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    measures: state.measures
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasuresPage);
