import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'list', component:ListComponent, canActivate :[AuthGuard] },
  {path:'Edit/:id', component:EditComponent},
  {path:'', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
