import { Component , OnInit} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router'

@Component({
    selector : 'app-donation',
    templateUrl : './donation.component.html'
})
export class DonationComponent implements OnInit{
   // reportObject = { "title": "Account Balances as on ", "reportname": "statement", "data": [], "asondate": "", "fromdate": "", "todate": "", "properties": {} };
    fromdate = ""
    todate = ""
    showdonation =false
   
    constructor(private router: Router){}
    ngOnInit(){
        console.log(this.showdonation)
        if(this.router.url == '/donation'){
            this.showdonation=false
            
        }
        console.log(this.router.url)
    }
    showdonationdiv(){
       
            this.showdonation=true
            
       

    }
    // datechange(val, parameter) {

    //     if (parameter == "fromdate") {
    //         this.fromdate = val
    //     } 
    //     console.log(val, "fromdate" + this.fromdate)
    // }

}