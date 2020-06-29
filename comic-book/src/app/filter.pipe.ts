import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'searchFilter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue: string): unknown {
    let searchResult = [];
        if(value.length == 0 || filterValue =="" || filterValue == undefined){
            return value;
        }
        for(let i= 0 ;i<value.length ; i++) {
            if(value[i]["name"].toLowerCase() == filterValue.toLowerCase() )
            searchResult.push(value[i]);
        }
        return searchResult;
  }

}
