import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { StagiaireComponent } from './Components/stagiaire/stagiaire.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { AddStagiaireComponent } from './Components/stagiaire/add-stagiaire/add-stagiaire.component';
import { ViewStagiaireComponent } from './Components/stagiaire/view-stagiaire/view-stagiaire.component';
import { EncadrantComponent } from './Components/encadrant/encadrant.component';
import { AddEncadrantComponent } from './Components/encadrant/add-encadrant/add-encadrant.component';
import { EditEncadrantComponent } from './Components/encadrant/edit-encadrant/edit-encadrant.component';
import { ViewEncadrantComponent } from './Components/encadrant/view-encadrant/view-encadrant.component';
import { StageComponent } from './Components/stage/stage.component';
import { ViewStageComponent } from './Components/stage/view-stage/view-stage.component';
import { EditStageComponent } from './Components/stage/edit-stage/edit-stage.component';
import { AddStageComponent } from './Components/stage/add-stage/add-stage.component';
import { AbsentsComponent } from './Components/absents/absents.component';
import { AddAbsentComponent } from './Components/absents/add-absent/add-absent.component';
import { ViewAbsentComponent } from './Components/absents/view-absent/view-absent.component';
import { DivisionComponent } from './Components/division/division.component';
import { ViewDivisionComponent } from './Components/division/view-division/view-division.component';
import { EditDivisionComponent } from './Components/division/edit-division/edit-division.component';
import { AddDivisionComponent } from './Components/division/add-division/add-division.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { EditeAbsentComponent } from './Components/absents/edite-absent/edite-absent.component';
import { CommonModule } from '@angular/common';
import { EditStagiaireComponent } from './Components/stagiaire/edit-stagiaire/edit-stagiaire.component';
import { AttestationComponent } from './Components/attestation/attestation.component';
import { LoginComponent } from './Components/login/login.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { GuardGuard } from './guards/guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StagiaireComponent,
    AddStagiaireComponent,
    ViewStagiaireComponent,
    EncadrantComponent,
    AddEncadrantComponent,
    EditEncadrantComponent,
    ViewEncadrantComponent,
    StageComponent,
    ViewStageComponent,
    EditStageComponent,
    AddStageComponent,
    AbsentsComponent,
    AddAbsentComponent,
    ViewAbsentComponent,
    DivisionComponent,
    ViewDivisionComponent,
    EditDivisionComponent,
    AddDivisionComponent,
    DashbordComponent,
    EditeAbsentComponent,
    EditStagiaireComponent,
    AttestationComponent,
    LoginComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:AppHttpInterceptor, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
