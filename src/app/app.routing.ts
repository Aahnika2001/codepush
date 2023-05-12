import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { ValidationComponent } from './validation/validation.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'; // Import the PrivacyPolicyComponent



const routes: Routes =[
    { path: 'home',             component: ValidationComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',         component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',            component: ValidationComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'questions',        component: QuestionsComponent },
    { path: 'contactus',        component: ContactusComponent},
    { path: 'profile settings', component: SettingsComponent},
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
