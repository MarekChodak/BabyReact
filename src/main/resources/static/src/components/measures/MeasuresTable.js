import React from 'react';
import MeasurePopUp from "./popup/MeasurePopUp";
import moment from "moment";

class MeasuresTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false
    };
    this.showAddPopup = this.showAddPopup.bind(this);
    this.onClose = this.onClose.bind(this);
    this.addMeasure = this.addMeasure.bind(this);
  }

  showAddPopup() {
    this.setState({
      popupVisible: true
    });
  }

  addMeasure(measure) {
    this.props.onAddMeasure(measure);
  }

  onClose() {
    this.setState({
      popupVisible: false
    });
  }

  render() {
    const rows =
      this.props.measures.map(
        (measure, idx) => <tr key={idx}>
          <td>{moment(measure.measureDate).format('YYYY-MM-DD')}</td>
          <td>{measure.weight}</td>
          <td>{measure.height}</td>
        </tr>
      );

    return (

      <div style={{position: "relative"}}>
        <div id="measuresPanel">
          <div className="panel panel-primary">
            <div id="measuresHeadPanel" className="panel-heading">
              <h3 className="panel-title">Baby measures</h3>
              <button id="addMeasureBtn" className="btn btn-success" onClick={this.showAddPopup}>
                <i className="fa fa-plus fa-lg" aria-hidden="true"/> Add Measurement
              </button>
            </div>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
              <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Height</th>
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
            </table>
          </div>
        </div>
        <MeasurePopUp visible={this.state.popupVisible} onClose={this.onClose} addMeasure={this.addMeasure}/>
      </div>
    );
  }
}

export default MeasuresTable;
