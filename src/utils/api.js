
export const fetchLanguagePack = async (lang)=> {
    return {
  lang: 'hi',
  labels: {
  dashboard: 'डैशबोर्ड',
  emergency: 'आपातकाल',
  settings: 'सेटिंग्स',

  commonIssues: 'सामान्य समस्याएँ',
  emergencyNumbers: 'आपातकालीन नंबर',
  woundAnalysis: 'घाव विश्लेषण',
  checkMedicine: 'दवा पहचानें',
  },
  firstAidTopics: [
    {
      id: 1,
      title: 'साँप का काटना',
      steps: [
        'व्यक्ति को शांत रखें',
        'घाव को न काटें',
        'हिलने-डुलने से रोकें',
        'तुरंत अस्पताल ले जाएँ',
      ],
    },
    {
      id: 2,
      title: 'जलना (Burn)',
      steps: [
        'जले हुए स्थान को ठंडे पानी में रखें',
        'मलहम या तेल न लगाएँ',
        'साफ कपड़े से ढकें',
        'डॉक्टर को दिखाएँ',
      ],
    },
    {
      id: 3,
      title: 'अधिक रक्तस्राव',
      steps: [
        'घाव पर दबाव डालें',
        'हाथ ऊपर रखें',
        'साफ कपड़ा इस्तेमाल करें',
        'तुरंत चिकित्सा सहायता लें',
      ],
    },
  ],
};
    };
