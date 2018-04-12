import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService} from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    UserTileComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
