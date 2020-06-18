import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
    {path: '', component: HomeFourComponent},
    {path: 'error', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }