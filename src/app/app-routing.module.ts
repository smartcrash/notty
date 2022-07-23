import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewNoteComponent } from './pages/view-note/view-note.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'n/:id', component: ViewNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
