import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectComponent } from './pages/proyect/proyect.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "nosotros",
    component: AboutComponent
  },
  {
    path: "servicios",
    component: ServiceComponent
  },
  // {
  //   path: "proyectos",
  //   component: ProyectComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
