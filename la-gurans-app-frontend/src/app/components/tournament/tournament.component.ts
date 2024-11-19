import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Fixture } from '../../models/fixtures.model';

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
    ],
    [
      { name: 'Team J (10)', points: 0, played: 0 },
      { name: 'Team K (11)', points: 0, played: 0 },
      { name: 'Team L (12)', points: 0, played: 0 },
    ],
  ];
  standingsGroups35 = [
    [
      { name: 'Team A (1)', points: 0, played: 0 },
      { name: 'Team B (2)', points: 0, played: 0 },
      { name: 'Team C (3)', points: 0, played: 0 },
      { name: 'Team D (4)', points: 0, played: 0 },
    ],
    [
      { name: 'Team E (5)', points: 0, played: 0 },
      { name: 'Team F (6)', points: 0, played: 0 },
      { name: 'Team G (7)', points: 0, played: 0 },
      { name: 'Team H (8)', points: 0, played: 0 },
    ],
  ];

  fixtures: Fixture[] = [
    {
      time: '8:00 - 8:55',
      field1: 'A1 vs A2',
      field2: 'B4 vs B5',
    },
    {
      time: '9:00 - 9:55',
      field1: 'C7 vs C8',
      field2: 'D10 vs D11',
    },
    {
      time: '10:00 - 10:55',
      field1: 'A1 vs A3',
      field2: 'B4 vs B6',
    },
    {
      time: '11:00 - 11:55',
      field1: 'C7 vs C9',
      field2: 'D10 vs D12',
    },
    {
      time: '12:00 - 12:55',
      field1: 'A2 vs A3',
      field2: 'B5 vs B6',
    },
    {
      time: '1:00 - 1:55',
      field1: 'C8 vs C9',
      field2: 'D11 vs D12',
    },
  ];
  fixtures35: Fixture[] = [
    {
      time: '8:30 - 9:25',
      field1: 'A1 vs A2',
      field2: 'B5 vs B6',
    },
    {
      time: '9:30 - 10:25',
      field1: 'A3 vs A4',
      field2: 'B7 vs B8',
    },
    {
      time: '10:30 - 11:25',
      field1: 'A1 vs A3',
      field2: 'B5 vs B7',
    },
    {
      time: '11:30 - 12:25',
      field1: 'A2 vs A4',
      field2: 'B6 vs B8',
    },
    {
      time: '12:30 - 1:25',
      field1: 'A1 vs A4',
      field2: 'B5 vs B6',
    },
    {
      time: '2:30 - 3:25',
      field1: 'A2 vs A3',
      field2: 'B6 vs B7',
    },
  ];

  fixtures2: Fixture[] = [
    {
      time: '3:30 - 4:30',
      field1: '(Winner of A vs Runner up of B) - U',
      field2: '(Winner of C vs Runner up of D) - W',
    },
    {
      time: '4:30 - 5:30',
      field1: '(Winner of B vs Runner up of A) - V',
      field2: '(Winner of D vs Runner up of C) - X',
    },
  ];
  fixtures3: Fixture[] = [
    {
      time: '10:00 - 11:00',
      field1: '(Winner of U vs Winner of V) - Y',
      field2: '(Winner of W vs Winner of X) - Z',
    },
  ];
  fixtures4: Fixture[] = [
    {
      time: '2:30 - 3:30',
      field1: '(Winner of Y vs Winner of Z)',
      field2: '',
    },
  ];

  fixtures235: Fixture[] = [
    {
      time: '8:30 - 9:30',
      field1: '(Winner of A vs Runner up of B) - C',
      field2: '(Winner of B vs Runner up of A) - D',
    },
  ];
  fixtures335: Fixture[] = [
    {
      time: '1:00 - 2:00',
      field1: '(Winner of C vs Winner of D)',
      field2: '',
    },
  ];

  results = [
    { fixture: 'A1 vs A2', result: '' },
    { fixture: 'B4 vs B5', result: '' },
    { fixture: 'C7 vs C8', result: '' },
    { fixture: 'D10 vs D11', result: '' },
    { fixture: 'A1 vs A3', result: '' },
    { fixture: 'B4 vs B6', result: '' },
    { fixture: 'C7 vs C9', result: '' },
    { fixture: 'D10 vs D12', result: '' },
    { fixture: 'A2 vs A3', result: '' },
    { fixture: 'B5 vs B6', result: '' },
    { fixture: 'C8 vs C9', result: '' },
    { fixture: 'D11 vs D12', result: '' },
    { fixture: 'Winner of A vs Runner up of B', result: '' },
    { fixture: 'Winner of C vs Runner up of D', result: '' },
    { fixture: 'Winner of B vs Runner up of A', result: '' },
    { fixture: 'Winner of D vs Runner up of C', result: '' },
    { fixture: 'Winner of U vs Winner of V', result: '' },
    { fixture: 'Winner of W vs Winner of X', result: '' },
    { fixture: 'Winner of Y vs Winner of Z', result: '' },
  ];

  results35 = [
    { fixture: 'A1 vs A2', result: '' },
    { fixture: 'B5 vs B6', result: '' },
    { fixture: 'A3 vs A4', result: '' },
    { fixture: 'B7 vs B8', result: '' },
    { fixture: 'A1 vs A3', result: '' },
    { fixture: 'B5 vs B7', result: '' },
    { fixture: 'A2 vs A4', result: '' },
    { fixture: 'B6 vs B8', result: '' },
    { fixture: 'A1 vs A4', result: '' },
    { fixture: 'B5 vs B6', result: '' },
    { fixture: 'A1 vs A4', result: '' },
    { fixture: 'B6 vs B7', result: '' },
    { fixture: 'Winner of A vs Runner up of B', result: '' },
    { fixture: 'Winner of B vs Runner up of C', result: '' },
    { fixture: 'Winner of C vs Runner up of D', result: '' },
  ];

  // Track visibility for each section
  showGeneralRules = false;
  showSubstitutionRules = false;
  showKickOffRules = false;
  showGoalScoringRules = false;
  showTieBreakerRules = false;
  showTournamentRules = false;
  showTeams = false;
  show35Teams = false;

  toggleSection(section: string): void {
    switch (section) {
      case 'generalRules':
        this.showGeneralRules = !this.showGeneralRules;
        break;
      case 'kickOffRules':
        this.showKickOffRules = !this.showKickOffRules;
        break;
      case 'goalScoringRules':
        this.showGoalScoringRules = !this.showGoalScoringRules;
        break;
      case 'tiebreakerRules':
        this.showTieBreakerRules = !this.showTieBreakerRules;
        break;
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
    { name: 'Team 11', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Team 12', roster: ['Player L', 'Player M', 'Player N'] },
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
    { name: 'Team 5', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Team 6', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Team 7', roster: ['Player L', 'Player M', 'Player N'] },
    { name: 'Team 8', roster: ['Player A', 'Player B', 'Player C'] },
  ];

  showRoster35Index: number | null = null;

  // Toggle the roster visibility
  toggle35Roster(index: number) {
    this.showRoster35Index = this.showRoster35Index === index ? null : index;
  }
}
