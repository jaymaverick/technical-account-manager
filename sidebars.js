// sidebars.js
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'Introduction',
      label: 'Case Studies - Start Here'
    },
    {
      type: 'category',
      label: 'Account Health Dashboard (Demo)',
      link: {
        type: 'doc',
        id: 'tam_dashboard/TAM Dashboard Demo',
      },
      items: [
        'tam_dashboard/TAM Dashboard Demo',
      ],
    },
    {
      type: 'category',
      label: 'Customer Churn Risk Signals (Presentation)',
      link: {
        type: 'doc',
        id: 'churn_warning/Churn Warning Signals',
      },
      items: [
        'churn_warning/Churn Warning Signals',
      ],
    },
//   {
//     type: 'category',
//     label: 'AI Legacy Hardware Bridge',
//     link: {
//       type: 'doc',
//       id: 'jetkvm_llm/AI Legacy Hardware Bridge',
//     },
//     items: [
//       'jetkvm_llm/The Legacy Software Trap',
//       'jetkvm_llm/Non-Invasive Architecture',
//       'jetkvm_llm/The Automation Loop',
//       'jetkvm_llm/Future Strategy and Scale',
//     ],
//   },
//   {
//     type: 'doc',
//     id: 'case_study3/AI Legislation Update Agent',
//     label: 'AI Legislation Update Agent',
//   },
//   {
//     type: 'doc',
//     id: 'case_study4/AI ERP Maintenance Matching Agent',
//     label: 'AI ERP Maintenance Matching Agent',
//   },
//   {
//     type: 'doc',
//     id: 'case_study5/AI Demographic Localizer',
//     label: 'AI Demographic Localizer',
//   },
  ],
};

module.exports = sidebars;
