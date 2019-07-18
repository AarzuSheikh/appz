import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Dataprovider} from './dataprovider';
import { Observable,  of as observableOf } from 'rxjs';
import {map} from 'rxjs/operators';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {
  private geturl='/api';
  private posturl='/api';
  public myurl='/api';
  public isauth:boolean=false;
  dbobj={};
  public fetchdata=new Dataprovider();

  constructor(private http:HttpClient) { }

  getdata():Observable<Dataprovider[]>{
    return this.http.get<Dataprovider[]>(this.geturl).pipe(map(res=>res));
  }

  postdata(react):Observable<Dataprovider[]>{
  return this.http.post<Dataprovider[]>(this.posturl,react).pipe(map(res=>res));
}

checkauth(authmodel): Observable<boolean>{    
  this.http.post(this.myurl,authmodel).subscribe(res=>{
    if(res==null){
      this.isauth=false;
      console.log("Subscribe returned : "+ this.isauth);
    }
    else if(res!=null){
      this.dbobj=res;
      
      this.fetchdata["firstname"] = this.dbobj["firstname"];
      this.fetchdata["email"] = this.dbobj["email"];
      this.fetchdata["password"] = this.dbobj["password"];
      this.isauth=true;
      console.log("Subscribe returned : "+ this.isauth);
    }
  });
  return observableOf(this.isauth);
}

sendservice(){
  return this.fetchdata;
}
}
