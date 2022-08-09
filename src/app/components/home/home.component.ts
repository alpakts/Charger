import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form:Array<any>=["item1","item2","item3"]
  constructor() { }
  lang:string=""
  lang2:string=""
  var_name = new String(this.lang2);
  ngOnInit(): void {
    this.lang=localStorage.getItem("lang")||"tr-TR";
    this.var_name=this.lang.substring(0,2).toLocaleUpperCase()
    
  }
  changeLang(lang:any){
    const lang1:any=lang
    localStorage.setItem("lang",lang1)
    location.reload()
    
  }
  getLang(){
      if (localStorage.getItem("lang")=="en-US") {
        return 1
      }else{
        return 2
      }
  }

}
