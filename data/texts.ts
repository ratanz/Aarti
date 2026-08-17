export interface Verse {
  number?: number;
  type?: 'doha' | 'chaupai' | 'sloka' | 'phala' | 'namavali';
  lines: string[];
  transliteration?: string[];
  meaning?: string;
}

export interface SacredText {
  id: string;
  slug: string;
  title: string;
  titleHindi: string;
  subtitle: string;
  deity: string;
  category: 'Chalisa' | 'Ashtakam' | 'Aarti' | 'Stotram' | 'Namavali';
  readingTime: string;
  versesCount: string;
  introduction: string;
  benefits?: string[];
  verses: Verse[];
}

export const SACRED_TEXTS: Record<string, SacredText> = {
  'bhairav-chalisa': {
    id: 'bhairav-chalisa',
    slug: 'bhairav-chalisa',
    title: 'Shri Bhairav Chalisa',
    titleHindi: 'श्री भैरव चालीसा',
    subtitle: 'Sacred 40-verse hymn dedicated to Lord Bhairava, the fierce manifestation of Shiva.',
    deity: 'Lord Bhairava',
    category: 'Chalisa',
    readingTime: '5-7 mins',
    versesCount: '36 Verses + Doha',
    introduction: 'Shri Bhairav Chalisa is a potent devotional hymn dedicated to Lord Bhairava. Chanting this chalisa bestows protection from negative energies, removes fear, dissolves obstacles, and blesses the seeker with courage and peace.',
    benefits: [
      'Removes fear of the unknown, dark energies, and obstacles',
      'Shields the devotee with divine protection of the Kotwal of Kashi',
      'Destroys deep karmic afflictions and brings mental peace',
      'Bestows the boons of Ashta Siddhis, Nava Nidhis, and spiritual strength'
    ],
    verses: [
      {
        type: 'doha',
        lines: [
          'श्री गणपति गुरु गौरी पद प्रेम सहित धरि माथ ।',
          'चालीसा वंदन करो श्री शिव भैरवनाथ ॥',
          'श्री भैरव संकट हरण मंगल करण कृपाल ।',
          'श्याम वरण विकराल वपु लोचन लाल विशाल ॥'
        ],
        transliteration: [
          'Shri Ganapati Guru Gauri Pada Prema Sahita Dhari Matha |',
          'Chalisa Vandana Karo Shri Shiva Bhairavanatha ||',
          'Shri Bhairava Sankata Harana Mangala Karana Kripala |',
          'Shyama Varana Vikrala Vapu Lochana Lala Vishala ||'
        ],
        meaning: 'Bowing with deep devotion at the holy lotus feet of Lord Ganesha, Guru, and Mother Gauri, I offer this Chalisa prayer to Lord Shiva Bhairavnath. Merciful Lord Bhairava dispels all distress and bestows auspicious blessings; dark in complexion with an imposing, awe-inspiring form and large, radiant red eyes.'
      },
      {
        type: 'chaupai',
        number: 1,
        lines: [
          'जय जय श्री काली के लाला ।',
          'जयति जयति काशी-कुतवाला ॥'
        ],
        transliteration: [
          'Jaya Jaya Shri Kali Ke Lala |',
          'Jayati Jayati Kashi-Kutawala ||'
        ],
        meaning: 'Victory, all victory to the beloved son of Mother Kali! Glories and victory to the supreme divine Kotwal (guardian protector) of holy Kashi!'
      },
      {
        type: 'chaupai',
        number: 2,
        lines: [
          'जयति बटुक-भैरव भय हारी ।',
          'जयति काल-भैरव बलकारी ॥'
        ],
        transliteration: [
          'Jayati Batuka-Bhairava Bhaya Haari |',
          'Jayati Kala-Bhairava Balakaari ||'
        ],
        meaning: 'Victory to Batuk Bhairava, the dispeller of all fear! Victory to Kaal Bhairava, endowed with supreme power and strength!'
      },
      {
        type: 'chaupai',
        number: 3,
        lines: [
          'जयति नाथ-भैरव विख्याता ।',
          'जयति सर्व-भैरव सुखदाता ॥'
        ],
        transliteration: [
          'Jayati Natha-Bhairava Vikhyata |',
          'Jayati Sarva-Bhairava Sukhadatha ||'
        ],
        meaning: 'Victory to the renowned Lord Nath Bhairava! Victory to the all-pervading Bhairava who bestows peace, happiness, and delight upon all seekers!'
      },
      {
        type: 'chaupai',
        number: 4,
        lines: [
          'भैरव रूप कियो शिव धारण ।',
          'भव के भार उतारण कारण ॥'
        ],
        transliteration: [
          'Bhairava Rupa Kiyo Shiva Dharana |',
          'Bhava Ke Bhara Utarana Karana ||'
        ],
        meaning: 'Lord Shiva assumed the formidable manifestation of Bhairava in order to relieve the worldly creation of its burdens and distress.'
      },
      {
        type: 'chaupai',
        number: 5,
        lines: [
          'भैरव रव सुनि हवै भय दूरी ।',
          'सब विधि होय कामना पूरी ॥'
        ],
        transliteration: [
          'Bhairava Rava Suni Havai Bhaya Doori |',
          'Saba Vidhi Hoya Kamana Poori ||'
        ],
        meaning: 'Upon hearing the resounding roar of Lord Bhairava, all fears are cast far away, and all righteous wishes and prayers are completely fulfilled.'
      },
      {
        type: 'chaupai',
        number: 6,
        lines: [
          'शेष महेश आदि गुण गायो ।',
          'काशी-कोतवाल कहलायो ॥'
        ],
        transliteration: [
          'Shesha Mahesha Aadi Guna Gaayo |',
          'Kashi-Kotawala Kahalaayo ||'
        ],
        meaning: 'Even Sheshanaga and Lord Shiva sing your sublime attributes; you are revered throughout the universe as the Kotwal (chief guardian) of Kashi.'
      },
      {
        type: 'chaupai',
        number: 7,
        lines: [
          'जटा जूट शिर चंद्र विराजत ।',
          'बाला मुकुट बिजायठ साजत ॥'
        ],
        transliteration: [
          'Jata Juta Shira Chandra Virajata |',
          'Bala Mukuta Bijayatha Saajata ||'
        ],
        meaning: 'The crescent moon adorns your matted tresses; a radiant crown and celestial armlets (bijayath) gracefully embellish your divine form.'
      },
      {
        type: 'chaupai',
        number: 8,
        lines: [
          'कटि करधनी घुंघरू बाजत ।',
          'दर्शन करत सकल भय भाजत ॥'
        ],
        transliteration: [
          'Kati Karadhani Ghungharu Baajata |',
          'Darshana Karata Sakala Bhaya Bhaajata ||'
        ],
        meaning: 'Melodious bells tinkle on your waist-girdle, and having your sacred darshana causes all terrors and anxieties to vanish immediately.'
      },
      {
        type: 'chaupai',
        number: 9,
        lines: [
          'जीवन दान दास को दीन्ह्यो ।',
          'कीन्ह्यो कृपा नाथ तब चीन्ह्यो ॥'
        ],
        transliteration: [
          'Jeevana Daana Dasa Ko Deenhyo |',
          'Keenhyo Kripa Natha Taba Cheenhyo ||'
        ],
        meaning: 'You bestowed the priceless gift of life upon your devoted servant; bestowing your divine mercy, you made your true presence known.'
      },
      {
        type: 'chaupai',
        number: 10,
        lines: [
          'वसि रसना बनि सारद-काली ।',
          'दीन्ह्यो वर राख्यो मम लाली ॥'
        ],
        transliteration: [
          'Vasi Rasana Bani Sharada-Kali |',
          'Deenhyo Vara Raakhyo Mama Laali ||'
        ],
        meaning: 'Residing upon the devotee\'s speech as goddess Saraswati and Kali, you granted divine boons and safeguarded their honor and devotion.'
      },
      {
        type: 'chaupai',
        number: 11,
        lines: [
          'धन्य धन्य भैरव भय भंजन ।',
          'जय मनरंजन खल दल भंजन ॥'
        ],
        transliteration: [
          'Dhanya Dhanya Bhairava Bhaya Bhanjana |',
          'Jaya Manoranjana Khala Dala Bhanjana ||'
        ],
        meaning: 'Blessed, forever blessed is Lord Bhairava, the dispeller of fear! Hail the bringer of supreme inner joy and destroyer of demonic hordes!'
      },
      {
        type: 'chaupai',
        number: 12,
        lines: [
          'कर त्रिशूल डमरू शुचि कोड़ा ।',
          'कृपा कटाक्ष सुयश नहिं थोडा ॥'
        ],
        transliteration: [
          'Kara Trishula Damaru Shuchi Koda |',
          'Kripa Kataksha Suyasha Nahin Thoda ||'
        ],
        meaning: 'Holding the sacred trident, damaru, and holy whip in your hands, the glory of your merciful and compassionate glance is boundless.'
      },
      {
        type: 'chaupai',
        number: 13,
        lines: [
          'जो भैरव निर्भय गुण गावत ।',
          'अष्टसिद्धि नव निधि फल पावत ॥'
        ],
        transliteration: [
          'Jo Bhairava Nirbhaya Guna Gaavata |',
          'Ashtasiddhi Nava Nidhi Phala Paavata ||'
        ],
        meaning: 'Whoever sings the glories of Lord Bhairava with a fearless heart attains the fruits of the eight mystic perfections (Siddhis) and nine divine treasures (Nidhis).'
      },
      {
        type: 'chaupai',
        number: 14,
        lines: [
          'रूप विशाल कठिन दुख मोचन ।',
          'क्रोध कराल लाल दुहुं लोचन ॥'
        ],
        transliteration: [
          'Rupa Vishala Kathina Dukha Mochana |',
          'Krodha Karala Lala Duhun Lochana ||'
        ],
        meaning: 'Your colossal form liberates seekers from the most difficult sorrows; both your eyes blaze with righteous red fury against evil and injustice.'
      },
      {
        type: 'chaupai',
        number: 15,
        lines: [
          'अगणित भूत प्रेत संग डोलत ।',
          'बम बम बम शिव बम बम बोलत ॥'
        ],
        transliteration: [
          'Aganita Bhuta Preta Sanga Dolata |',
          'Bama Bama Bama Shiva Bama Bama Bolata ||'
        ],
        meaning: 'Surrounded by legions of celestial attendants and spirits, you wander ecstatically proclaiming the holy chant: "Bam Bam Bam Shiva Bam Bam!"'
      },
      {
        type: 'chaupai',
        number: 16,
        lines: [
          'रुद्रकाय काली के लाला ।',
          'महा कालहू के हो काला ॥'
        ],
        transliteration: [
          'Rudrakaya Kali Ke Lala |',
          'Maha Kaalahu Ke Ho Kaala ||'
        ],
        meaning: 'Embodiment of Rudra and beloved child of Mother Kali, you are the ultimate master of Time and the destroyer of death itself.'
      },
      {
        type: 'chaupai',
        number: 17,
        lines: [
          'बटुक नाथ हो काल गंभीरा ।',
          'श्वेत रक्त अरु श्याम शरीरा ॥'
        ],
        transliteration: [
          'Batuka Natha Ho Kaala Gambheera |',
          'Shweta Rakta Aru Shyama Shareera ||'
        ],
        meaning: 'You are the gentle Batuk Nath as well as the solemn Kaal Bhairava, appearing in luminous white, crimson red, and dark mystic bodily complexions.'
      },
      {
        type: 'chaupai',
        number: 18,
        lines: [
          'करत नीनहूं रूप प्रकाशा ।',
          'भरत सुभक्तन कहं शुभ आशा ॥'
        ],
        transliteration: [
          'Karata Neenahun Rupa Prakasha |',
          'Bharata Subhaktana Kahan Shubha Aasha ||'
        ],
        meaning: 'Radiating brilliance through all three cosmic aspects, you fill your sincere devotees with auspicious hope, courage, and divine blessings.'
      },
      {
        type: 'chaupai',
        number: 19,
        lines: [
          'रत्न जड़ित कंचन सिंहासन ।',
          'व्याघ्र चर्म शुचि नर्म सुआनन ॥'
        ],
        transliteration: [
          'Ratna Jadita Kanchana Simhasana |',
          'Vyaghra Charma Shuchi Narma Su-Aanana ||'
        ],
        meaning: 'Enthroned upon a golden throne studded with precious gems, seated upon pure tiger skin with a serene and gracious countenance.'
      },
      {
        type: 'chaupai',
        number: 20,
        lines: [
          'तुमहि जाइ काशिहिं जन ध्यावहिं ।',
          'विश्वनाथ कहं दर्शन पावहिं ॥'
        ],
        transliteration: [
          'Tumahi Jaai Kashihi Jana Dhyavahin |',
          'Vishwanatha Kahan Darshana Paavahin ||'
        ],
        meaning: 'Devotees who visit holy Kashi first meditate upon you, and only through your grace do they receive the divine vision of Lord Vishwanath.'
      },
      {
        type: 'chaupai',
        number: 21,
        lines: [
          'जय प्रभु संहारक सुनन्द जय ।',
          'जय उन्नत हर उमा नन्द जय ॥'
        ],
        transliteration: [
          'Jaya Prabhu Samharaka Sunanda Jaya |',
          'Jaya Unnata Hara Uma Nanda Jaya ||'
        ],
        meaning: 'Glory to the Lord, the auspicious dissolver of illusion! Victory to the exalted Shiva who brings joy to Mother Uma!'
      },
      {
        type: 'chaupai',
        number: 22,
        lines: [
          'भीम त्रिलोचन स्वान साथ जय ।',
          'वैजनाथ श्री जगतनाथ जय ॥'
        ],
        transliteration: [
          'Bheema Trilochana Swaana Saatha Jaya |',
          'Vaijanatha Shri Jagatanatha Jaya ||'
        ],
        meaning: 'Victory to the three-eyed formidable Lord accompanied by His divine canine vahana! Hail Baijnath, the Lord of all the worlds!'
      },
      {
        type: 'chaupai',
        number: 23,
        lines: [
          'महा भीम भीषण शरीर जय ।',
          'रुद्र त्रयम्बक धीर वीर जय ॥'
        ],
        transliteration: [
          'Maha Bheema Bheeshana Shareera Jaya |',
          'Rudra Trayambaka Dheera Veera Jaya ||'
        ],
        meaning: 'Hail the supreme Lord of tremendous, awe-inspiring presence! Victory to Rudra, the three-eyed, courageous, and steadfast guardian!'
      },
      {
        type: 'chaupai',
        number: 24,
        lines: [
          'अश्वनाथ जय प्रेतनाथ जय ।',
          'स्वानारुढ़ सयचंद्र नाथ जय ॥'
        ],
        transliteration: [
          'Ashwanatha Jaya Pretanatha Jaya |',
          'Swanarudha Sayachandra Natha Jaya ||'
        ],
        meaning: 'Victory to Ashwanath and Pretanath! Hail the Lord mounted upon the dog vehicle, adorned with the radiant crescent moon!'
      },
      {
        type: 'chaupai',
        number: 25,
        lines: [
          'निमिष दिगंबर चक्रनाथ जय ।',
          'गहत अनाथन नाथ हाथ जय ॥'
        ],
        transliteration: [
          'Nimisha Digambara Chakranatha Jaya |',
          'Gahata Anaathana Natha Haatha Jaya ||'
        ],
        meaning: 'Victory to the space-clad Lord of the cosmic wheel! Hail the protector who reaches out his benevolent hands to embrace the helpless!'
      },
      {
        type: 'chaupai',
        number: 26,
        lines: [
          'त्रेशलेश भूतेश चंद्र जय ।',
          'क्रोध वत्स अमरेश नन्द जय ॥'
        ],
        transliteration: [
          'Treshelesha Bhutesha Chandra Jaya |',
          'Krodha Vatsa Amaresha Nanda Jaya ||'
        ],
        meaning: 'Hail the sovereign of elemental spirits crowned with the moon! Victory to the fearless master who destroys wickedness with righteous wrath!'
      },
      {
        type: 'chaupai',
        number: 27,
        lines: [
          'श्री वामन नकुलेश चण्ड जय ।',
          'कृत्याऊ कीरति प्रचण्ड जय ॥'
        ],
        transliteration: [
          'Shri Vamana Nakulesha Chanda Jaya |',
          'Kriyata-u Keerati Prachanda Jaya ||'
        ],
        meaning: 'Victory to Vamana, Nakulesha, and Chanda Bhairava! Hail your mighty power that shatters all adverse forces and negative sorcery!'
      },
      {
        type: 'chaupai',
        number: 28,
        lines: [
          'रुद्र बटुक क्रोधेश कालधर ।',
          'चक्र तुण्ड दश पाणिव्याल धर ॥'
        ],
        transliteration: [
          'Rudra Batuka Krodhesha Kaaladhara |',
          'Chakra Tunda Dasha Paani-Vyala Dhara ||'
        ],
        meaning: 'You are Rudra, Batuk, Krodhesh, and Kaaladhar; wielding the cosmic discus and adorned with ten arms holding divine serpents!'
      },
      {
        type: 'chaupai',
        number: 29,
        lines: [
          'करि मद पान शम्भु गुणगावत ।',
          'चौंसठ योगिन संग नचावत ॥'
        ],
        transliteration: [
          'Kari Mada Paana Shambhu Guna-Gaavata |',
          'Chaunsatha Yogina Sanga Nachaavata ||'
        ],
        meaning: 'Drinking divine spiritual nectar, you sing the praise of Lord Shiva and dance in cosmic rhythm alongside the sixty-four Yoginis!'
      },
      {
        type: 'chaupai',
        number: 30,
        lines: [
          'करत कृपा जन पर बहु ढंगा ।',
          'काशी कोतवाल अड़बंगा ॥'
        ],
        transliteration: [
          'Karata Kripa Jana Para Bahu Dhanga |',
          'Kashi Kotawala Adabanga ||'
        ],
        meaning: 'You bestow grace upon your devotees in myriad wondrous ways, O fearless, majestic Kotwal of Kashi!'
      },
      {
        type: 'chaupai',
        number: 31,
        lines: [
          'देयं काल भैरव जब सोटा ।',
          'नसै पाप मोटा से मोटा ॥'
        ],
        transliteration: [
          'Deyan Kaala Bhairava Jaba Sota |',
          'Nasai Paapa Mota Se Mota ||'
        ],
        meaning: 'When Kaal Bhairava strikes with his protective staff (sota), even the heaviest and most obstinate sins and obstacles are completely destroyed.'
      },
      {
        type: 'chaupai',
        number: 32,
        lines: [
          'जनकर निर्मल होय शरीरा ।',
          'मिटै सकल संकट भव पीरा ॥'
        ],
        transliteration: [
          'Janakara Nirmala Hoya Shareera |',
          'Mitai Sakala Sankata Bhava Peera ||'
        ],
        meaning: 'The devotee\'s body and mind become pure and pristine, and every crisis, distress, and worldly pain is completely erased.'
      },
      {
        type: 'chaupai',
        number: 33,
        lines: [
          'श्री भैरव भूतों के राजा ।',
          'बाधा हरत करत शुभ काजा ॥'
        ],
        transliteration: [
          'Shri Bhairava Bhootana Ke Raaja |',
          'Baadha Harata Karata Shubha Kaaja ||'
        ],
        meaning: 'Lord Bhairava is the supreme king of all spirits and elemental forces; he removes every impediment and blesses every endeavor with success.'
      },
      {
        type: 'chaupai',
        number: 34,
        lines: [
          'ऐलादी के दुख निवारयो ।',
          'सदा कृपाकरि काज सम्हारयो ॥'
        ],
        transliteration: [
          'Ailadi Ke Dukha Nivaarayo |',
          'Sada Kripakari Kaaja Samhaarayo ||'
        ],
        meaning: 'You eradicated the sorrows and afflictions of your devoted souls, always watching over and fulfilling their work with grace.'
      },
      {
        type: 'chaupai',
        number: 35,
        lines: [
          'सुन्दर दास सहित अनुरागा ।',
          'श्री दुर्वासा निकट प्रयागा ॥'
        ],
        transliteration: [
          'Sundara Dasa Sahita Anuraaga |',
          'Shri Durvasa Nikata Prayaga ||'
        ],
        meaning: 'Sage Sundardas, filled with immense love and devotion, composed this sacred hymn near the hermitage of sage Durvasa at Prayag.'
      },
      {
        type: 'chaupai',
        number: 36,
        lines: [
          'श्री भैरव जी की जय लेख्यो ।',
          'सकल कामना पूरण देख्यो ॥'
        ],
        transliteration: [
          'Shri Bhairava Ji Ki Jaya Lekhyo |',
          'Sakala Kamana Poorana Dekhyo ||'
        ],
        meaning: 'He recorded the glorious victory of Lord Bhairava, witnessing all wishes, aspirations, and prayers fulfilled through his divine grace.'
      },
      {
        type: 'doha',
        lines: [
          'जय जय जय भैरव बटुक स्वामी संकट टार ।',
          'कृपा दास पर कीजिए शंकर के अवतार ॥'
        ],
        transliteration: [
          'Jaya Jaya Jaya Bhairava Batuka Swami Sankata Taara |',
          'Kripa Dasa Para Keejiye Shankara Ke Avataara ||'
        ],
        meaning: 'Victory, victory, all victory to Lord Batuk Bhairava! Dispeller of all hardships and tribulations, please shower your divine mercy upon your devotee, O holy incarnation of Lord Shiva!'
      }
    ]
  },
  'bhairav-ashtakam': {
    id: 'bhairav-ashtakam',
    slug: 'bhairav-ashtakam',
    title: 'Shri Kaal Bhairav Ashtakam',
    titleHindi: 'श्री कालभैरवाष्टकम्',
    subtitle: 'Composed by Adi Shankaracharya in praise of the supreme ruler of Kashi, Lord Kalabhairava.',
    deity: 'Lord Kalabhairava',
    category: 'Ashtakam',
    readingTime: '4-6 mins',
    versesCount: '8 Stanzas + Phalasruti',
    introduction: 'The Kalabhairava Ashtakam is a mesmerizing hymn composed by Adi Shankaracharya. It celebrates the supreme majesty of Lord Kaal Bhairav, the cosmic governor of Time and the eternal guardian of Kashi (Varanasi). Reciting it purifies the consciousness and destroys karmic bondage.',
    benefits: [
      'Liberation from sins and karmic knots',
      'Protection during challenging planetary transits (Rahu, Ketu, Shani)',
      'Dispels illusions, fear of mortality, and spiritual inertia',
      'Bestows knowledge, liberation (Moksha), and right livelihood'
    ],
    verses: [
      {
        number: 1,
        type: 'sloka',
        lines: [
          'देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं',
          'व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।',
          'नारदादियोगिवृन्दवन्दितं दिगम्बरं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ १ ॥'
        ],
        transliteration: [
          'Devarāja-Sevyamāna-Pāvan-Āṅghri-Paṅkajaṃ',
          'Vyāla-Yajña-Sūtram-Indu-Śekharaṃ Kṛpākaram |',
          'Nārad-Ādi-Yogi-Vṛnda-Vanditaṃ Digambaraṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 1 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, the supreme Lord of the sacred city of Kashi, whose sacred lotus feet are served by Indra (King of Devas), who wears a serpent as his sacred thread, carries the crescent moon upon his forehead, is infinitely compassionate, praised by sage Narada and enlightened yogis, and is clad in the infinite directions (Digambara).'
      },
      {
        number: 2,
        type: 'sloka',
        lines: [
          'भानुकोटिभास्वरं भवाब्धितारकं परं',
          'नीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।',
          'कालकालमम्बुजाक्षमक्षशूलमक्षरं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ २ ॥'
        ],
        transliteration: [
          'Bhānu-Koṭi-Bhāsvaraṃ Bhav-Ābdhi-Tārakaṃ Paraṃ',
          'Nīla-Kaṇṭham-Īpsit-Ārtha-Dāyakaṃ Tri-Locanam |',
          'Kāla-Kālam-Ambuj-Ākṣam-Akṣa-Śūlam-Akṣaraṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 2 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, radiant like ten million suns, who ferries devotees across the ocean of worldly existence, who possesses a blue throat (Nilakantha), grants desired boons, has three all-seeing eyes, is the destroyer of Time itself, has lotus eyes, bears the trident and rosary, and is eternal and imperishable.'
      },
      {
        number: 3,
        type: 'sloka',
        lines: [
          'शूलटङ्कपाशदण्डपाणिमादिकारणं',
          'श्यामकायमादिदेवमक्षरं निरामयम् ।',
          'भीमविक्रमं प्रभुं विचित्रताण्डवप्रियं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ ३ ॥'
        ],
        transliteration: [
          'Śūla-Ṭaṅka-Pāśa-Daṇḍa-Pāṇim-Ādi-Kāraṇaṃ',
          'Śyāma-Kāyam-Ādi-Devam-Akṣaraṃ Nirāmayam |',
          'Bhīma-Vikramaṃ Prabhuṃ Vicitra-Tāṇḍava-Priyaṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 3 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, who holds the trident, spear, noose, and staff in his divine hands, who is the primordial cause of the universe, dark-bodied, the foremost primal Deity, free from all afflictions, possessing awe-inspiring valor, and delighting in the marvelous cosmic Tandava dance.'
      },
      {
        number: 4,
        type: 'sloka',
        lines: [
          'भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं',
          'भक्तवत्सलं स्थितं समस्तलोकविग्रहम् ।',
          'विनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ ४ ॥'
        ],
        transliteration: [
          'Bhukti-Mukti-Dāyakaṃ Praśasta-Cāru-Vigrahaṃ',
          'Bhakta-Vatsalaṃ Sthitaṃ Samasta-Loka-Vigraham |',
          'Vi-Nikvaṇan-Manojña-Hema-Kiṅkiṇī-Lasat-Kaṭiṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 4 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, the giver of worldly fulfillment and ultimate liberation (Moksha), whose form is enchanting and praised, who is loving to devotees, who embodies the entire cosmos, and whose waist is adorned with melodiously tinkling golden bells.'
      },
      {
        number: 5,
        type: 'sloka',
        lines: [
          'धर्मसेतुपालकं त्वधर्ममार्गनाशकं',
          'कर्मपाशमोचकं सुशर्मदायकं विभुम् ।',
          'स्वर्णवर्णशेषपाशशोभिताङ्गनिर्मलं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ ५ ॥'
        ],
        transliteration: [
          'Dharma-Setu-Pālakaṃ Tv-Adharma-Mārga-Nāśakaṃ',
          'Karma-Pāśa-Mocakaṃ Su-Śarma-Dāyakaṃ Vibhum |',
          'Svarṇa-Varṇa-Śeṣa-Pāśa-Śobhit-Āṅga-Nirmalaṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 5 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, the guardian of the bridge of righteousness (Dharma) and destroyer of unrighteous paths, who unties the bonds of karmas, bestows profound peace and bliss, omnipresent, and whose pure form is adorned with the golden serpent Shesha.'
      },
      {
        number: 6,
        type: 'sloka',
        lines: [
          'रत्नपादुकाप्रभाभिरामपादयुग्मकं',
          'नित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।',
          'मृत्युदर्पनाशनं कराळदंष्ट्रमोक्षणं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ ६ ॥'
        ],
        transliteration: [
          'Ratna-Pādukā-Prabh-Ābhirāma-Pāda-Yugmakaṃ',
          'Nityam-Advatīyam-Iṣṭa-Daivataṃ Nirañjanam |',
          'Mṛtyu-Darpa-Nāśanaṃ Karāḷa-Daṃṣṭra-Mokṣaṇaṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 6 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, whose twin feet shine resplendently with gem-studded sandals, who is eternal, non-dual, the supreme chosen deity, stainless (Niranjana), who shatters the pride of death, and whose fierce fangs grant ultimate release.'
      },
      {
        number: 7,
        type: 'sloka',
        lines: [
          'अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं',
          'दृष्टिपातनष्टपापजालमुग्रशासनम् ।',
          'अष्टसिद्धिदायकं कपालमालिकाधरं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ ७ ॥'
        ],
        transliteration: [
          'Aṭṭa-Hāsa-Bhinna-Padmaj-Āṇḍa-Kośa-Santatiṃ',
          'Dṛṣṭi-Pāta-Naṣṭa-Pāpa-Jālam-Ugra-Śāsanam |',
          'Aṣṭa-Siddhi-Dāyakaṃ Kapāla-Mālikā-Dharaṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 7 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, whose thunderous roar reverberates through the vast cosmic egg of Brahma, whose mere compassionate glance dissolves the dense web of sins, who wields stern supreme authority, bestows the eight supernatural attainments (Ashta Siddhis), and wears a garland of skulls.'
      },
      {
        number: 8,
        type: 'sloka',
        lines: [
          'भूतसङ्घनायकं विशालकीर्तिदायकं',
          'काशिवासलोकपुण्यपापशोधकं विभुम् ।',
          'नीतिमार्गकोविदं पुरातनं जगत्पतिं',
          'काशिकापुराधिनाथकालभैरवं भजे ॥ ८ ॥'
        ],
        transliteration: [
          'Bhūta-Saṅgha-Nāyakaṃ Viśāla-Kīrti-Dāyakaṃ',
          'Kāśi-Vāsa-Loka-Puṇya-Pāpa-Śodhakaṃ Vibhum |',
          'Nīti-Mārga-Kovidaṃ Purātanaṃ Jagat-Patiṃ',
          'Kāśikā-Pur-Ādhinātha-Kālabhairavaṃ Bhaje || 8 ||'
        ],
        meaning: 'I worship Lord Kalabhairava, the leader of celestial spirits and elemental beings, the bestower of noble fame, who purifies the merits and sins of all dwellers of Kashi, who is master of ethical and spiritual wisdom, primeval, and Lord of the Universe.'
      },
      {
        type: 'phala',
        lines: [
          'कालभैरवाष्टकं पठन्ति ये मनोहरं',
          'ज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।',
          'शोकमोहदैन्यलोभकोपतापनाशनं',
          'ते प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं ध्रुवम् ॥'
        ],
        transliteration: [
          'Kālabhairav-Āṣṭakaṃ Paṭhanti Ye Mano-Haraṃ',
          'Jñāna-Mukti-Sādhanaṃ Vicitra-Puṇya-Vardhanam |',
          'Śoka-Moha-Dainya-Lobha-Kopa-Tāpa-Nāśanaṃ',
          'Te Prayānti Kālabhairav-Āṅghri-Sannidhiṃ Dhruvam ||'
        ],
        meaning: 'Those who recite this delightful Kalabhairava Ashtakam, which is the path to wisdom and liberation, which multiplies divine merit and destroys sorrow, delusion, poverty, greed, anger, and distress, will surely attain the eternal sanctuary of Lord Kalabhairava\'s lotus feet.'
      }
    ]
  },
  'bhairav-108-names': {
    id: 'bhairav-108-names',
    slug: 'bhairav-108-names',
    title: '108 Names of Lord Kaal Bhairav',
    titleHindi: 'श्री कालभैरवाष्टोत्तर शतनामावली',
    subtitle: 'The 108 auspicious names of Lord Kaal Bhairav with Beeja mantra, Sanskrit verses, and spiritual meanings.',
    deity: 'Lord Kaal Bhairava',
    category: 'Namavali',
    readingTime: '8-10 mins',
    versesCount: '108 Sacred Names',
    introduction: 'The Ashtottara Shatanamavali of Lord Kaal Bhairav consists of 108 divine mantras invoking the supreme, protective, and fearless attributes of Shiva. Chanting these 108 names destroys negativity, pacifies planetary afflictions (Rahu, Ketu, Shani), and bestows profound spiritual strength and victory.',
    benefits: [
      'Destroys deep-rooted fears, anxiety, and psychic disturbances',
      'Shields from malevolent forces, evil eye (Drishti), and negative energies',
      'Pacifies harsh planetary periods of Rahu, Ketu, and Saturn (Shani)',
      'Bestows spiritual clarity, courage, prosperity, and divine protection'
    ],
    verses: [
      { number: 1, type: 'namavali', lines: ['ॐ भैरवाय नमः।'], transliteration: ['Om Bhairavaya Namah |'], meaning: 'Salutations to Lord Bhairava, the formidable one who eliminates all fear.' },
      { number: 2, type: 'namavali', lines: ['ॐ भूतनाथाय नमः।'], transliteration: ['Om Bhutanathaya Namah |'], meaning: 'Salutations to the supreme Lord and protector of all beings and spirits.' },
      { number: 3, type: 'namavali', lines: ['ॐ भूतात्मने नमः।'], transliteration: ['Om Bhutatmane Namah |'], meaning: 'Salutations to the inner indwelling Soul of all existing creatures.' },
      { number: 4, type: 'namavali', lines: ['ॐ भूतभावनाय नमः।'], transliteration: ['Om Bhutabhavanaya Namah |'], meaning: 'Salutations to the primeval source and nourisher of all existence.' },
      { number: 5, type: 'namavali', lines: ['ॐ क्षेत्रज्ञाय नमः।'], transliteration: ['Om Kshetrajnaya Namah |'], meaning: 'Salutations to the knower of the inner consciousness and bodily field.' },
      { number: 6, type: 'namavali', lines: ['ॐ क्षेत्रपालाय नमः।'], transliteration: ['Om Kshetrapalaya Namah |'], meaning: 'Salutations to the eternal guardian and defender of sacred realms.' },
      { number: 7, type: 'namavali', lines: ['ॐ क्षेत्रदाय नमः।'], transliteration: ['Om Kshetradaya Namah |'], meaning: 'Salutations to the generous bestower of sacred dwellings and peace.' },
      { number: 8, type: 'namavali', lines: ['ॐ क्षत्रियाय नमः।'], transliteration: ['Om Kshatriyaya Namah |'], meaning: 'Salutations to the valiant cosmic protector who shields the innocent.' },
      { number: 9, type: 'namavali', lines: ['ॐ विराजे नमः।'], transliteration: ['Om Viraje Namah |'], meaning: 'Salutations to the resplendent and sovereign ruler of the cosmos.' },
      { number: 10, type: 'namavali', lines: ['ॐ श्मशानवासिने नमः।'], transliteration: ['Om Shmashanavasine Namah |'], meaning: 'Salutations to the dweller of the cremation grounds, transcendent of death.' },
      { number: 11, type: 'namavali', lines: ['ॐ मांसाशिने नमः।'], transliteration: ['Om Mamsashine Namah |'], meaning: 'Salutations to the consumer of mortal ego and physical delusion.' },
      { number: 12, type: 'namavali', lines: ['ॐ खर्पराशिने नमः।'], transliteration: ['Om Kharparashine Namah |'], meaning: 'Salutations to the bearer of the sacred skull cup filled with cosmic nectar.' },
      { number: 13, type: 'namavali', lines: ['ॐ स्मरान्तकाय नमः।'], transliteration: ['Om Smarantakaya Namah |'], meaning: 'Salutations to the conqueror of Kama (lust and ignorance).' },
      { number: 14, type: 'namavali', lines: ['ॐ रक्तपाय नमः।'], transliteration: ['Om Raktapaya Namah |'], meaning: 'Salutations to the fierce one who drinks the vitality of demonic forces.' },
      { number: 15, type: 'namavali', lines: ['ॐ पानपाय नमः।'], transliteration: ['Om Panapaya Namah |'], meaning: 'Salutations to the consumer of divine mystical ambrosia.' },
      { number: 16, type: 'namavali', lines: ['ॐ सिद्धाय नमः।'], transliteration: ['Om Siddhaya Namah |'], meaning: 'Salutations to the inherently enlightened and self-accomplished master.' },
      { number: 17, type: 'namavali', lines: ['ॐ सिद्धिदाय नमः।'], transliteration: ['Om Siddhidayaya Namah |'], meaning: 'Salutations to the gracious bestower of spiritual powers and perfections.' },
      { number: 18, type: 'namavali', lines: ['ॐ सिद्धिसेविताय नमः।'], transliteration: ['Om Siddhisevitaya Namah |'], meaning: 'Salutations to the Lord constantly revered by enlightened yogis and siddhas.' },
      { number: 19, type: 'namavali', lines: ['ॐ कङ्कालाय नमः।'], transliteration: ['Om Kankalaya Namah |'], meaning: 'Salutations to the one adorned with skeletons, reminding of impermanence.' },
      { number: 20, type: 'namavali', lines: ['ॐ कालशमनाय नमः।'], transliteration: ['Om Kalashamanaya Namah |'], meaning: 'Salutations to the subduer of death and cosmic governor of time.' },
      { number: 21, type: 'namavali', lines: ['ॐ कलाकाष्ठातनवे नमः।'], transliteration: ['Om Kalakashtatanave Namah |'], meaning: 'Salutations to the one whose form embodies every division of time.' },
      { number: 22, type: 'namavali', lines: ['ॐ कवये नमः।'], transliteration: ['Om Kavaye Namah |'], meaning: 'Salutations to the omniscient seer and visionary poet of the universe.' },
      { number: 23, type: 'namavali', lines: ['ॐ त्रिनेत्राय नमः।'], transliteration: ['Om Trinetraya Namah |'], meaning: 'Salutations to the possessor of the three eyes of divine perception.' },
      { number: 24, type: 'namavali', lines: ['ॐ बहुनेत्राय नमः।'], transliteration: ['Om Bahunetraya Namah |'], meaning: 'Salutations to the one whose vision encompasses all worlds simultaneously.' },
      { number: 25, type: 'namavali', lines: ['ॐ पिङ्गललोचनाय नमः।'], transliteration: ['Om Pingalalochanaya Namah |'], meaning: 'Salutations to the Lord with fiery, tawny, luminous eyes.' },
      { number: 26, type: 'namavali', lines: ['ॐ शूलपाणये नमः।'], transliteration: ['Om Shulapanaye Namah |'], meaning: 'Salutations to the wielder of the invincible divine trident (Trishula).' },
      { number: 27, type: 'namavali', lines: ['ॐ खड्गपाणये नमः।'], transliteration: ['Om Khadgapanaye Namah |'], meaning: 'Salutations to the bearer of the sword of wisdom that severs illusion.' },
      { number: 28, type: 'namavali', lines: ['ॐ कङ्कालिने नमः।'], transliteration: ['Om Kankaline Namah |'], meaning: 'Salutations to the Lord who wears the garland of skulls and bones.' },
      { number: 29, type: 'namavali', lines: ['ॐ धूम्रलोचनाय नमः।'], transliteration: ['Om Dhumralochanaya Namah |'], meaning: 'Salutations to the one with mystical, smoke-hued penetrating eyes.' },
      { number: 30, type: 'namavali', lines: ['ॐ अभीरवे नमः।'], transliteration: ['Om Abhirave Namah |'], meaning: 'Salutations to the entirely fearless one who dispels fear in devotees.' },
      { number: 31, type: 'namavali', lines: ['ॐ भैरवीनाथाय नमः।'], transliteration: ['Om Bhairavinathaya Namah |'], meaning: 'Salutations to the eternal Lord and consort of Goddess Bhairavi.' },
      { number: 32, type: 'namavali', lines: ['ॐ भूतपाय नमः।'], transliteration: ['Om Bhutapaya Namah |'], meaning: 'Salutations to the guardian and sustainer of all beings.' },
      { number: 33, type: 'namavali', lines: ['ॐ योगिनीपतये नमः।'], transliteration: ['Om Yoginipataye Namah |'], meaning: 'Salutations to the master and sovereign of the 64 sacred Yoginis.' },
      { number: 34, type: 'namavali', lines: ['ॐ धनदाय नमः।'], transliteration: ['Om Dhanadaya Namah |'], meaning: 'Salutations to the generous grantor of material and spiritual wealth.' },
      { number: 35, type: 'namavali', lines: ['ॐ धनहारिणे नमः।'], transliteration: ['Om Dhanaharine Namah |'], meaning: 'Salutations to the one who strips away toxic attachments to wealth.' },
      { number: 36, type: 'namavali', lines: ['ॐ धनवते नमः।'], transliteration: ['Om Dhanavate Namah |'], meaning: 'Salutations to the possessor of infinite universal treasures.' },
      { number: 37, type: 'namavali', lines: ['ॐ प्रतिभानवते नमः।'], transliteration: ['Om Pratibhanavate Namah |'], meaning: 'Salutations to the bestower of intuitive genius and luminous intellect.' },
      { number: 38, type: 'namavali', lines: ['ॐ नागहाराय नमः।'], transliteration: ['Om Nagaharaya Namah |'], meaning: 'Salutations to the Lord adorned with a necklace of sacred serpents.' },
      { number: 39, type: 'namavali', lines: ['ॐ नागकेशाय नमः।'], transliteration: ['Om Nagakeshaya Namah |'], meaning: 'Salutations to the one whose locks are interwoven with divine serpents.' },
      { number: 40, type: 'namavali', lines: ['ॐ व्योमकेशाय नमः।'], transliteration: ['Om Vyomakeshaya Namah |'], meaning: 'Salutations to the one whose hair is the boundless cosmic sky.' },
      { number: 41, type: 'namavali', lines: ['ॐ कपालभृते नमः।'], transliteration: ['Om Kapalabhrite Namah |'], meaning: 'Salutations to the bearer of the sacred skull bowl.' },
      { number: 42, type: 'namavali', lines: ['ॐ कालाय नमः।'], transliteration: ['Om Kalaya Namah |'], meaning: 'Salutations to the supreme embodiment of Time, eternity, and transformation.' },
      { number: 43, type: 'namavali', lines: ['ॐ कपालमालिने नमः।'], transliteration: ['Om Kapalamaline Namah |'], meaning: 'Salutations to the one who wears the sacred garland of skulls.' },
      { number: 44, type: 'namavali', lines: ['ॐ कमनीयाय नमः।'], transliteration: ['Om Kamaniyaya Namah |'], meaning: 'Salutations to the one of supreme spiritual grace and beauty.' },
      { number: 45, type: 'namavali', lines: ['ॐ कलानिधये नमः।'], transliteration: ['Om Kalanidhaye Namah |'], meaning: 'Salutations to the boundless treasury of all divine arts and sciences.' },
      { number: 46, type: 'namavali', lines: ['ॐ त्रिलोचनाय नमः।'], transliteration: ['Om Trilochanaya Namah |'], meaning: 'Salutations to the three-eyed Lord of past, present, and future.' },
      { number: 47, type: 'namavali', lines: ['ॐ ज्वलन्नेत्राय नमः।'], transliteration: ['Om Jvalannetraya Namah |'], meaning: 'Salutations to the one with blazing eyes of cosmic spiritual fire.' },
      { number: 48, type: 'namavali', lines: ['ॐ त्रिशिखिने नमः।'], transliteration: ['Om Trishikhine Namah |'], meaning: 'Salutations to the one who wields the three sacred pointed flames.' },
      { number: 49, type: 'namavali', lines: ['ॐ त्रिलोकपाय नमः।'], transliteration: ['Om Trilokapaya Namah |'], meaning: 'Salutations to the supreme guardian and ruler of the three worlds.' },
      { number: 50, type: 'namavali', lines: ['ॐ त्रिनेत्रतनयाय नमः।'], transliteration: ['Om Trinetratanayaya Namah |'], meaning: 'Salutations to the divine manifestation born of three-eyed Shiva.' },
      { number: 51, type: 'namavali', lines: ['ॐ डिम्भाय नमः।'], transliteration: ['Om Dimbhaya Namah |'], meaning: 'Salutations to the child-like, playful divine manifestation.' },
      { number: 52, type: 'namavali', lines: ['ॐ शान्ताय नमः।'], transliteration: ['Om Shantaya Namah |'], meaning: 'Salutations to the embodiment of absolute meditative stillness and peace.' },
      { number: 53, type: 'namavali', lines: ['ॐ शान्तजनप्रियाय नमः।'], transliteration: ['Om Shantajanapriyaya Namah |'], meaning: 'Salutations to the beloved guardian of tranquil and devoted souls.' },
      { number: 54, type: 'namavali', lines: ['ॐ बटुकाय नमः।'], transliteration: ['Om Batukaya Namah |'], meaning: 'Salutations to Lord Batuka, the ever-youthful form of Bhairava.' },
      { number: 55, type: 'namavali', lines: ['ॐ बहुवेषाय नमः।'], transliteration: ['Om Bahuveshaya Namah |'], meaning: 'Salutations to the one who manifests across myriad forms in the cosmos.' },
      { number: 56, type: 'namavali', lines: ['ॐ खट्वाङ्गवरधारकाय नमः।'], transliteration: ['Om Khatvangavaradharakaya Namah |'], meaning: 'Salutations to the bearer of the sacred Khatvanga mystical staff.' },
      { number: 57, type: 'namavali', lines: ['ॐ भूताध्यक्षाय नमः।'], transliteration: ['Om Bhutadhyakshaya Namah |'], meaning: 'Salutations to the supreme commander of all elemental forces.' },
      { number: 58, type: 'namavali', lines: ['ॐ पशुपतये नमः।'], transliteration: ['Om Pashupataye Namah |'], meaning: 'Salutations to the Lord who liberates all bound beings from bondage.' },
      { number: 59, type: 'namavali', lines: ['ॐ भिक्षुकाय नमः।'], transliteration: ['Om Bhikshukaya Namah |'], meaning: 'Salutations to the wandering ascetic accepting devotion as true alms.' },
      { number: 60, type: 'namavali', lines: ['ॐ परिचारकाय नमः।'], transliteration: ['Om Paricharakaya Namah |'], meaning: 'Salutations to the faithful attendant of Lord Shiva.' },
      { number: 61, type: 'namavali', lines: ['ॐ धूर्ताय नमः।'], transliteration: ['Om Dhurtaya Namah |'], meaning: 'Salutations to the destroyer of hypocrisy, illusions, and ego.' },
      { number: 62, type: 'namavali', lines: ['ॐ दिगम्बराय नमः।'], transliteration: ['Om Digambaraya Namah |'], meaning: 'Salutations to the unconditioned Lord clad in the infinite directions.' },
      { number: 63, type: 'namavali', lines: ['ॐ शौरिणे नमः।'], transliteration: ['Om Shaurine Namah |'], meaning: 'Salutations to the supreme hero endowed with boundless valor.' },
      { number: 64, type: 'namavali', lines: ['ॐ हरिणाय नमः।'], transliteration: ['Om Harinaya Namah |'], meaning: 'Salutations to the pure, gentle, and fleet-footed protector.' },
      { number: 65, type: 'namavali', lines: ['ॐ पाण्डुलोचनाय नमः।'], transliteration: ['Om Pandulochanaya Namah |'], meaning: 'Salutations to the one with clear, luminous, and compassionate eyes.' },
      { number: 66, type: 'namavali', lines: ['ॐ प्रशान्ताय नमः।'], transliteration: ['Om Prashantaya Namah |'], meaning: 'Salutations to the profoundly serene and undisturbed consciousness.' },
      { number: 67, type: 'namavali', lines: ['ॐ शान्तिदाय नमः।'], transliteration: ['Om Shantidaya Namah |'], meaning: 'Salutations to the generous giver of supreme peace and serenity.' },
      { number: 68, type: 'namavali', lines: ['ॐ सिद्धाय नमः।'], transliteration: ['Om Siddhaya Namah |'], meaning: 'Salutations to the perfected, self-luminous absolute reality.' },
      { number: 69, type: 'namavali', lines: ['ॐ शङ्करप्रियबान्धवाय नमः।'], transliteration: ['Om Shankarapriyabandhavaya Namah |'], meaning: 'Salutations to the dearest companion and manifestation of Shankara.' },
      { number: 70, type: 'namavali', lines: ['ॐ अष्टमूर्तये नमः।'], transliteration: ['Om Ashtamurtaye Namah |'], meaning: 'Salutations to the Lord manifested through the eight cosmic elements.' },
      { number: 71, type: 'namavali', lines: ['ॐ निधीशाय नमः।'], transliteration: ['Om Nidhishaya Namah |'], meaning: 'Salutations to the lord and master of all cosmic wealth and nidhis.' },
      { number: 72, type: 'namavali', lines: ['ॐ ज्ञानचक्षुषे नमः।'], transliteration: ['Om Jnanachakshushe Namah |'], meaning: 'Salutations to the possessor of the third eye of transcendental wisdom.' },
      { number: 73, type: 'namavali', lines: ['ॐ तपोमयाय नमः।'], transliteration: ['Om Tapomayaya Namah |'], meaning: 'Salutations to the embodiment of pure spiritual penance and tapas.' },
      { number: 74, type: 'namavali', lines: ['ॐ अष्टाधाराय नमः।'], transliteration: ['Om Ashtadharaya Namah |'], meaning: 'Salutations to the one seated upon the eight subtle energetic pillars.' },
      { number: 75, type: 'namavali', lines: ['ॐ षडाधाराय नमः।'], transliteration: ['Om Shadadharaya Namah |'], meaning: 'Salutations to the sovereign Lord who activates the six energy chakras.' },
      { number: 76, type: 'namavali', lines: ['ॐ सर्पयुक्ताय नमः।'], transliteration: ['Om Sarpayuktaya Namah |'], meaning: 'Salutations to the Lord adorned with sacred serpentine energies.' },
      { number: 77, type: 'namavali', lines: ['ॐ शिखीसख्ये नमः।'], transliteration: ['Om Shikhisakhye Namah |'], meaning: 'Salutations to the friend and master of sacred fire and aura.' },
      { number: 78, type: 'namavali', lines: ['ॐ भूधराय नमः।'], transliteration: ['Om Bhudharaya Namah |'], meaning: 'Salutations to the supporter and foundation of the cosmos and earth.' },
      { number: 79, type: 'namavali', lines: ['ॐ भूधराधीशाय नमः।'], transliteration: ['Om Bhudharadhishaya Namah |'], meaning: 'Salutations to the sovereign master of all sacred mountains and shrines.' },
      { number: 80, type: 'namavali', lines: ['ॐ भूपतये नमः।'], transliteration: ['Om Bhupataye Namah |'], meaning: 'Salutations to the supreme ruler and king of the universe.' },
      { number: 81, type: 'namavali', lines: ['ॐ भूधरात्मजाय नमः।'], transliteration: ['Om Bhudharatmajaya Namah |'], meaning: 'Salutations to the divine manifestation linked to the holy Himalayas.' },
      { number: 82, type: 'namavali', lines: ['ॐ कङ्कालधारिणे नमः।'], transliteration: ['Om Kankaladharine Namah |'], meaning: 'Salutations to the bearer of the sacred skull and bones.' },
      { number: 83, type: 'namavali', lines: ['ॐ मुण्डिने नमः।'], transliteration: ['Om Mundine Namah |'], meaning: 'Salutations to the consecrated, detached ascetic master.' },
      { number: 84, type: 'namavali', lines: ['ॐ नागयज्ञोपवीतकाय नमः।'], transliteration: ['Om Nagayajnopavitakaya Namah |'], meaning: 'Salutations to the one who wears a living serpent as his sacred thread.' },
      { number: 85, type: 'namavali', lines: ['ॐ जृम्भणाय नमः।'], transliteration: ['Om Jrimbhanaya Namah |'], meaning: 'Salutations to the one who immobilizes and crushes evil adversaries.' },
      { number: 86, type: 'namavali', lines: ['ॐ मोहनाय नमः।'], transliteration: ['Om Mohanaya Namah |'], meaning: 'Salutations to the one who charms seekers towards divine realization.' },
      { number: 87, type: 'namavali', lines: ['ॐ स्तम्भिने नमः।'], transliteration: ['Om Stambhine Namah |'], meaning: 'Salutations to the impenetrable barrier that halts negative influences.' },
      { number: 88, type: 'namavali', lines: ['ॐ मारणाय नमः।'], transliteration: ['Om Maranaya Namah |'], meaning: 'Salutations to the destroyer of ignorance, wickedness, and ego.' },
      { number: 89, type: 'namavali', lines: ['ॐ क्षोभणाय नमः।'], transliteration: ['Om Kshobhanaya Namah |'], meaning: 'Salutations to the cosmic shaker who awakens sleeping consciousness.' },
      { number: 90, type: 'namavali', lines: ['ॐ शुद्धाय नमः।'], transliteration: ['Om Shuddhaya Namah |'], meaning: 'Salutations to the forever stainless, pure, and immaculate essence.' },
      { number: 91, type: 'namavali', lines: ['ॐ नीलाञ्जनप्रख्याय नमः।'], transliteration: ['Om Nilanjanaprakhyaya Namah |'], meaning: 'Salutations to the one shining with the deep luster of dark sapphire.' },
      { number: 92, type: 'namavali', lines: ['ॐ दैत्यघ्ने नमः।'], transliteration: ['Om Daityaghne Namah |'], meaning: 'Salutations to the vanquisher and destroyer of demonic afflictions.' },
      { number: 93, type: 'namavali', lines: ['ॐ मुण्डभूषिताय नमः।'], transliteration: ['Om Mundabhushitaya Namah |'], meaning: 'Salutations to the Lord adorned with sacred cranial garlands.' },
      { number: 94, type: 'namavali', lines: ['ॐ बलिभुजे नमः।'], transliteration: ['Om Balibhuje Namah |'], meaning: 'Salutations to the one who accepts sincere offerings of self-surrender.' },
      { number: 95, type: 'namavali', lines: ['ॐ बलिभुङ्नाथाय नमः।'], transliteration: ['Om Balibhunnathaya Namah |'], meaning: 'Salutations to the supreme ruler of all holy sacrifices and offerings.' },
      { number: 96, type: 'namavali', lines: ['ॐ बालाय नमः।'], transliteration: ['Om Balaya Namah |'], meaning: 'Salutations to the youthful, eternal, and untouched divine form.' },
      { number: 97, type: 'namavali', lines: ['ॐ बालपराक्रमाय नमः।'], transliteration: ['Om Balaparakramaya Namah |'], meaning: 'Salutations to the one possessing boundless, invincible youthful might.' },
      { number: 98, type: 'namavali', lines: ['ॐ सर्वापत्तारणाय नमः।'], transliteration: ['Om Sarvapattaranaya Namah |'], meaning: 'Salutations to the supreme deliverer who rescues devotees from all crises.' },
      { number: 99, type: 'namavali', lines: ['ॐ दुर्गाय नमः।'], transliteration: ['Om Durgaya Namah |'], meaning: 'Salutations to the impenetrable divine fortress protecting seekers.' },
      { number: 100, type: 'namavali', lines: ['ॐ दुष्टभूतनिषेविताय नमः।'], transliteration: ['Om Dushtabhutanishevitaya Namah |'], meaning: 'Salutations to the supreme master obeyed and pacified by all wild spirits.' },
      { number: 101, type: 'namavali', lines: ['ॐ कामिने नमः।'], transliteration: ['Om Kamine Namah |'], meaning: 'Salutations to the lover of pure devotees and source of divine compassion.' },
      { number: 102, type: 'namavali', lines: ['ॐ कालनिधये नमः।'], transliteration: ['Om Kalanidhaye Namah |'], meaning: 'Salutations to the infinite ocean of eternity and timelessness.' },
      { number: 103, type: 'namavali', lines: ['ॐ कामदाय नमः।'], transliteration: ['Om Kamadaya Namah |'], meaning: 'Salutations to the compassionate bestower of righteous desires and moksha.' },
      { number: 104, type: 'namavali', lines: ['ॐ कामरूपिणे नमः।'], transliteration: ['Om Kamarupine Namah |'], meaning: 'Salutations to the Lord who assumes any transcendental form at will.' },
      { number: 105, type: 'namavali', lines: ['ॐ कामपालाय नमः।'], transliteration: ['Om Kamapalaya Namah |'], meaning: 'Salutations to the guardian and protector of noble intentions.' },
      { number: 106, type: 'namavali', lines: ['ॐ कामप्रदाय नमः।'], transliteration: ['Om Kamapradaya Namah |'], meaning: 'Salutations to the supreme grantor of divine fulfillment and ecstasy.' },
      { number: 107, type: 'namavali', lines: ['ॐ प्रभवे नमः।'], transliteration: ['Om Prabhave Namah |'], meaning: 'Salutations to the almighty Lord and creator of all manifest reality.' },
      { number: 108, type: 'namavali', lines: ['ॐ विष्णवे नमः।'], transliteration: ['Om Vishnave Namah |'], meaning: 'Salutations to the all-pervasive, omnipresent cosmic supreme truth.' }
    ]
  }
};
