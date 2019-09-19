import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AllThreadsComponent } from './components/threads/all-threads/all-threads.component';
import { NewThreadsComponent } from './components/threads/new-threads/new-threads.component';
import { SingleThreadsComponent } from './components/threads/single-threads/single-threads.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewThreadsComponent },
  { path: 'single', component: SingleThreadsComponent },
  { path: '', component: AllThreadsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
