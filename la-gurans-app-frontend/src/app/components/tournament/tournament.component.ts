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
      time: '10:00 - 10:55',
      field1: 'A1 vs A2',
      field2: 'B4 vs B5',
      field3: 'C7 vs C8',
    },
    {
      time: '12:00 - 12:55',
      field1: 'A1 vs A3',
      field2: 'B4 vs B6',
      field3: 'C7 vs C9',
    },
    {
      time: '2:00 - 2:55',
      field1: 'A2 vs A3',
      field2: 'B5 vs B6',
      field3: 'C8 vs C9',
    },
  ];
  fixtures35: Fixture35[] = [
    {
      time: '11:00 - 11:55',
      field1: 'A1 vs A2',
      field2: 'A3 vs A4',
    },
    {
      time: '1:00 - 1:55',
      field1: 'A1 vs A3',
      field2: 'A2 vs A4',
    },
  ];

  fixtures2: Fixture[] = [
    {
      time: '4:00 - 4:55',
      field1: 'A (Seed 1 vs Seed 8)',
      field2: 'B (Seed 3 vs Seed 6)',
      field3: '',
    },
  ];
  fixtures3: Fixture[] = [
    {
      time: '4:00 - 4:55',
      field1: 'C (Seed 2 vs Seed 7)',
      field2: 'D (Seed 4 vs Seed 5)',
      field3: '',
    },
  ];
  fixtures4: Fixture[] = [
    {
      time: '10:30 - 11:45',
      field1: '(Winner of Poll 1A vs Winner of Poll 1B)',
      field2: '(Winner of Poll 2A vs Winner of Poll 2B)',
      field3: '',
    },
  ];
  fixtures6: Fixture[] = [
    {
      time: '2:00 - 3:05',
      field1: '(Winner of Poll 1 vs Winner of Poll 2)',
      field2: '',
      field3: '',
    },
  ];

  fixtures335: Fixture35[] = [
    {
      time: '9:30 - 10:25',
      field1: 'A1 vs A4',
      field2: 'A2 vs A3',
    },
  ];

  fixtures235: Fixture35[] = [
    {
      time: '12:30 - 1:35',
      field1: '(Winner of A vs Runner Up of A)',
      field2: '',
    },
  ];

  results = [
    { fixture: 'A1 vs A2', result: '' },
    { fixture: 'B4 vs B5', result: '' },
    { fixture: 'C7 vs C8', result: '' },
    { fixture: 'A1 vs A3', result: '' },
    { fixture: 'B4 vs B6', result: '' },
    { fixture: 'C7 vs C9', result: '' },
    { fixture: 'A2 vs A3', result: '' },
    { fixture: 'B5 vs B6', result: '' },
    { fixture: 'C8 vs C9', result: '' },
    { fixture: 'A (Seed 1 vs Seed 8)', result: '' },
    { fixture: 'B (Seed 3 vs Seed 6)', result: '' },
    { fixture: 'C (Seed 2 vs Seed 7)', result: '' },
    { fixture: 'D (Seed 4 vs Seed 5)', result: '' },
    { fixture: '(Winner of Poll 1A vs Winner of Poll 1B)', result: '' },
    { fixture: '(Winner of Poll 2A vs Winner of Poll 2B)', result: '' },
    { fixture: '(Winner of 1 vs Winner of 2) ', result: '' },
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
    {
      name: 'LA Gurans Red',
      roster: [
        'Sajal Nepal (GK)',
        'Ronal Dhungel',
        'Shlok Wagle',
        'Kritishwa Aryal',
        'Sandesh Parajuli',
        'Sohan Thapa',
        'Ajay KC',
        'Manish Khadka',
        'Shreeyash Dhakal',
        'Nikol Shrestha',
        'Aakash Bhandari',
        'Bibek Adhikari',
      ],
    },
    {
      name: 'LA Gurans Blue',
      roster: [
        'Kushal Khattri',
        'Aayush Bhattarai',
        'Saurav Limbu',
        'Sagar Limbu',
        'Nabin Rimal',
        'Keshab Neupane',
        'Bikesh Shrestha',
        'Paswat Shah',
        'Sujit Gurung',
        'Amit Gurung',
        'Ramesh Dangal',
        'Aaryav Adhikari',
      ],
    },
    {
      name: 'Sagarmatha Warriors',
      roster: ['Player X', 'Player Y', 'Player Z'],
    },
    { name: 'Gorkhali Squad', roster: ['Player L', 'Player M', 'Player N'] },
    { name: 'Texas FC Red', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Texas FC Blue', roster: ['Player X', 'Player Y', 'Player Z'] },
    {
      name: 'Dallas Gurkhas White',
      roster: ['Player L', 'Player M', 'Player N'],
    },
    {
      name: 'Dallas Gurkhas Red',
      roster: ['Player A', 'Player B', 'Player C'],
    },
    {
      name: 'Sunnyvale Football Force',
      roster: ['Player X', 'Player Y', 'Player Z'],
    },
  ];

  showRosterIndex: number | null = null;

  // Toggle the roster visibility
  toggleRoster(index: number) {
    this.showRosterIndex = this.showRosterIndex === index ? null : index;
  }

  teams35 = [
    { name: 'LA Gurans', roster: ['Player 1', 'Player 2', 'Player 3'] },
    { name: 'DFW Himalayas FC', roster: ['Player A', 'Player B', 'Player C'] },
    { name: 'Bay Area FC', roster: ['Player X', 'Player Y', 'Player Z'] },
    { name: 'Nepal Seattle FC', roster: ['Player L', 'Player M', 'Player N'] },
  ];

  showRoster35Index: number | null = null;

  // Toggle the roster visibility
  toggle35Roster(index: number) {
    this.showRoster35Index = this.showRoster35Index === index ? null : index;
  }
}
