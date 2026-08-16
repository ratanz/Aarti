export interface Verse {
  number?: number;
  type?: 'doha' | 'chaupai' | 'sloka' | 'phala';
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
  category: 'Chalisa' | 'Ashtakam' | 'Aarti' | 'Stotram';
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
    versesCount: '40 Verses + Doha',
    introduction: 'Shri Bhairav Chalisa is a potent devotional hymn dedicated to Lord Bhairava. Chanting this chalisa bestows protection from negative energies, removes fear, dissolves obstacles, and blesses the seeker with courage and peace.',
    benefits: [
      'Removes fear of unknown and negative energies',
      'Shields the devotee from obstacles and psychic distress',
      'Bestows mental clarity, courage, and spiritual strength',
      'Fosters auspiciousness and divine grace of Lord Shiva'
    ],
    verses: [
      {
        type: 'doha',
        lines: [
          'श्री गणपति गुरु गौरि पद, प्रेम सहित धरि माथ ।',
          'चालीसा वन्दन करूँ, श्री शिव भैरवनाथ ॥',
          'श्री भैरव संकट हरन, मंगल करन कृपालु ।',
          'करहु दया निज दास पे, निसिदिन दीनदयाल ॥'
        ],
        transliteration: [
          'Shri Ganapati Guru Gauri Pada, Prema Sahita Dhari Matha |',
          'Chalisa Vandana Karu, Shri Shiva Bhairavanatha ||',
          'Shri Bhairava Sankata Harana, Mangala Karana Kripalu |',
          'Karahu Daya Nija Dasa Pe, Nisidina Dinadayala ||'
        ],
        meaning: 'Bowing with deep devotion at the holy feet of Lord Ganesha, Guru, and Mother Gauri, I offer this Chalisa prayer to Lord Shiva Bhairavnath. O merciful Bhairava, remover of troubles and bestower of auspiciousness, shower your eternal grace upon your devotee.'
      },
      {
        type: 'chaupai',
        number: 1,
        lines: [
          'जय डमरूधर नयन विशाला ।',
          'श्याम वर्ण, वपु महा कराला ॥'
        ],
        transliteration: [
          'Jaya Damarudhara Nayana Vishala |',
          'Shyama Varna, Vapu Maha Karala ||'
        ],
        meaning: 'Victory to Lord Bhairava who holds the sacred damaru and possesses large, penetrating eyes. Dark in complexion and having an imposing, awe-inspiring form.'
      },
      {
        type: 'chaupai',
        number: 2,
        lines: [
          'जय त्रिशूलधर जय डमरूधर ।',
          'काशी कोतवाल कृपाकर ॥'
        ],
        transliteration: [
          'Jaya Trishuladhara Jaya Damarudhara |',
          'Kashi Kotawala Kripakara ||'
        ],
        meaning: 'Hail to the bearer of the trident and the sacred damaru, the divine guardian and Kotwal of the holy city of Kashi.'
      },
      {
        type: 'chaupai',
        number: 3,
        lines: [
          'भाल चन्द्रमा सोहत नीके ।',
          'कानन कुण्डल मन अति छीके ॥'
        ],
        transliteration: [
          'Bhala Chandrama Sohata Nike |',
          'Kanana Kundala Mana Ati Chhike ||'
        ],
        meaning: 'The crescent moon adorns your forehead gracefully, and celestial earrings embellish your ears, captivating the minds of all.'
      },
      {
        type: 'chaupai',
        number: 4,
        lines: [
          'गले मुण्डमाल छबि भारी ।',
          'करहु कृपा मम काटो संसारी ॥'
        ],
        transliteration: [
          'Gale Mundamala Chhabi Bhari |',
          'Karahu Kripa Mama Kato Samsari ||'
        ],
        meaning: 'A magnificent garland of skulls graces your neck; grant your divine grace and liberate me from worldly attachments and fears.'
      },
      {
        type: 'chaupai',
        number: 5,
        lines: [
          'अंग भस्म सोहे अति सुन्दर ।',
          'कटि किंकिणी रुनझुन बाजे कर ॥'
        ],
        transliteration: [
          'Anga Bhasma Sohe Ati Sundara |',
          'Kati Kinkini Runajhuna Baje Kara ||'
        ],
        meaning: 'Holy sacred ash covers your luminous limbs, and little tinkling bells chime melodiously around your waist.'
      },
      {
        type: 'chaupai',
        number: 6,
        lines: [
          'रक्त नेत्र अति तेज प्रकाशा ।',
          'मिटे तिमिर होवे उजियासा ॥'
        ],
        transliteration: [
          'Rakta Netra Ati Teja Prakasha |',
          'Mite Timira Hove Ujiyasa ||'
        ],
        meaning: 'Your radiant eyes blaze with brilliant divine luster, eradicating the darkness of ignorance and filling the heart with light.'
      },
      {
        type: 'chaupai',
        number: 7,
        lines: [
          'सवारी श्वान आपकी प्यारी ।',
          'भक्तन के रक्षक हितकारी ॥'
        ],
        transliteration: [
          'Sawari Shwana Apaki Pyari |',
          'Bhaktana Ke Rakshaka Hitakari ||'
        ],
        meaning: 'The loyal dog is your beloved vehicle; you are the supreme protector and benevolent well-wisher of all your devotees.'
      },
      {
        type: 'chaupai',
        number: 8,
        lines: [
          'भूत पिशाच निकट नहिं आवे ।',
          'भैरव नाम जब सब गावे ॥'
        ],
        transliteration: [
          'Bhuta Pishacha Nikata Nahin Aave |',
          'Bhairava Nama Jaba Saba Gaave ||'
        ],
        meaning: 'Spirits and negative entities dare not approach the one who chants the auspicious name of Lord Bhairava.'
      },
      {
        type: 'chaupai',
        number: 9,
        lines: [
          'रोग दोष सब दूर भगावे ।',
          'सुख सम्पति नित घर में लावे ॥'
        ],
        transliteration: [
          'Roga Dosha Saba Dura Bhagaave |',
          'Sukha Sampati Nita Ghara Men Laave ||'
        ],
        meaning: 'All illnesses and afflictions flee away, bringing prosperity, peace, and eternal joy into the home.'
      },
      {
        type: 'chaupai',
        number: 10,
        lines: [
          'बटुक भैरव आप कहलाओ ।',
          'भक्तन के संकट मिटाओ ॥'
        ],
        transliteration: [
          'Batuka Bhairava Apa Kahalao |',
          'Bhaktana Ke Sankata Mitao ||'
        ],
        meaning: 'You are lovingly invoked as Batuka Bhairava, who tenderly dispels the tribulations of every seeking devotee.'
      },
      {
        type: 'chaupai',
        number: 11,
        lines: [
          'काल भैरव अति बलवाना ।',
          'यमराजहु प्रभु का डर माना ॥'
        ],
        transliteration: [
          'Kala Bhairava Ati Balawana |',
          'Yamarajahu Prabhu Ka Dara Maana ||'
        ],
        meaning: 'As Kaal Bhairava, your might is limitless; even the lord of death bows in reverent awe before your authority.'
      },
      {
        type: 'chaupai',
        number: 12,
        lines: [
          'अष्ट भैरव के रूप प्रकाशा ।',
          'पूरण करहु भक्त अभिलाषा ॥'
        ],
        transliteration: [
          'Ashta Bhairava Ke Rupa Prakasha |',
          'Purana Karahu Bhakta Abhilasha ||'
        ],
        meaning: 'You manifest across the eight divine forms (Ashta Bhairavas), fulfilling the pure desires and spiritual aspirations of your seekers.'
      },
      {
        type: 'chaupai',
        number: 13,
        lines: [
          'जो जन ध्यान धरै मन लाई ।',
          'ताकर भव बाधा मिटि जाई ॥'
        ],
        transliteration: [
          'Jo Jana Dhyana Dharai Mana Laai |',
          'Takara Bhava Badha Miti Jaai ||'
        ],
        meaning: 'Whoever meditates on you with sincere devotion finds all their worldly obstructions dissolved.'
      },
      {
        type: 'chaupai',
        number: 14,
        lines: [
          'रवि-शशि तेज समाहित तोहीं ।',
          'ज्ञान-भक्ति दीजै प्रभु मोहीं ॥'
        ],
        transliteration: [
          'Ravi-Shashi Teja Samahita Tohi |',
          'Gyana-Bhakti Dijai Prabhu Mohi ||'
        ],
        meaning: 'The brilliance of the sun and moon rests within you; bless me, O Lord, with true wisdom and devotion.'
      },
      {
        type: 'chaupai',
        number: 15,
        lines: [
          'शत्रु दमन तुम कीन्हे भारी ।',
          'सदा विजय होवे तुम्हारी ॥'
        ],
        transliteration: [
          'Shatru Damana Tuma Kinhe Bhari |',
          'Sada Vijaya Hove Tumhari ||'
        ],
        meaning: 'You vanquish inner enemies like greed, anger, and ego; victory forever belongs to you.'
      },
      {
        type: 'chaupai',
        number: 16,
        lines: [
          'जो नर पाठ करे चालीस ।',
          'तापर कृपा करें जगदीश ॥'
        ],
        transliteration: [
          'Jo Nara Patha Kare Chalisa |',
          'Tapara Kripa Kare Jagadisha ||'
        ],
        meaning: 'Whosoever regularly recites this forty-verse prayer is showered with the supreme grace of the Lord.'
      },
      {
        type: 'doha',
        lines: [
          'जय जय जय भैरव प्रभु, संकट हरहु हमार ।',
          'कृपा दृष्टि राखहु सदा, पार करो संसार ॥'
        ],
        transliteration: [
          'Jaya Jaya Jaya Bhairava Prabhu, Sankata Harahu Hamara |',
          'Kripa Drishti Rakhahu Sada, Para Karo Samsara ||'
        ],
        meaning: 'Victory, victory, victory to Lord Bhairava! Relieve all our distresses, gaze upon us with your merciful eyes, and guide us across the ocean of worldly existence.'
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
  }
};
