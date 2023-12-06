import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css',
})
export class FacultyComponent {
  students = ['Meet', 'Ritesh', 'Het'];
  filteredStudents = [''];
  tempStdName = '';
  idToUpdate = -1;
  searchText = ''

  addStudent() {
    this.students.push(this.tempStdName);
    this.tempStdName = '';
    this.idToUpdate = -1;
  }

  editStudent() {
      this.students[this.idToUpdate] = this.tempStdName;
      this.tempStdName = '';
      this.idToUpdate = -1;
  }

  setForEdit( index: number) {
    this.tempStdName = this.students[index];
    this.idToUpdate = index;
   }

   deleteStudent(index: number) {
    this.students.splice(index, 1);
   }

   searchStudents(){
    this.filteredStudents=this.students.filter((stu:string)=>{
      return stu.indexOf(this.searchText)>-1;
    })
   }
}
