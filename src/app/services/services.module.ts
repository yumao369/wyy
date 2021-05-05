//调接口以及写服务全部会放在这个module里面
import { InjectionToken, NgModule } from '@angular/core';

//令牌
export const API_CONFIG=new InjectionToken('ApoConfigToken');

@NgModule({
  declarations: [],
  imports: [
   
  ],
  providers:[
    {provide:API_CONFIG,useValue:'http://localhost:3000/'}
  ]
})
export class ServicesModule { }
