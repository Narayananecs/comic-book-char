import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../../shared/character.service";
import Sample from "../../../assets/data.json";
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characters : CharacterService,
    private router : Router) { }
  charactersList : any = [];
  filter : string = "";
  currentPageNo : number = 1
  pageNumbers = [1,2,3,4,5,6];
  ngOnInit(): void {
    this.getCharactersBasedOnPagination(1)
  }

  navigatePage(number) {
    this.currentPageNo = +number
    console.log(number);
    this.getCharactersBasedOnPagination(+number)
  }

  getCharactersBasedOnPagination(index : number) {
    if(index == 1)
    index = 0;
    else 
    index = (index * 9) - 10;
    this.charactersList.length = 0;
    let endRange =  index + 9;
    endRange = endRange>= Sample.results.length ? Sample.results.length : endRange 
    for(let i = index ; i < endRange;i++  ) {
      this.charactersList.push(Sample.results[i])
    }
    console.log(this.charactersList);
  }

  nextPage() {
    this.navigatePage(++this.currentPageNo)
  }

  prevPage() {
    this.navigatePage(--this.currentPageNo)
  }

  navigateCharacter(number) {
    console.log(number);
    this.router.navigate(['characters/'+number.id])
  }
}
