import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title = "List of Students"
  students;
  display:any

  constructor(service: StudentsService) { 
    this.students = service.getStudents()
    this.display = service.getStudents()
  }

  showFemale() {
    this.display = this.students
    this.display = this.students.filter(student => student.gender === 'Female');
  }

  showMale() {
    this.display = this.students
    this.display = this.students.filter(student => student.gender === 'Male');
  }

  showAll() {
    this.display = this.students
  }

  ngOnInit(): void {
  }

}
