import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  idToEdit=-1
  searchText = ''
  filteredData =[{LaptopModelNo:0,BrandName:"",LaptopModel:"",price:0}]

  laptops = [
    {LaptopModelNo:1001,BrandName:"Asus",LaptopModel:"vivobook",price:70000},
    {LaptopModelNo:1002,BrandName:"Dell",LaptopModel:"aspiron",price:50000},
    {LaptopModelNo:1003,BrandName:"Hp",LaptopModel:"Victus",price:60000},
   
  ]

  tempData = {LaptopModelNo:0,BrandName:"",LaptopModel:"",price:0}

  addData(){
    this.laptops.push(this.tempData);
    this.tempData ={LaptopModelNo:0,BrandName:"",LaptopModel:"",price:0};
    this.idToEdit=-1
  }

  setForEdit( index: number) {
    this.tempData = this.laptops[index];
    this.idToEdit = index;
   }

  editData(){
    this.laptops[this.idToEdit] = this.tempData;
      this.tempData = {LaptopModelNo:0,BrandName:"",LaptopModel:"",price:0};
      this.idToEdit = -1;
  }

  deleteData(index: number) {
    this.laptops.splice(index, 1);
   }

  //  searchlaptops() {
  //   this.filteredData = this.laptops.filter((stu: any) => {
  //      return Object.values(stu).some((val: any) =>
  //        val.toString().toLowerCase().includes(this.searchText.toLowerCase())
  //      );
  //   });
  //  }
}
