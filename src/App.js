import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {students} from './Student'
import StudentChange from './StudentChange'
import AddNewStudent from'./AddNewStudent'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: students,
      count: 0,
      newStudent: []
    }

    this.previousButton = this.previousButton.bind(this)
    this.nextButton = this.nextButton.bind(this)
  }

  previousButton() {
    if(this.state.count === 0) {
      this.setState({count: 0})
    }
    else {
      this.setState({count: this.state.count - 1})
    }
  }

  nextButton() {
    if(this.state.count === this.state.students.length - 1) {
      this.setState({count: 0})
    }
    else { 
      this.setState({count: this.state.count + 1})
    }
  }

  // editButton() {

  // }

  // deleteButton() {
  //   if(this.state.count === 1)
  //     this.setState({count: })
  // }

  // newButton() {
  //   this.setState({
  //     students: [...this.state.students, this.state.newStudent]
  //   })
  // }
  
  render() {
  
    return (
      <div className="App">
        <StudentChange
          name={this.state.students[this.state.count].name}
          from={this.state.students[this.state.count].from}
          funFact={this.state.students[this.state.count].funFact}
          cityOrCountry={this.state.students[this.state.count].cityOrCountry}
          indoorsOrOutdoors={this.state.students[this.state.count].indoorsOrOutdoors}
          travel={this.state.students[this.state.count].travel}
          food={this.state.students[this.state.count].food}
          dogOrCat={this.state.students[this.state.count].dogOrCat}
          moveForward={this.nextButton}
          moveBackward={this.previousButton}
          currentIndex={this.state.count}
          totalIndex={this.state.students.length}
        />
        {/* <AddNewStudent
          editStudent={this.editButton}
          deleteStudent={this.deleteButton}
          newStudent={this.newButton}
        /> */}

      </div>
    );
  }
}


