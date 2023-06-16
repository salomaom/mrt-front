import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationComponent } from './pages/validation/validation.component';

const routes: Routes = [{ path: '', component: ValidationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
