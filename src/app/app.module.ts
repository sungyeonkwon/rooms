import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomItemComponent } from './rooms/room-list/room-item/room-item.component';
import { RoomInsideComponent } from './rooms/room-list/room-inside/room-inside.component';

const appRoutes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'room/:id', component: RoomInsideComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomInsideComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
