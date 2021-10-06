const skillTypes = {
  arts: 'Arts',
  programming: 'Programming',
  languages: 'Languages',
  sports: 'Sports'
}

var skills = [
  // Sports
  { name: 'hiking', type: skillTypes.sports },
  { name: 'skateboarding', type: skillTypes.sports },
  { name: 'scuba diving', type: skillTypes.sports },
  // Programming
  { name: 'Python', type: skillTypes.programming },
  { name: 'C#', type: skillTypes.programming },
  { name: 'R', type: skillTypes.programming },
  { name: 'Javascript', type: skillTypes.programming },
  // Arts
  { name: 'painting', type: skillTypes.arts },
  { name: 'singing', type: skillTypes.arts },
  { name: 'pottery', type: skillTypes.arts },
  { name: 'calligraphy', type: skillTypes.arts },
  { name: 'piano', type: skillTypes.arts },
  { name: 'saxophone', type: skillTypes.arts },
  // Foreign languages
  { name: 'Italian', type: skillTypes.languages },
  { name: 'English', type: skillTypes.languages },
  { name: 'Russian', type: skillTypes.languages },
  { name: 'French', type: skillTypes.languages },
  { name: 'German', type: skillTypes.languages }
]
var workHistory = [{
  companyName: 'Company 1',
  title: 'Pottery trainer',
  monthStart: 4,
  yearStart: 2020,
  monthEnd: null,
  yearEnd: null,
  industry: 'Entertainment & Multimedia',
  location: 'London, UK',
  responsibilities: ['I did this', 'I did that', 'Also I contributed to'],
  stack: ['Tool 1', 'Tool 2', 'Tool 3']
},
{
  companyName: 'Company 2',
  title: 'Doer and Thinker',
  monthStart: 1,
  yearStart: 2015,
  monthEnd: 4,
  yearEnd: 2020,
  industry: 'Banking & Finance',
  location: 'Paris, France',
  responsibilities: ['I did this', 'I did that', 'Also I contributed to'],
  stack: ['Tool 1', 'Tool 2', 'Tool 3']
},
{
  companyName: 'Company 3',
  title: 'Artist',
  monthStart: 1,
  yearStart: 2012,
  monthEnd: 1,
  yearEnd: 2015,
  industry: 'Environment protection',
  location: 'Berlin, Germany',
  responsibilities: ['I did this', 'I did that', 'Also I contributed to'],
  stack: ['Tool 1', 'Tool 2', 'Tool 3']
},
{
  companyName: 'Company 4',
  title: 'Explorer',
  monthStart: 1,
  yearStart: 2011,
  monthEnd: 1,
  yearEnd: 2012,
  industry: 'Space Exploration',
  location: 'Toronto, Canada',
  responsibilities: ['I did this', 'I did that', 'Also I contributed to'],
  stack: ['Tool 1', 'Tool 2', 'Tool 3']
},
{
  companyName: 'Company 5',
  title: 'Ranger',
  monthStart: 1,
  yearStart: 2011,
  monthEnd: 1,
  yearEnd: 2010,
  industry: 'Fintech',
  location: 'Melbourne, Australia',
  responsibilities: ['I did this', 'I did that', 'Also I contributed to'],
  stack: ['Tool 1', 'Tool 2', 'Tool 3']
}
]
var socialLinks = [
  { name: 'github', link: '#' },
  { name: 'linkedin', link: '#' },
  { name: 'twitter', link: '#' },
  { name: 'edit-outline', link: '#' },
  { name: 'email-outline', link: '#' }
]
var interests = ['Environment protection', 'Cognitive sciences', 'Ancient Egypt', 'Microbiology', 'Finance', 'Classical music']
var about = ['Artist', 'Astronaut', 'citizen of Earth, Solar System', 'Human']

var projects = [
  { label: 'Project 1', link: '#', type: 'owner', description: 'Project description' },
  { label: 'Project 2', link: '#', type: 'owner', description: 'Project description' },
  { label: 'Project 3', link: '#', type: 'contributor', description: 'Project description' },
  { label: 'Project 4', link: '#', type: 'contributor', description: 'Project description' }

]

var data = {
  skills: skills,
  skillTypes: skillTypes,
  workHistory: workHistory,
  socialLinks: socialLinks,
  about: about,
  interests: interests,
  projects: projects
}
export default data
