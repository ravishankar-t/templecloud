import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-timings',
    templateUrl : './timings.component.html'
})
export class TimingsComponent implements OnInit{
   
  timings =[{ dailytimings: 'Paalabhishekam(7.30 A.M to 8.00 A.M ,12.30 P.M to 1.00 P.M, 2.00PM to 2.30PM , 3.30PM to 4.00 PM and 5.45PM to 6.15 PM)' },
{ dailytimings: 'Suprabatham, Binduteerthaabishekham (4.00 A.M to 5.00 A.M)' },
{ dailytimings: 'SankataHaraGanapati Vratham(9.00 A.M to 12.00 Noon):' }];

    constructor(){}
    ngOnInit(){
        this.timings = this.timings.map((item)=>{
            
            return {dailytimings: item.dailytimings}
        })
        console.log(this.timings)
    }
}