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
import { ViewNoteComponent } from './pages/view-note/view-note.component';
import { ArrowLeftIconComponent } from './icons/arrow-left-icon.component';
import { AutosizeTextareaDirective } from './directives/autosize-textarea.directive';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu.component';
import { MenuListComponent } from './components/menu-list.component';
import { MenuItemComponent } from './components/menu-item.component';
import { MenuButtonComponent } from './components/menu-button.component';
import { ThreeDotsVerticalIconComponent } from './icons/three-dots-vertical-icon.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { PaletteIconComponent } from './icons/palette-icon.component';

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
    ViewNoteComponent,
    ArrowLeftIconComponent,
    AutosizeTextareaDirective,
    MenuComponent,
    MenuButtonComponent,
    MenuListComponent,
    MenuItemComponent,
    ThreeDotsVerticalIconComponent,
    ColorPickerComponent,
    PaletteIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NoteRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
