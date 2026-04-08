import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { CharacterlistComponent } from './components/characterlist/characterlist';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'characters', component: CharacterlistComponent },
  { path: 'details/:id', component: CharacterdetailsComponent }
];