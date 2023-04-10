import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentComponent } from './components/absent/absent.component';
import { TirageAuSortComponent } from './components/tirage-au-sort/tirage-au-sort.component';

const routes: Routes = [
  { path: '', component: TirageAuSortComponent },
  { path: 'absents', component: AbsentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
