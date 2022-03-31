import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';
import { AngularJsWelcomePageComponent } from './angular-js-welcome-page/angular-js-welcome-page.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: '', component:AngularJsWelcomePageComponent},
  {path: 'books', component:BootstrapTableComponent},
  {path: 'update-book', component:UpdateBookComponent},
  {path: 'add-new-book', component:AddNewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
