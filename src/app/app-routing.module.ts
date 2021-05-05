import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//空路由，当路径为空时，导到home页，
const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
