import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AppMaterialModule} from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule,MatExpansionModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MoreButtonDirective } from './more-button.directive';
import { NoteComponent } from './components/note/note.component';
import { ViewNoteComponent } from './components/view-note/view-note.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PinnedNoteComponent } from './components/pinned-note/pinned-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { TrashedNotesComponent } from './components/trashed-notes/trashed-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LabelComponent } from './components/label/label.component';
import { RemainderComponent } from './components/remainder/remainder.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    UpdateNoteComponent,
    ArchiveNotesComponent,
    TrashedNotesComponent,
    PinnedNoteComponent,
    SideNavComponent,
    ViewNoteComponent,
    NoteComponent,
    MoreButtonDirective,
    LabelComponent,
    RemainderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule
  ],
  entryComponents: [UpdateNoteComponent,PinnedNoteComponent],

  providers: [{provide: MatDialogRef, useValue: {}},{ provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
