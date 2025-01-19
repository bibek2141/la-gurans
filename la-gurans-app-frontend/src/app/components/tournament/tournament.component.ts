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
      { name: 'Texas FC Red', points: 6, played: 2 },
      { name: 'LA Gurans Red', points: 3, played: 2 },
      { name: 'Gorkhali Squad FC', points: 0, played: 2 },
    ],
    [
      { name: 'Dallas Gurkhas White', points: 3, played: 2 },
      { name: 'LA Gurans Blue', points: 3, played: 2 },
      { name: 'Sunnyvale FC', points: 3, played: 2 },
    ],
    [
      { name: 'Dallas Gurkhas Red', points: 6, played: 2 },
      { name: 'Texas FC Blue', points: 3, played: 2 },
      { name: 'Sagarmatha Warriors FC', points: 0, played: 2 },
    ],
  ];
  standingsGroups35 = [
    [
      { name: 'Nepal Seattle FC', points: 4, played: 2 },
      { name: 'DFW Himalayas', points: 4, played: 2 },
      { name: 'LA Gurans', points: 3, played: 2 },
      { name: 'Bay Area FC', points: 0, played: 2 },
    ],
  ];

  fixtures: Fixture[] = [
    {
      time: '10:00 - 10:55',
      field1: 'Gorkhali Squad FC vs LA Gurans Red',
      field2: 'Dallas Gurkhas White vs LA Gurans Blue',
      field3: 'Sagarmatha Warriors FC vs Dallas Gurkhas Red',
    },
    {
      time: '12:00 - 12:55',
      field1: 'Gorkhali Squad FC vs Texas FC Red',
      field2: 'Dallas Gurkhas White vs Sunnyvale FC',
      field3: 'Sagarmatha Warriors FC vs Texas FC Blue',
    },
    {
      time: '2:00 - 2:55',
      field1: 'LA Gurans Red vs Texas FC Red',
      field2: 'LA Gurans Blue vs Sunnyvale FC',
      field3: 'Dallas Gurkhas Red vs Texas FC Blue',
    },
  ];
  fixtures2: Fixture[] = [
    {
      time: '4:00 - 4:55',
      field1: 'A (Winner) vs D1 (Texas FC Red Vs Dallas Gurkhas FC White)',
      field2: 'C (Winner)vs D2 (Dallas Gurkhas Red vs Gorkhali Squad)',
      field3: '',
    },
  ];
  fixtures3: Fixture[] = [
    {
      time: '4:00 - 4:55',
      field1: 'B (Winner)vs C(Runner up) (Sunnyvale FC vs Texas FC Blue)',
      field2: 'B(Runner up) vs A (Runner up) LA Gurans Blue Vs LA Gurans Red',
      field3: '',
    },
  ];
  fixtures4: Fixture[] = [
    {
      time: '10:30 - 11:45',
      field1: '(LA Gurans Blue vs Texas FC Blue) - 1',
      field2: '(Texas FC Red vs Dallas Gurkhas Red) - 2',
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
  fixtures35: Fixture35[] = [
    {
      time: '11:00 - 11:55',
      field1: 'Nepal Seattle FC vs DFW Himalayas',
      field2: 'Bay Area FC vs LA Gurans',
    },
    {
      time: '1:00 - 1:55',
      field1: 'Nepal Seattle FC vs Bay Area FC',
      field2: 'DFW Himalayas vs LA Gurans',
    },
  ];
  fixtures235: Fixture35[] = [
    {
      time: '12:30 - 1:35',
      field1: '(Winner of A vs Runner Up of A)',
      field2: '',
    },
  ];

  fixtures335: Fixture35[] = [
    {
      time: '9:30 - 10:25',
      field1: 'Nepal Seattle FC vs LA Gurans',
      field2: 'DFW Himalayas vs Bay Area FC',
    },
  ];

  results = [
    { fixture: 'Gorkhali Squad FC vs LA Gurans Red', result: '1-3' },
    { fixture: 'Dallas Gurkhas White vs LA Gurans Blue', result: '2-1' },
    { fixture: 'Sagarmatha Warriors FC vs Dallas Gurkhas Red', result: '0-9' },
    { fixture: 'Gorkhali Squad FC vs Texas FC Red', result: '0-8' },
    { fixture: 'Dallas Gurkhas White vs Sunnyvale FC', result: '1-3' },
    { fixture: 'Sagarmatha Warriors FC vs Texas FC Blue', result: '0-7' },
    { fixture: 'LA Gurans Red vs Texas FC Red', result: '1-10' },
    { fixture: 'LA Gurans Blue vs Sunnyvale FC', result: '4-3' },
    { fixture: 'Dallas Gurkhas Red vs Texas FC Blue', result: '2-1' },
    {
      fixture: 'A (Winner) vs D1 (Texas FC Red Vs Dallas Gurkhas White)',
      result: '3-1',
    },
    {
      fixture: 'C (Winner) vs D2 (Dallas Gurkhas Red vs Gorkhali Squad)',
      result: '3-8',
    },
    {
      fixture: 'B (Winner) vs C (Runner Up) (Sunnyvale FC vs Texas FC Blue)',
      result: '4-8',
    },
    {
      fixture:
        'B (Runner Up) vs A (Runner Up) (LA Gurans Blue Vs LA Gurans Red)',
      result: '3-0',
    },
    { fixture: '(LA Gurans Blue vs Texas FC Blue) - 1', result: '' },
    { fixture: '(Texas FC Red vs Dallas Gurkhas Red) - 2', result: '' },
    { fixture: '(Winner of Poll 1 vs Winner of Poll 2) ', result: '' },
  ];

  results35 = [
    { fixture: 'Nepal Seattle FC vs DFW Himalayas', result: '3-3' },
    { fixture: 'Bay Area FC vs LA Gurans', result: '1-3' },
    { fixture: 'Nepal Seattle FC vs Bay Area FC', result: '8-1' },
    { fixture: 'DFW Himalayas vs LA Gurans', result: '2-1' },
    { fixture: 'Nepal Seattle FC vs LA Gurans', result: '' },
    { fixture: 'DFW Himalayas vs A3', result: '' },
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
      name: 'LA Gurans Blue',
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
      name: 'LA Gurans Red',
      roster: [
        'Bikesh Shrestha',
        'Aayush Bhattarai',
        'Kushal Khattri',
        'Saurav Limbu',
        'Sagar Limbu',
        'Nabin Rimal',
        'Santosh Parajuli',
        'Paswat Shah',
        'Sujit Gurung',
        'Amit Gurung',
        'Ramesh Dangal',
        'Aryan Pathak',
      ],
    },
    {
      name: 'Sagarmatha Warriors FC',
      roster: [
        'Saksham Thapa',
        'Nibesh Pandey',
        'Dhiraj Achammi',
        'Rohan Pandey',
        'Pratik Lamichhane',
        'Siyon Shrestha',
        'Arish Adhikari',
        'Rijan Adhikari',
        'Subash Sapkota',
        'Kushan Rana',
        'Bijesh Dhakal',
        'David Karki',
      ],
    },
    {
      name: 'Gorkhali Squad FC',
      roster: [
        'Santosh Adhikari',
        'Ram Paudel',
        'Bikash Thakuri',
        'Bijay Thapa',
        'Peshal Thapa',
        'Prajwal Shrestha',
        'Keshab Acharya',
        'Resham Lama',
        'Prem Kumar Ghale',
        'Sandip Dahal',
        'Aryan Silwal',
        'Ananta Timilsina',
      ],
    },
    {
      name: 'Texas FC Red',
      roster: [
        'Siddhartha Khadka',
        'Dhan Chhetri',
        'Sanjay Gurung',
        'Purna Khawaz',
        'Partap Subba',
        'Sanjok Lama',
        'Rijan Gurung',
        'Nischal Pokhrel',
        'Assish Tolangi',
        'AJ Magar',
      ],
    },
    {
      name: 'Texas FC Blue',
      roster: [
        'Pujan Thapa Magar',
        'Prabin Basnet',
        'Bikash Magar',
        'Bishal Darlami',
        'Sajan Magar',
        'Mahendra Khanal',
        'Monoj Chuwan',
        'Sagar Bhattarai',
        'Salman Khan',
        'Roshan Gurung',
        'Saugat Rai',
        'Sudeep Tamang',
      ],
    },
    {
      name: 'Dallas Gurkhas White',
      roster: [
        'Kushal Timalsina',
        'Sudu Subba',
        'Govinda KC',
        'Subham Basnet',
        'Nirakar KC',
        'Ram Devkota',
        'Pratik Thapa',
        'Niranjan KC',
        'Ayush Thapa',
        'Nabin KC',
        'Gyapan Pathak',
        'Binod Bista',
      ],
    },
    {
      name: 'Dallas Gurkhas Red',
      roster: [
        'Rajendra Thapa',
        'Parth Thapa',
        'Bijay Tamang',
        'Umesh Pandey',
        'Roshan Devkota',
        'Ashish Gurung',
        'Ansil Khatri',
        'Rojin Prajapati',
        'Riwas Prasai',
        'Arogaya Shrestha',
        'Tenzin Samdup',
        'Dave Rijal',
      ],
    },
    {
      name: 'Sunnyvale Football Force',
      roster: [
        'Anubhav Bhattarai',
        'Eakraj Raut',
        'Aryaman Dahal',
        'Salil Subedi',
        'Suraj Thapa',
        'Nabin Gurung',
        'Sonam Budhathoki',
        'Yugal Magar',
        'Prakat Rijal',
        'Bhanu Raut',
        'Dipesh Chhetri',
        'Prasanth Thapa',
      ],
    },
  ];

  showRosterIndex: number | null = null;

  // Toggle the roster visibility
  toggleRoster(index: number) {
    this.showRosterIndex = this.showRosterIndex === index ? null : index;
  }

  teams35 = [
    {
      name: 'LA Gurans',
      roster: [
        'Sanil Shrestha',
        'Surendra Gurung',
        'Raju Aryal',
        'Sabin Basula',
        'Ashis Pradhan',
        'Sudip Basnet',
        'Ayush Singh',
        'Mishan Giri',
        'Raman Chalise',
        'Mahesh R Neupane',
        'Sushanta Singh',
        'Amit Gurung',
      ],
    },
    {
      name: 'DFW Himalayas FC',
      roster: [
        'Niraj Thapa',
        'Dinesh Thapa',
        'Bharat Thapa',
        'Deepak Rayamajhi',
        'Sandesh Sangroula',
        'Naseeb Bista',
        'Parmithus Khadka',
        'Sudeep Gurung',
        'Buddha Gurung',
        'Yunal Malla',
        'Ganesh Ghising',
        'Suresh Choudhary',
      ],
    },
    {
      name: 'Bay Area FC',
      roster: [
        'Ashutosh Parajuli',
        'Sandesh Siwakoti',
        'Ravi Shrestha',
        'Rahil Taulaje',
        'Basanta Dahal',
        'Rupak Thapa',
        'Utsav Joshi',
        'Nabin Singh',
        'Saroj Budhathoki',
        'Bisnow Bista',
        'Rabin Maharjan',
        'Nirmal Gurung',
      ],
    },
    {
      name: 'Nepal Seattle FC',
      roster: [
        'Sajal Nepal',
        'Sachin Gurung',
        'Biplab Khatri',
        'Ashok Adhikari',
        'Manoj Poudel',
        'Umesh Pandey',
        'Sarad Timilsina',
        'Binod Bista',
        'Gyapan Pathak',
        'Sameer Bam Malla',
        'Subodh Moktan',
        'Rabi Tamrakar',
      ],
    },
  ];

  showRoster35Index: number | null = null;

  // Toggle the roster visibility
  toggle35Roster(index: number) {
    this.showRoster35Index = this.showRoster35Index === index ? null : index;
  }
}
