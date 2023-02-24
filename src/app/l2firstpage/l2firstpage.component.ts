import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l2firstpage',
  templateUrl: './l2firstpage.component.html',
  styleUrls: ['./l2firstpage.component.css']
})
export class L2firstpageComponent {
  constructor(private router:Router){}

  goTOFFGE(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
