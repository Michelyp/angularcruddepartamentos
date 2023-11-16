import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceDepartamentos } from './services/service.departamentos';
import { InsertardepartamentoComponent } from './components/insertardepartamento/insertardepartamento.component';
import { EditdepartamentoComponent } from './components/editdepartamento/editdepartamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InsertardepartamentoComponent,
    EditdepartamentoComponent
  ],
  imports: [
    BrowserModule,
      routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProvider, ServiceDepartamentos],
  bootstrap: [AppComponent]
})
export class AppModule { }
