import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-newsupdate',
    templateUrl : './newsupdate.component.html'
})
export class NewsupdateComponent implements OnInit{

    newsupdates =[{ news: 'Ganesh Chaturthi in 2018 is on Thursday, the 13th of September (13/9/2018)' },
    { news: 'Gramotsavam' },
    { news: 'Hamsa Vahanam' }];

    constructor(){}
    ngOnInit(){
        this.newsupdates = this.newsupdates.map((item)=>{
            
            return {news: item.news}
        })
        console.log(this.newsupdates)
    }
}