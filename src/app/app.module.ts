import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PocHomeComponent } from './poc-home/poc-home.component';
import { PocHeaderComponent } from './poc-header/poc-header.component';
import { PocFooterComponent } from './poc-footer/poc-footer.component';
import { UserAdditionComponent } from './user-addition/user-addition.component';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { UserViewComponent } from './user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PocHomeComponent,
    PocHeaderComponent,
    PocFooterComponent,
    UserAdditionComponent,
    UserValidationComponent,
    UserViewComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
