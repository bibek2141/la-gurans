import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MembersComponent } from './components/members/members.component';
import { TournamentComponent } from './components/tournament/tournament.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'contact-us', component: ContactComponent },
];
