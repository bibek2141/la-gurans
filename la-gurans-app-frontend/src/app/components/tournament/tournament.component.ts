import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fixture, Fixture35 } from '../../models/fixtures.model';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.css',
})
export class TournamentComponent {
  selectedTab: string = 'fixtures';
  selectedMainTab: string = 'regular';

  selectMainTab(tab: string) {
    this.selectedMainTab = tab;
    this.selectedTab = 'fixtures';
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  standingsGroups = [
    [
      { name: 'Team A (1)', points: 0, played: 0 },
      { name: 'Team B (2)', points: 0, played: 0 },
      { name: 'Team C (3)', points: 0, played: 0 },
    ],
    [
      { name: 'Team D (4)', points: 0, played: 0 },
      { name: 'Team E (5)', points: 0, played: 0 },
      { name: 'Team F (6)', points: 0, played: 0 },
    ],
    [
      { name: 'Team G (7)', points: 0, played: 0 },
      { name: 'Team H (8)', points: 0, played: 0 },
      { name: 'Team I (9)', points: 0, played: 0 },
      { name: 'Team J (10)', points: 0, played: 0 },
    ],
  ];
  standingsGroups35 = [
    [
      { name: 'Team A (1)', points: 0, played: 0 },
      { name: 'Team B (2)', points: 0, played: 0 },
      { name: 'Team C (3)', points: 0, played: 0 },
      { name: 'Team D (4)', points: 0, played: 0 },
    ],
  ];

  fixtures: Fixture[] = [
    {
      time: '8:30 - 9:25',
      field1: 'A1 vs A2',
      field2: 'B4 vs B5',
    },
    {
      time: '9:30 - 10:25',
      field1: 'C7 vs C8',
      field2: 'C9 vs C10',
    },
    {
      time: '10:30 - 11:25',
      field1: 'A1 vs A3',
      field2: 'B4 vs B6',
    },
    {
      time: '12:00 - 12:55',
      field1: 'C7 vs C9',
      field2: 'C8 vs C10',
    },
    {
      time: '1:00 - 1:55',
      field1: 'A2 vs A3',
      field2: 'B5 vs B6',
    },
    {
      time: '2:00 - 2:55',
      field1: 'C7 vs C10',
      field2: 'C8 vs C9',
    },
  ];
  fixtures35: Fixture35[] = [
    {
      time: '9:00 - 9:55',
      field3: 'A1 vs A2',
    },
    {
      time: '10:00 - 10:55',
      field3: 'A3 vs A4',
    },
    {
      time: '11:00 - 11:55',
      field3: 'A1 vs A3',
    },
    {
      time: '12:30 - 1:25',
      field3: 'A2 vs A4',
    },
    {
      time: '1:30 - 2:25',
      field3: 'A1 vs A4',
    },
    {
      time: '2:30 - 3:25',
      field3: 'A2 vs A3',
    },
  ];

  fixtures2: Fixture[] = [
    {
      time: '4:00 - 4:55',
      field1: '(Winner of A vs Runner up of B) - U',
      field2: '(Winner of C vs 2nd Best Runner up of D) - W',
    },
  ];
  fixtures3: Fixture[] = [
    {
      time: '4:00 - 4:55',
      field1: '(Winner of B vs Runner up of A) - V',
      field2: '(Runner up of C vs Best Runner up of D) - X',
    },
  ];
  fixtures4: Fixture[] = [
    {
      time: '9:30 - 10:35',
      field1: '(Winner of U vs Winner of V) - Y',
      field2: '',
    },
  ];
  fixtures5: Fixture[] = [
    {
      time: '10:45 - 11:50',
      field1: '(Winner of W vs Winner of X) - Z',
      field2: '',
    },
  ];
  fixtures6: Fixture[] = [
    {
      time: '2:00 - 3:05',
      field1: '(Winner of Y vs Winner of Z)',
      field2: '',
    },
  ];

  fixtures235: Fixture35[] = [
    {
      time: '12:00 - 1:05',
      field3: '(Winner of A vs Runner Up of A)',
    },
  ];

  results = [
    { fixture: 'A1 vs A2', result: '' },
    { fixture: 'B3 vs B5', result: '' },
    { fixture: 'C7 vs C8', result: '' },
    { fixture: 'C9 vs C10', result: '' },
    { fixture: 'A1 vs A3', result: '' },
    { fixture: 'B4 vs B6', result: '' },
    { fixture: 'C7 vs C9', result: '' },
    { fixture: 'C8 vs C10', result: '' },
    { fixture: 'A2 vs A3', result: '' },
    { fixture: 'B5 vs B6', result: '' },
    { fixture: 'C7 vs C10', result: '' },
    { fixture: 'C8 vs C9', result: '' },
    { fixture: '(Winner of A vs Runner up of B) - U', result: '' },
    { fixture: '(Winner of C vs 2nd Best Runner up of D) - W', result: '' },
    { fixture: '(Winner of B vs Runner up of A) - V', result: '' },
    { fixture: '( Runner up of C vs Best Runner up of D) - X', result: '' },
    { fixture: '(Winner of U vs Winner of V) - Y', result: '' },
    { fixture: '(Winner of W vs Winner of X) - Z', result: '' },
    { fixture: '(Winner of Y vs Winner of Z) ', result: '' },
  ];

  results35 = [
    { fixture: 'A1 vs A2', result: '' },
    { fixture: 'A3 vs A4', result: '' },
    { fixture: 'A1 vs A3', result: '' },
    { fixture: 'A2 vs A4', result: '' },
    { fixture: 'A1 vs A4', result: '' },
    { fixture: 'A2 vs A3', result: '' },
    { fixture: 'Winner of A vs Runner up of A', result: '' },
  ];

  showTournamentRules = false;
  showTeams = false;
  show35Teams = false;

  toggleSection(section: string): void {
    switch (section) {
      case 'tournamentRules':
        this.showTournamentRules = !this.showTournamentRules;
        break;
      case 'teamsRoster':
        this.showTeams = !this.showTeams;
        break;
      case 'teams35Roster':
        this.show35Teams = !this.show35Teams;
        break;
      default:
        break;
    }
  }

  teamsRegular = [
    { name: 'LA Gurans', roster: ['Player 1', 'Player 2', 'Player 3'] },
    { name: 'Team 2', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Team 3', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Team 4', roster: ['Player L', 'Player M', 'Player N'] },
    { name: 'Team 5', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Team 6', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Team 7', roster: ['Player L', 'Player M', 'Player N'] },
    { name: 'Team 8', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Team 9', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Team 10', roster: ['Player L', 'Player M', 'Player N'] },
  ];

  showRosterIndex: number | null = null;

  // Toggle the roster visibility
  toggleRoster(index: number) {
    this.showRosterIndex = this.showRosterIndex === index ? null : index;
  }

  teams35 = [
    { name: 'LA Gurans', roster: ['Player 1', 'Player 2', 'Player 3'] },
    { name: 'Team 2', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Team 3', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Team 4', roster: ['Player L', 'Player M', 'Player N'] },
  ];

  showRoster35Index: number | null = null;

  // Toggle the roster visibility
  toggle35Roster(index: number) {
    this.showRoster35Index = this.showRoster35Index === index ? null : index;
  }
}
