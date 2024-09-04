export const mobileCaseStudy = [
  {
    name: 'Mobile App Development',
    portfolioImage: '../../../../assets/casestudybanner/AMPSPORTFOLIO.webp',
    link: '/app-development/casestudy',
    projectName: 'AMPS',
  },
  {
    name: 'Mobile App Development',
    portfolioImage:
      'https://karmill.s3.us-east-1.amazonaws.com/profile_pictures/portfolioKeepitup.webp',
    link: '/casestudy/keepitgoing',
    projectName: 'Keep It Going',
  },
];
export const webCaseStudy = [
  {
    name: 'Web App Development',
    portfolioImage: '../../../../assets/casestudybanner/WIKISTRINGS.png',
    link: '/web-development/casestudy',
    projectName: 'WikiString',
  },
  {
    name: 'Web App Development',
    portfolioImage:
      'https://karmill.s3.us-east-1.amazonaws.com/profile_pictures/string.png',
    link: '/casestudy/stringgeo',
    projectName: 'String Geo',
  },
];
export const dmCaseStudy = [
  {
    name: 'Digital Marketing',
    portfolioImage: '../../../../assets/casestudybanner/Seanautic.png',
    link: '/digital-marketing/casestudy',
    projectName: 'Seanautic marine Inc',
  },
  {
    name: 'Digital Marketing',
    portfolioImage:
      'https://karmill.s3.us-east-1.amazonaws.com/profile_pictures/CityLandscapeSupplies.png',
    link: '/casestudy/citylandscape',
    projectName: 'Citilandscape Supplies',
  },
];

export const aiCaseStudy = [
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/AI.webp',
    link: '/ai/casestudy',
    projectName: 'Capsule Endoscopy',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/UR DRIVER3.png',
    link: '/ai/ai-casestudy/HR-Employee-On-Boarding',
    projectName: 'HR Employee On Boarding',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/2.png',
    link: '/ai/ai-casestudy/HR-Recruitment',
    projectName: 'HR Recruitment',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/3.png',
    link: '/ai/ai-casestudy/Purchase-Order',
    projectName: 'Purchase Order',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/4.png',
    link: '/ai/ai-casestudy/Account-Payable',
    projectName: 'Account Payable',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/5.png',
    link: '/ai/ai-casestudy/Account-Receivable-Recovery',
    projectName: 'Account Receivable & Recovery',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/6.png',
    link: '/ai/ai-casestudy/Insurance-Claim-Processing',
    projectName: 'Insurance Claim Processing',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/7.png',
    link: '/ai/ai-casestudy/Insurance-Eligibility-Verification',
    projectName: 'Insurance Eligibility Verification',
  },
  {
    name: 'Artificial Intelligence',
    portfolioImage: '../../../../assets/casestudybanner/ai/8.png',
    link: '/ai/ai-casestudy/Clinical-Document-Processing',
    projectName: 'Clinical Document Processing',
  },
];
export const allCaseStudy = [
  ...mobileCaseStudy,
  ...webCaseStudy,
  ...dmCaseStudy,
  ...aiCaseStudy,
];

export interface CaseStudy {
  name: string;
  portfolioImage: string;
  link: string;
  projectName: string;
}
