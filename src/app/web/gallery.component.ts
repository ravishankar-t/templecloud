import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../app.config'
@Component({
    selector: 'app-web',
    templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
   

    blnshowcarousol=false
   
    imageurl;
    imagetitle;
    imagearr = [{
        thubnailurl: "/ThumbNail/1.png",
        zoomurl: "/ThumbNail/1Large.png",
        title: "sri varasiddhi vinayaka image"
    },

    {
        thubnailurl: "/Optimized-annadanam-thumbnail.png",
        zoomurl: "/Optimized-annadanam-normal.png",
        title:"Annadanam image"
    },
    {
        thubnailurl:"/Optimized-freedarshanam-thumbnail.png",
        zoomurl: "/Optimized-freedarshanam-normal.png",
        title:"Freedarshanam image"
    },
    {
        thubnailurl:"/Optimized-gosala-thumbnail.png",
        zoomurl: "/Optimized-gosala-normal.png",
        title:"Gosala image"

    },
    {
        thubnailurl:"/Optimized-ligthing-thumbnail.png",
        zoomurl: "/Optimized-ligthing-normal.png",
        title:"Ligthing image"

    },
    {
        thubnailurl:"/radham-thumbnail.png",
        zoomurl: "/radham-normal.png",
        title:"Radham image"

    },
    {
        thubnailurl:"/utsavamurthiabhishekam-thumbnail.png",
        zoomurl: "/utsavamurthiabhishekam-normal.png",
        title: "Utsavamurthiabhishekam"

    },
    {
        thubnailurl:"/vratham-thumbnail.png",
        zoomurl: "/vratham-normal.png",
        title:"Vratham image"

    },
    {        
        thubnailurl: "/Optimized-Granites3-thumbnail.png",
        zoomurl: "/Optimized-Granites3-normal.png",
        title:"Granites image"
    }]

    rowindex = -1
    imageindex=0
    p:any;
    constructor() { }
    ngOnInit() {
        console.log(AppSettings.IMAGES_ENDPOINT);
       

        this.imagearr = this.imagearr.map((item)=>{
            return {thubnailurl: AppSettings.IMAGES_ENDPOINT +item.thubnailurl ,
                      zoomurl: AppSettings.IMAGES_ENDPOINT + item.zoomurl,
                      title:item.title }
        })
        
        console.log(this.imageurl);
    }
     showcarousol(url,i){
         this.blnshowcarousol=true;
         this.imageurl = url
        this.imageindex=i;
        this.imagetitle = this.imagearr[this.imageindex].title;
     }
     
    nextcarousol(){
        this.imageindex=this.imageindex+1;
      this.imageurl =  this.imagearr[this.imageindex].zoomurl;
      this.imagetitle = this.imagearr[this.imageindex].title;
    }
    prevcarousol(){
        this.imageindex=this.imageindex -1;
        this.imageurl =  this.imagearr[this.imageindex].zoomurl;
        this.imagetitle = this.imagearr[this.imageindex].title;
    }
   
}