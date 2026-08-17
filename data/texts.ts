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
