import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomItemComponent } from './rooms/room-list/room-item/room-item.component';
import { RoomInsideComponent } from './rooms/room-list/room-inside/room-inside.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './admin/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomInsideComponent,
    PageNotFoundComponent,
    LoadingSpinnerComponent,
    AdminComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
