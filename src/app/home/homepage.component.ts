import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router'

@Component({
    selector:'app-home',
    templateUrl: './homepage.component.html'

})          
export class HomepageComponent implements OnInit{
    showseva = true
    showdonation =true 
    constructor(private router: Router){ }
    ngOnInit(){
       
    }
    showaboutemple(){
        this.router.navigate(['/homepage'])
    }
    
}
