import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css',
})
export class FacultyComponent {
  students = ['Meet', 'Ritesh', 'Het'];
  tempStdName = '';
  idToUpdate = -1;

  addStudent() {
    this.students.push(this.tempStdName);
    this.tempStdName = '';
    this.idToUpdate = -1;
  }

  editStudent() {
    // Assuming you want to update the student name at the specified index
      this.students[this.idToUpdate] = this.tempStdName;
      this.tempStdName = '';
      this.idToUpdate = -1;
  }

  setForEdit(name: any, index: number) {
    this.tempStdName = name;
    this.idToUpdate = index;
   }

   deleteStudent(index: number) {
    this.students.splice(index, 1);
   }
}
