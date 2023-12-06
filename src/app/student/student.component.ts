import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  idToEdit=-1
  searchText = ''
  filteredStudents =[{rollNO:0,name:"",age:0,sem:0}]

  students = [
    {rollNo:101,name:"meet",age:18,sem:4},
    {rollNo:102,name:"ritesh",age:20,sem:3},
    {rollNo:103,name:"het",age:15,sem:1},
    {rollNo:104,name:"hiten",age:10,sem:1},
    {rollNo:105,name:"krishna",age:30,sem:8}
  ]

  tempStudent = {rollNo:0,name:"",age:0,sem:0}

  addStudent(){
    this.students.push(this.tempStudent);
    this.tempStudent = {'rollNo':0,'name':"",'age':0,'sem':0};
    this.idToEdit=-1
  }

  setForEdit( index: number) {
    this.tempStudent = this.students[index];
    this.idToEdit = index;
   }

  editStudent(){
    this.students[this.idToEdit] = this.tempStudent;
      this.tempStudent = {'rollNo':0,'name':"",'age':0,'sem':0};
      this.idToEdit = -1;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
   }

  //  searchStudents() {
  //   this.filteredStudents = this.students.filter((stu: any) => {
  //      return Object.values(stu).some((val: any) =>
  //        val.toString().toLowerCase().includes(this.searchText.toLowerCase())
  //      );
  //   });
  //  }
}
