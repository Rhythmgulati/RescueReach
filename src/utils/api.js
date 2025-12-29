
export const fetchLanguagePack = async (lang)=> {
  if (lang === 'hi') {
    return {
      lang: 'hi',
      labels: {
        dashboard: 'डैशबोर्ड',
        emergency: 'आपातकाल',
      },
      firstAidTopics: [
        {
          id: 1,
          title: 'साँप का काटना',
          steps: ['शांत रखें', 'अस्पताल ले जाएँ'],
        },
      ],
    };
  }

  return {
    lang: 'en',
    labels: {
      dashboard: 'Dashboard',
      emergency: 'Emergency',
    },
    firstAidTopics: [
      {
        id: 1,
        title: 'Snake Bite',
        steps: ['Keep calm', 'Go to hospital'],
      },
    ],
  };
};
