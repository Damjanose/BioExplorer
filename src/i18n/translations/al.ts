export const al = {
  // General
  app: {
    title: 'BioExplorer',
    subtitle: 'Eksploro trupin e njeriut dhe mëso për pjesët e tij të mahnitshme!',
    footer: 'Një projekt shkollor i biologjisë | Ndërtuar me React + TypeScript',
  },

  // Navigation
  nav: {
    home: 'Kryefaqja',
    backToHome: '← Kthehu në Kryefaqje',
    backToBody: '← Kthehu te Trupi',
    backTo: '← Kthehu te',
  },

  // Home page
  home: {
    allBodyParts: 'Të gjitha Pjesët e Trupit',
    interactive: 'Interaktiv',
    explorerTitle: 'Eksplorues i Anatomisë së Njeriut',
    explorerSubtitle: 'Kliko mbi çdo organ për të zbuluar si funksionon trupi yt',
    bodySystems: 'Sistemet e Trupit',
    quickStats: 'Statistika të Shpejta',
    organs: 'Organet',
    systems: 'Sistemet',
    quizzes: 'Kuizet',
  },

  // Body systems
  systems: {
    nervous: 'Nervor',
    circulatory: 'Qarkullues',
    respiratory: 'Frymëmarrës',
    digestive: 'Tretës',
    cardiovascular: 'Sistemi Kardiovaskular',
    nervousSystem: 'Sistemi Nervor',
    respiratorySystem: 'Sistemi i Frymëmarrjes',
    digestiveSystem: 'Sistemi Tretës',
    urinarySystem: 'Sistemi Urinar',
    skeletalSystem: 'Sistemi Skeletor',
  },

  // Body parts
  bodyParts: {
    heart: 'Zemra',
    brain: 'Truri',
    lungs: 'Mushkëritë',
    liver: 'Mëlçia',
    stomach: 'Stomaku',
    kidneys: 'Veshkat',
    intestines: 'Zorrët',
    skeleton: 'Skeleti',
  },

  // Organ descriptions (short)
  organDescriptions: {
    brain: 'Qendra e kontrollit të trupit',
    heart: 'Pompon gjakun në të gjithë trupin',
    lungs: 'Mundësojnë frymëmarrjen dhe shkëmbimin e oksigjenit',
    liver: 'Filtron gjakun dhe prodhon biliare',
    stomach: 'Tret ushqimin me acide',
    kidneys: 'Filtrojnë mbeturinat nga gjaku',
    intestines: 'Thithin lëndët ushqyese nga ushqimi',
    skeleton: '206 kocka mbështesin dhe mbrojnë',
  },

  // Body part details
  details: {
    description: 'Përshkrimi',
    function: 'Funksioni',
    funFacts: 'Fakte Interesante',
    readMoreWikipedia: 'Lexo më shumë në Wikipedia →',
    loadingInfo: 'Po ngarkohen informacione shtesë...',
    takeQuiz: 'Bëj Kuizin',
    testKnowledge: 'Testo Njohuritë e Tua',
    exploreOther: 'Eksploro Pjesë të Tjera',
    apiNotice: 'Duke përdorur të dhëna offline (Wikipedia e padisponueshme)',
    notFound: 'Pjesa e trupit nuk u gjet',
  },

  // Quiz
  quiz: {
    title: 'Kuiz',
    quizNotFound: 'Kuizi Nuk u Gjet',
    quizNotFoundDesc: 'Nuk mundëm të gjejmë një kuiz për këtë pjesë të trupit.',
    noQuizAvailable: 'Nuk ka Kuiz të Disponueshëm',
    noQuizDesc: 'Na vjen keq, nuk ka kuiz të disponueshëm për',
    yet: 'ende.',
    complete: 'Kuizi u Kompletua!',
    tryAgain: 'Provo Përsëri',
    goBack: '← Kthehu Prapa',
    exitQuiz: '← Dil nga Kuizi',
    nextQuestion: 'Pyetja Tjetër',
    seeResults: 'Shiko Rezultatet',
    question: 'Pyetja',
    of: 'nga',
    score: 'Rezultati',
    correct: 'Saktë! Punë e shkëlqyer!',
    incorrect: 'Jo saktësisht. Përgjigjja e saktë është:',
    // Score messages
    perfect: 'Rezultat perfekt! E mahnitshme!',
    excellent: 'Punë e shkëlqyer!',
    good: 'Punë e mirë!',
    keepLearning: 'Vazhdo të mësosh!',
    dontGiveUp: 'Mos u dorëzo! Provo përsëri!',
  },

  // Body part data
  bodyPartData: {
    heart: {
      name: 'Zemra',
      system: 'Sistemi Kardiovaskular',
      description: 'Zemra është një organ muskulor rreth madhësisë së grushtit tënd që pompon gjakun në të gjithë trupin. Ndodhet pak në të majtë të qendrës së gjoksit.',
      function: 'Zemra pompon gjakun përmes sistemit të qarkullimit, duke dërguar oksigjen dhe lëndë ushqyese tek indet dhe duke larguar dioksidin e karbonit dhe mbeturina të tjera.',
      funFacts: [
        'Zemra jote rrah rreth 100,000 herë në ditë',
        'Zemra pompon rreth 7,500 litra gjak në ditë',
        'Zemra e gruas rrah pak më shpejt se ajo e burrit',
        'Zemra ka sistemin e vet elektrik',
        'Të qeshurit është e mirë për zemrën - ul stresin dhe forcon imunitetin',
      ],
    },
    brain: {
      name: 'Truri',
      system: 'Sistemi Nervor',
      description: 'Truri është organi më kompleks në trupin e njeriut. Kontrollon mendimin, kujtesën, emocionet, prekjen, aftësitë motorike, shikimin, frymëmarrjen dhe çdo proces që rregullon trupin tonë.',
      function: 'Truri përpunon informacionin shqisor, kontrollon funksionet e trupit, mundëson mendimin, mësimin dhe kujtesën, dhe rregullon emocionet dhe sjelljen.',
      funFacts: [
        'Truri peshon rreth 1.4 kilogramë',
        'Përmban afërsisht 86 miliardë neurone',
        'Truri përdor rreth 20% të energjisë totale të trupit',
        'Truri yt gjeneron mjaftueshëm elektricitet për të ndezur një llambë të vogël',
        'Truri është 73% ujë',
      ],
    },
    lungs: {
      name: 'Mushkëritë',
      system: 'Sistemi i Frymëmarrjes',
      description: 'Mushkëritë janë një palë organesh sfungjerore të mbushura me ajër të vendosura në të dy anët e gjoksit. Mushkëria e djathtë ka tre lobe, ndërsa e majta ka dy për t\'i bërë vend zemrës.',
      function: 'Mushkëritë lehtësojnë shkëmbimin e gazeve - sjellin oksigjen në trup kur thith frymën dhe çlirojnë dioksid karboni kur nxjerr frymën.',
      funFacts: [
        'Nëse do shtriheshin, mushkëritë do mbulonin një sipërfaqe sa një fushë tenisi',
        'Merr frymë rreth 20,000 herë në ditë',
        'Mushkëria e majtë është më e vogël se e djathta për t\'i bërë vend zemrës',
        'Mushkëritë mund të notojnë në ujë sepse përmbajnë ajër',
        'Fëmijët dhe gratë marrin frymë më shpejt se burrat',
      ],
    },
    liver: {
      name: 'Mëlçia',
      system: 'Sistemi Tretës',
      description: 'Mëlçia është organi dhe gjëndra më e madhe e brendshme në trupin e njeriut. Ndodhet në pjesën e sipërme të djathtë të barkut, nën diafragmë.',
      function: 'Mëlçia filtron gjakun, prodhon biliare për tretje, depoziton lëndë ushqyese, metabolizon barnat dhe toksinat, dhe prodhon proteina esenciale për koagulimin e gjakut.',
      funFacts: [
        'Mëlçia kryen mbi 500 funksione të ndryshme',
        'Mund të rigjenerojë vetën - edhe nëse 75% hiqet, mund të rritet përsëri',
        'Mëlçia mban rreth 13% të furnizimit me gjak të trupit',
        'Prodhon rreth 1 litër biliare në ditë',
        'Mëlçia është i vetmi organ që mund të rigjenerojë plotësisht',
      ],
    },
    stomach: {
      name: 'Stomaku',
      system: 'Sistemi Tretës',
      description: 'Stomaku është një organ muskulor, i zbrazët në barkun e sipërm që luan një rol vendimtar në tretje. Merr ushqimin nga ezofagu dhe fillon ta zbërthejë.',
      function: 'Stomaku depoziton ushqimin, e përzien me lëngje tretëse, dhe ngadalë zbraz përmbajtjen e tij në zorrën e hollë. Prodhon acid dhe enzima për të zbërthyer ushqimin.',
      funFacts: [
        'Stomaku mund të zgjerohet për të mbajtur deri në 1 litër ushqim',
        'Prodhon një shtresë të re mukuze çdo dy javë për të mbrojtur vetën nga acidi i vet',
        'Acidi i stomakut është mjaft i fortë për të tretur metalin',
        'Stomaku yt merr një veshje të re çdo 3-4 ditë',
        'Skuqja bën që edhe veshja e stomakut të bëhet e kuqe',
      ],
    },
    kidneys: {
      name: 'Veshkat',
      system: 'Sistemi Urinar',
      description: 'Veshkat janë dy organe në formë fasuleje, secila rreth madhësisë së një grushti, të vendosura pak poshtë kafazit të brinjëve në të dy anët e shtyllës kurrizore.',
      function: 'Veshkat filtrojnë gjakun për të hequr mbeturinat dhe lëngun e tepërt, rregullojnë presionin e gjakut, prodhojnë hormone, dhe mbajnë balancën kimike të trupit.',
      funFacts: [
        'Veshkat filtrojnë rreth 200 litra gjak në ditë',
        'Çdo veshkë përmban rreth 1 milion filtra të vegjël të quajtur nefrone',
        'Mund të jetosh vetëm me një veshkë',
        'Veshkat janë përgjegjëse për aktivizimin e Vitaminës D',
        'Rreth 1-2 litra urinë prodhohen në ditë',
      ],
    },
    intestines: {
      name: 'Zorrët',
      system: 'Sistemi Tretës',
      description: 'Zorrët përbëhen nga zorra e hollë dhe zorra e trashë. Formojnë një tub të gjatë, të vazhdueshëm që përpunon ushqimin dhe thithe lëndët ushqyese.',
      function: 'Zorra e hollë thithe shumicën e lëndëve ushqyese nga ushqimi. Zorra e trashë thithe ujin dhe elektrolitët, dhe formon dhe depoziton fekalet deri në eliminim.',
      funFacts: [
        'Zorra e hollë është rreth 6 metra e gjatë',
        'Zorra e trashë është rreth 1.5 metra e gjatë',
        'Zorrët tuaja përmbajnë triliona baktere - mikrobiomi i zorrëve',
        'Zorrët kanë sistemin e tyre nervor të quajtur \'sistemi nervor enterik\'',
        'Ushqimi merr 6-8 orë për të kaluar përmes stomakut dhe zorrës së hollë',
      ],
    },
    skeleton: {
      name: 'Skeleti',
      system: 'Sistemi Skeletor',
      description: 'Skeleti i njeriut është struktura e brendshme e trupit. Përbëhet nga rreth 270 kocka në lindje, që ulet në rreth 206 kocka në moshë të rritur.',
      function: 'Skeleti siguron mbështetje dhe formë trupit, mbron organet e brendshme, mundëson lëvizjen, prodhon qeliza gjaku, dhe depoziton minerale.',
      funFacts: [
        'Foshnjat lindin me rreth 270 kocka, por të rriturit kanë vetëm 206',
        'Kocka më e vogël është në veshin tënd (yzengija)',
        'Femuri është kocka më e gjatë dhe më e fortë',
        'Kockat rinovuhen vazhdimisht gjatë gjithë jetës',
        'Skeleti yt zëvëndësohet plotësisht çdo 10 vjet',
      ],
    },
  },

  // Quiz questions
  quizData: {
    heart: [
      {
        question: 'Cili është funksioni kryesor i zemrës?',
        options: ['Pompimi i gjakut', 'Tretja e ushqimit', 'Filtrimi i toksinave', 'Prodhimi i hormoneve'],
      },
      {
        question: 'Sa herë rrah zemra në ditë përafërsisht?',
        options: ['10,000 herë', '50,000 herë', '100,000 herë', '500,000 herë'],
      },
      {
        question: 'Cilit sistem i përket zemra?',
        options: ['Sistemi Nervor', 'Sistemi Kardiovaskular', 'Sistemi Tretës', 'Sistemi i Frymëmarrjes'],
      },
      {
        question: 'Sa dhoma ka zemra e njeriut?',
        options: ['2', '3', '4', '5'],
      },
      {
        question: 'Çfarë ngjyre ka gjaku i deoksigjenuar?',
        options: ['I kuq i ndritshëm', 'Blu', 'I kuq i errët', 'Vjollcë'],
      },
    ],
    brain: [
      {
        question: 'Përafërsisht sa neurone ka truri i njeriut?',
        options: ['1 milion', '1 miliardë', '86 miliardë', '1 trilion'],
      },
      {
        question: 'Sa përqind të energjisë së trupit përdor truri?',
        options: ['5%', '10%', '20%', '50%'],
      },
      {
        question: 'Cilin sistem kontrollon truri?',
        options: ['Vetëm lëvizjen', 'Vetëm mendimin', 'Të gjitha funksionet e trupit', 'Vetëm frymëmarrjen'],
      },
      {
        question: 'Sa peshon truri mesatar i të rriturit?',
        options: ['0.5 kilogramë', '1.4 kilogramë', '2.5 kilogramë', '5 kilogramë'],
      },
      {
        question: 'Sa përqind e trurit është ujë?',
        options: ['25%', '50%', '73%', '90%'],
      },
    ],
    lungs: [
      {
        question: 'Çfarë gazi sjellin mushkëritë në trup?',
        options: ['Dioksid karboni', 'Azot', 'Oksigjen', 'Hidrogjen'],
      },
      {
        question: 'Sa lobe ka mushkëria e djathtë?',
        options: ['1', '2', '3', '4'],
      },
      {
        question: 'Pse mushkëria e majtë është më e vogël se e djathta?',
        options: ['Defekt i lindjes', 'Për t\'i bërë vend zemrës', 'Nuk është më e vogël', 'Për t\'i bërë vend mëlçisë'],
      },
      {
        question: 'Përafërsisht sa herë merr frymë në ditë?',
        options: ['5,000', '10,000', '20,000', '50,000'],
      },
      {
        question: 'Çfarë gazi mbeturinë çlirojnë mushkëritë?',
        options: ['Oksigjen', 'Azot', 'Dioksid karboni', 'Avull uji'],
      },
    ],
    liver: [
      {
        question: 'Sa funksione kryen mëlçia?',
        options: ['Rreth 50', 'Rreth 100', 'Mbi 500', 'Rreth 1000'],
      },
      {
        question: 'Çfarë mund të bëjë mëlçia që shumica e organeve nuk mundin?',
        options: ['Të pompojë gjak', 'Të rigjenerojë vetën', 'Të prodhojë oksigjen', 'Të ruajë kujtime'],
      },
      {
        question: 'Çfarë prodhon mëlçia për tretjen?',
        options: ['Pështymë', 'Acid stomaku', 'Biliare', 'Insulinë'],
      },
      {
        question: 'Ku ndodhet mëlçia?',
        options: ['Ana e majtë e gjoksit', 'Barku i sipërm i djathtë', 'Barku i poshtëm i majtë', 'Qendra e gjoksit'],
      },
      {
        question: 'Cili është roli i mëlçisë në gjak?',
        options: ['Ta pompojë', 'Ta filtrojë', 'Ta krijojë', 'Ta ftohë'],
      },
    ],
    stomach: [
      {
        question: 'Sa ushqim mund të mbajë stomaku?',
        options: ['100ml', '500ml', 'Deri në 1 litër', '2 litra'],
      },
      {
        question: 'Çfarë prodhon stomaku për të zbërthyer ushqimin?',
        options: ['Biliare', 'Insulinë', 'Acid dhe enzima', 'Pështymë'],
      },
      {
        question: 'Sa shpesh merr stomaku një veshje të re?',
        options: ['Çdo ditë', 'Çdo 3-4 ditë', 'Çdo javë', 'Çdo muaj'],
      },
      {
        question: 'Çfarë e mbron stomakun nga acidi i vet?',
        options: ['Lëkura', 'Dhjami', 'Shtresa e mukuzës', 'Uji'],
      },
      {
        question: 'Ku shkon ushqimi pas stomakut?',
        options: ['Mëlçia', 'Zorra e hollë', 'Zorra e trashë', 'Veshkat'],
      },
    ],
    kidneys: [
      {
        question: 'Sa gjak filtrojnë veshkat në ditë?',
        options: ['10 litra', '50 litra', '200 litra', '500 litra'],
      },
      {
        question: 'Sa veshka i duhen një personi për të mbijetuar?',
        options: ['Të dyja', 'Vetëm një', 'Asnjë me dializë vetëm', 'Tre'],
      },
      {
        question: 'Si quhen filtrat e vegjël në veshka?',
        options: ['Neurone', 'Nefrone', 'Kapilarë', 'Alveole'],
      },
      {
        question: 'Cilën vitaminë ndihmojnë veshkat të aktivizohet?',
        options: ['Vitamina A', 'Vitamina B', 'Vitamina C', 'Vitamina D'],
      },
      {
        question: 'Çfarë rregullojnë veshkat në trup?',
        options: ['Vetëm ujin', 'Presionin e gjakut', 'Vetëm temperaturën', 'Rrahjet e zemrës'],
      },
    ],
    intestines: [
      {
        question: 'Sa e gjatë është zorra e hollë?',
        options: ['1.5 metra', '3 metra', '6 metra', '15 metra'],
      },
      {
        question: 'Çfarë thithe kryesisht zorra e hollë?',
        options: ['Vetëm ujë', 'Lëndë ushqyese', 'Ajër', 'Toksina'],
      },
      {
        question: 'Si quhet koleksioni i baktereve në zorrët tuaja?',
        options: ['Flora e zorrëve', 'Mikrobiomi i zorrëve', 'Kolonia intestinale', 'Bakteret tretëse'],
      },
      {
        question: 'Sa kohë i duhet ushqimit të kalojë përmes stomakut dhe zorrës së hollë?',
        options: ['1-2 orë', '6-8 orë', '24 orë', '2-3 ditë'],
      },
      {
        question: 'Çfarë thithe kryesisht zorra e trashë?',
        options: ['Proteina', 'Yndyrna', 'Ujë dhe elektrolite', 'Vitamina'],
      },
    ],
    skeleton: [
      {
        question: 'Sa kocka ka një i rritur?',
        options: ['150', '206', '270', '350'],
      },
      {
        question: 'Ku ndodhet kocka më e vogël?',
        options: ['Gishti i këmbës', 'Gishti i dorës', 'Veshi', 'Hunda'],
      },
      {
        question: 'Cila është kocka më e gjatë në trup?',
        options: ['Humerusi', 'Tibia', 'Femuri', 'Shtylla kurrizore'],
      },
      {
        question: 'Sa shpesh zëvendësohet plotësisht skeleti yt?',
        options: ['Çdo vit', 'Çdo 5 vjet', 'Çdo 10 vjet', 'Asnjëherë'],
      },
      {
        question: 'Me sa kocka lindin foshnjat?',
        options: ['100', '206', '270', '350'],
      },
    ],
  },
};
