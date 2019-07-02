import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { AdminComponent } from './admin/admin.component'; 
import { EditComponent } from './admin/edit/edit.component'; 
import { RoomInsideComponent } from './rooms/room-list/room-inside/room-inside.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'room/:id', component: RoomInsideComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/edit', component: EditComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    [RouterModule]
  ]
})  
export class AppRoutingModule {

}