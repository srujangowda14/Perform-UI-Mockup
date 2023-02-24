import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {
       constructor(private router:Router){}

  goTOFundTracking(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
