import { HttpClientModule } from '@angular/common/http';
import { TaskProviderService } from './task-provider.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule, Routes } from '@angular/router';

/*import { Task } from './task';

const APU_URL = '/api/task';
const taskFactory = () => {
  if (language == 'fr'){
    return new Task()
  }
  return new Task();
};*/

const appRoutes: Routes = [
  {path: 'todolist', component: NavListComponent },
  {path: 'create', component: CreateComponent },
  { path: '', redirectTo: 'todolist', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavListComponent,
    DetailComponent,
    CreateComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    TaskProviderService
    /* ,{provide: TaskProviderService, useClass: TaskProviderService},
    // Equivalent TaskProviderService
    { provide: TaskProviderService, useExisting: TaskProviderService }, // Crée un alias sur un service existant (reference)
    { provide: Task, useValue: { name: 'coucou' } },
    //va permettre par exemple de récupérer quelquechose à partir d'un objet littéral
    { provide: Task, useFactory: taskFactory, deps: ['fr]}
    // Va permettre de décrire quelles sont les règles à appliquer, de passer des paramètres au niveau du provider (si besoin)
    */ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
