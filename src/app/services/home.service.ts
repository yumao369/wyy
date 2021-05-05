import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG, ServicesModule } from './services.module';
import{Banner}from './data-types/common.types';
import{map}from 'rxjs/internal/operators';

//provideIn表示此service由哪个模块提供，root默认是appmodule提供
@Injectable({
  // providedIn: 'root'
  providedIn:ServicesModule
})
export class HomeService {

  constructor(private http:HttpClient,@Inject(API_CONFIG) private uri:string) { }

  //获取轮播图的方法，返回一个observable的banner数组
  //pipe方法，将一个observable作为输入并生成另一个observable作为输出
  getBanners():Observable<Banner[]>{
    return this.http.get(this.uri+'banner')
    .pipe(map((res:{banners:Banner[]})=>res.banners));
  }
}
