//用来存放全局经常用到的指令、模块等
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  //imports里面的共享模块需要导出出去，才能让别的模块引用
  exports:[
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
  ]
})
export class ShareModule { }
