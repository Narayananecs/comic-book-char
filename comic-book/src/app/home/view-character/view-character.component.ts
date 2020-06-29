import { Component, OnInit } from '@angular/core';
import data from "../../../assets/characterdata.json";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }
  characterData : any = data;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {
      let characterId = data["id"]
      console.log(data["id"]);
      for(let key in this.characterData) {
        if(key == characterId) {
          let value = this.characterData[key].results;
          this.characterData = value
        console.log(value);
        }
      }
    })   
  }

}
