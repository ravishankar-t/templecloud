import { Component, OnInit ,Input } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router'
@Component({
    selector : 'app-sevas',
    templateUrl : './sevas.component.html'
})
export class SevasComponent implements OnInit{
    @Input() showme: boolean = true;

    titlename;
    time;
    index =0;
   
    
  rituals = [{ sevaname: 'Suprabatha Seva/ Bindu Teertha Abhishekam', timings: 'Daily from 04:00 AM-05:00 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 05:00 AM-05:30 AM' },
{ sevaname: 'Panchamrutha Abhishekam', timings: 'Daily from 05:30 AM-06:00 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 07:00 AM-07:30 AM' },
{ sevaname: 'Ksheerabhishekam/Palabhishekam', timings: 'Daily from 07:30 AM-08:00 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 08:30 AM-09:00 AM' },
{ sevaname: 'Panchamrutha Abhishekam', timings: 'Daily from 09:00 AM-09:30 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 10:30 AM-11:00 AM' },
{ sevaname: 'Panchamrutha Abhishekam', timings: 'Daily from 11:00 AM-11:30 AM' },
{ sevaname: 'Kalyanosthavam', timings: 'Daily from 11:00 AM-12:30 PM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 04:30 PM-05:00 PM' },
{ sevaname: 'Pramanam/Break', timings: 'Daily from 05:00 PM-05:45 PM' },
{ sevaname: 'Ksheerabhishekam/Palabhishekam', timings: 'Daily from 05:45 PM-06:15 PM' },
{ sevaname: 'Mahaharathi', timings: 'Daily from 06:15 PM-06:30 PM' },
{ sevaname: 'Sarva Darsanam', timings: 'Daily from 06:30 PM-09:30 PM' }];

    constructor(private router: Router){}
    ngOnInit(){
        console.log(this.showme)
        this.rituals = this.rituals.map((item)=>{
            
            return {sevaname: item.sevaname ,
                      timings: item.timings}
        })
        
        if(this.router.url == '/sevas'){
            this.showme=false
        }
        console.log(this.router.url)
    }
    showsevatimings(){
       // this.index=this.index+1;
        // this.titlename =  this.rituals;
        // this.time = this.rituals[this.index].timings;
    this.showme=false
        this.router.navigate(['/sevas'])
      
    }
}