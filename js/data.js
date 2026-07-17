export const profile = {
  name: 'Seunghyun Chae',
  role: 'Ph.D. Candidate · Computer Science & Engineering',
  affiliation: 'Pohang University of Science and Technology (POSTECH)',
  labName: 'Formal Verification & Reasoning Lab',
  labUrl: 'https://forever.postech.ac.kr',
  advisor: 'Prof. Kyungmin Bae',
  bio: 'My research focuses on applying formal methods to improve the safety and reliability of safety-critical systems, particularly neural networks and Trusted Execution Environments (TEEs).',
  email: 'shchae7 [at] postech.ac.kr',
  links: [
    { label: 'GitHub', url: 'https://github.com/shchae7' },
    { label: 'Scholar', url: 'https://scholar.google.com/citations?user=TYfh5esAAAAJ&hl=en' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/chaeseunghyun2000/' }
    // { label: 'CV PDF', url: 'cv.pdf' }
  ],
  photo: './assets/profile_photo.png'
};

/* ==================== 1. NEWS ==================== */

export const news = [
  { date: 'May 2026', text: 'Presented my work, “An Activation Property-Based Framework for Efficient Neural Network Verification,” at the ICST 2026 Doctoral Symposium.' }
];

/* ==================== 2. RESEARCH INTERESTS ==================== */

export const interests = [
  {
    title: 'Formal Methods for Reliable Neural Networks',
    text: 'Designing an activation property-based incremental verification framework to guarantee the safety and robustness of neural networks.'
  },
  {
    title: 'Formal Specification and Verification of Trusted Execution Environment Components',
    text: 'Modeling TEE APIs and applications with formal specifications and verifying their behavior and guarantees.'
  }
];

/* ==================== 3. EDUCATION ==================== */

export const education = [
  {
    degree: 'Ph.D. in Computer Science & Engineering',
    institution: 'POSTECH',
    years: 'Sep. 2021 — Present',
    detail: 'Ph.D. and M.S. Integrated Course, Advisor: Prof. Kyungmin Bae'
  },
  {
    degree: 'B.S. in Computer Science & Engineering',
    institution: 'POSTECH',
    years: 'Feb. 2018 — Aug. 2021',
    detail: ''
  }
];

/* ==================== 4. PUBLICATIONS ==================== */

// Use { name: '...', me: true } to render your name in bold.
export const publications = [
  {
    title: 'An Activation Property-Based Framework for Efficient Neural Network Verification',
    // url: '#',
    authors: [{ name: 'S. Chae', me: true }],
    venue: 'International Conference on Software Testing, Verification, and Validation (ICST) Doctoral Symposium',
    year: '2026 (to appear)',
    links: []
  },
  {
    title: 'Formal Specification of Trusted Execution Environment APIs',
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-57259-3_5',
    authors: [{ name: 'G. Yu' }, { name: 'S. Chae', me: true }, { name: 'K. Bae' }, { name: 'S. Moon' }],
    venue: 'International Conference on Fundamental Approaches to Software Engineering (FASE)',
    year: '2024',
    links: [
      { label: 'Code', url: 'https://github.com/postechsv/tee-formal-analysis' }
    ]
  },
  {
    title: 'Layered Abstraction Technique for Effective Formal Verification of Deep Neural Networks',
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11158124',
    authors: [{ name: 'J. Yeon' }, { name: 'S. Chae', me: true }, { name: 'K. Bae' }],
    venue: 'Journal of KIISE, Vol. 49, No. 11 (in Korean)',
    year: '2022',
    award: 'Excellent Paper Award',
    links: [{ label: 'Paper', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11158124' }]
  },
  {
    title: 'Layered Abstraction for Formally Verifying Deep Neural Networks',
    url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11035647',
    authors: [{ name: 'J. Yeon' }, { name: 'S. Chae', me: true }, { name: 'K. Bae' }],
    venue: 'Korea Software Congress (KSC) (in Korean)',
    year: '2021',
    award: 'Best Paper Award',
    links: [{ label: 'Paper', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11035647' }]
  }
];

/* ==================== 5. SERVICE & TEACHING ==================== */

export const service = [
  { role: 'Student Volunteer', meta: 'ETAPS 2024' },
  { role: 'Teaching Assistant', meta: 'CSED490H: Programming Studio (Spring 2024); CSED504: Advanced Operating System (Spring 2023); CSED420: Software Verification (Spring 2022)' }
];

/* ==================== 6. ADDITIONAL RECORDS ==================== */

// Stored here for completeness. The current template does not render Awards or Talks sections.
export const awards = [
  { title: 'ETAPS 2024 Student Scholarship', date: 'Feb. 2024', organization: 'ETAPS and University of Luxembourg' },
  { title: 'Bang Seung-yang Graduate Fellowship', date: '2022', organization: 'Department of CSE, POSTECH' },
  { title: 'Global Leadership Program (GLP)', date: 'Sophomore-Junior, Junior-Senior', organization: 'Department of CSE, POSTECH' }
];

export const talks = [
  { title: 'An Activation Property-Based Framework for Efficient Neural Network Verification', event: 'ICST 2026 Doctoral Symposium', location: 'Daejeon, South Korea', date: 'May 18, 2026' },
  { title: 'Incremental NN Verification with Implementation-Agnostic Activation Property DB', event: '10th Winter STAAR Workshop', location: 'Ulsan, South Korea', date: 'Feb. 3, 2026', note: 'in Korean', slides: 'https://staar2021.github.io/10th_Workshop/10th_Presentation/2_10_Chae.pdf' },
  { title: 'Utilization of Activation Property DB for Efficient Incremental Neural Network Verification', event: '9th Summer STAAR Workshop', location: 'Seoul, South Korea', date: 'Jul. 27, 2025', note: 'in Korean', slides: 'https://staar2021.github.io/9th_Workshop/9th_Presentation/02_03_Chae.pdf' }
];
