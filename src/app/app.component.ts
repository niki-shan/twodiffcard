import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iprodct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild("ptitle")ptitle !:ElementRef;
  @ViewChild("Pdescription")pPdescriptiontitle !:ElementRef;


  productArray:Array<Iprodct> =
  [
    {
      ptitle:"chiffon",
      Pdescription:"Not Available",
      Pcategory: "Material"
  },
  {
    ptitle:"Book",
    Pdescription:"Available",
    Pcategory: "Catlog"
}
]

onAddProd(cat:"Catlog" | "Material"){
  if(this.ptitle.nativeElement.value.length >0 && 
    this.pPdescriptiontitle.nativeElement.value.length>0) {
      let Obj: Iprodct={
        ptitle:this.ptitle.nativeElement.value,
        Pdescription:this.pPdescriptiontitle.nativeElement.value,
        Pcategory:cat
      }
      this.ptitle.nativeElement.value=" ",
      this.pPdescriptiontitle.nativeElement.value=" ";
      this.productArray.push(Obj)
    }  else{
      return
    } 

}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'twodiffcard';
}
