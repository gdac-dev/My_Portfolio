export interface Skill {
  name: string;
  category: string;
  percentage: number;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', percentage: 95 },
  { name: 'CSS', category: 'Frontend', percentage: 90 },
  { name: 'React.js', category: 'Frontend', percentage: 88 },
  { name: 'TypeScript', category: 'Frontend', percentage: 82 },
  { name: 'Tailwind CSS', category: 'Frontend', percentage: 85 },
  { name: 'Next.js', category: 'Frontend', percentage: 87 },

  // Backend
  { name: 'Python', category: 'Backend', percentage: 80 },
  { name: 'PHP', category: 'Backend', percentage: 75 },
  { name: 'Django', category: 'Backend', percentage: 78 },
  { name: 'Node.js', category: 'Backend', percentage: 82 },
  { name: 'Laravel', category: 'Backend', percentage: 76 },

  // Data Analysis
  { name: 'Power BI', category: 'Data Analysis', percentage: 60 },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', percentage: 80 },
  { name: 'MySQL', category: 'Databases', percentage: 78 },

  // Cloud
  { name: 'Google Cloud', category: 'Cloud', percentage: 55 },
  { name: 'AWS', category: 'Cloud', percentage: 50 },
  { name: 'DigitalOcean', category: 'Cloud', percentage: 60 },

  // Tools
  { name: 'Git', category: 'Tools', percentage: 88 },
  { name: 'GitHub', category: 'Tools', percentage: 90 },
  { name: 'JIRA', category: 'Tools', percentage: 70 },
  { name: 'Docker', category: 'Tools', percentage: 65 },

  // ERP
  { name: 'Odoo', category: 'ERP', percentage: 85 },

  // CMS
  { name: 'WordPress', category: 'CMS', percentage: 80 },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'Data Analysis',
  'Databases',
  'Cloud',
  'Tools',
  'ERP',
  'CMS',
];
