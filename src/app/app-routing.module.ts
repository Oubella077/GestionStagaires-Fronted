import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireComponent } from './Components/stagiaire/stagiaire.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewStagiaireComponent } from './Components/stagiaire/view-stagiaire/view-stagiaire.component';
import { EditStagiaireComponent } from './Components/stagiaire/edit-stagiaire/edit-stagiaire.component';
import { AddStagiaireComponent } from './Components/stagiaire/add-stagiaire/add-stagiaire.component';
import { AbsentsComponent } from './Components/absents/absents.component';
import { StageComponent } from './Components/stage/stage.component';
import { ViewStageComponent } from './Components/stage/view-stage/view-stage.component';
import { EditStageComponent } from './Components/stage/edit-stage/edit-stage.component';
import { AddStageComponent } from './Components/stage/add-stage/add-stage.component';
import { ViewAbsentComponent } from './Components/absents/view-absent/view-absent.component';
import { EncadrantComponent } from './Components/encadrant/encadrant.component';
import { ViewEncadrantComponent } from './Components/encadrant/view-encadrant/view-encadrant.component';
import { EditEncadrantComponent } from './Components/encadrant/edit-encadrant/edit-encadrant.component';
import { AddEncadrantComponent } from './Components/encadrant/add-encadrant/add-encadrant.component';
import { DivisionComponent } from './Components/division/division.component';
import { ViewDivisionComponent } from './Components/division/view-division/view-division.component';
import { EditDivisionComponent } from './Components/division/edit-division/edit-division.component';
import { AddDivisionComponent } from './Components/division/add-division/add-division.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { AttestationComponent } from './Components/attestation/attestation.component';
import { LoginComponent } from './Components/login/login.component';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [

  {path:'menu', component:DashbordComponent,canActivate:[GuardGuard], children:[
    {path:"stagiaire", component:StagiaireComponent},
    {path:"view-stagiaire", component:ViewStagiaireComponent},
    {path:"edit-stagiaire", component:EditStagiaireComponent},
    {path:"add-stagiaire", component:AddStagiaireComponent},
  
    {path:'stage', component:StageComponent },
    {path:'view-stage', component:ViewStageComponent },
    {path:'edit-stage', component:EditStageComponent },
    {path:'add-stage', component:AddStageComponent },  
    
  
    {path:'absents', component:AbsentsComponent},
    {path:'view-absent', component:ViewAbsentComponent },
    {path:'add-absent', component:AbsentsComponent },
  
    {path:'encadrant', component:EncadrantComponent },
    {path:'view-encadrant', component:ViewEncadrantComponent },
    {path:'edit-encadrant', component:EditEncadrantComponent },
    {path:'add-encadrant', component:AddEncadrantComponent },
    
    {path:'division', component:DivisionComponent },
    {path:'view-division', component:ViewDivisionComponent },
    {path:'edit-division', component:EditDivisionComponent },
    {path:'add-division', component:AddDivisionComponent },
    
    {path:'attestation', component:AttestationComponent },

  ]},
  
  {path:'login', component:LoginComponent },
  {path:'**', component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
