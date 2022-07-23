import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoComponent } from './components/logo.component';
import { PencilSquareIconComponent } from './icons/pencil-square-icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteAdderButtonComponent } from './components/note-adder-button/note-adder-button.component';
import { PlusIconComponent } from './icons/plus-icon.component';
import { NoteRepository } from './repositories/note.repository';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotesGridComponent } from './components/notes-grid/notes-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    PencilSquareIconComponent,
    NavbarComponent,
    NoteAdderButtonComponent,
    PlusIconComponent,
    NoteCardComponent,
    NotesGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NoteRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
