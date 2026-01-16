export const en = {
  // General
  app: {
    title: 'BioExplorer',
    subtitle: 'Explore the human body and learn about its amazing parts!',
    footer: 'A school biology project | Built with React + TypeScript',
  },

  // Navigation
  nav: {
    home: 'Home',
    backToHome: '← Back to Home',
    backToBody: '← Back to Body',
    backTo: '← Back to',
  },

  // Home page
  home: {
    allBodyParts: 'All Body Parts',
    interactive: 'Interactive',
    explorerTitle: 'Human Anatomy Explorer',
    explorerSubtitle: 'Click on any organ to discover how your body works',
    bodySystems: 'Body Systems',
    quickStats: 'Quick Stats',
    organs: 'Organs',
    systems: 'Systems',
    quizzes: 'Quizzes',
  },

  // Body systems
  systems: {
    nervous: 'Nervous',
    circulatory: 'Circulatory',
    respiratory: 'Respiratory',
    digestive: 'Digestive',
    cardiovascular: 'Cardiovascular System',
    nervousSystem: 'Nervous System',
    respiratorySystem: 'Respiratory System',
    digestiveSystem: 'Digestive System',
    urinarySystem: 'Urinary System',
    skeletalSystem: 'Skeletal System',
  },

  // Body parts
  bodyParts: {
    heart: 'Heart',
    brain: 'Brain',
    lungs: 'Lungs',
    liver: 'Liver',
    stomach: 'Stomach',
    kidneys: 'Kidneys',
    intestines: 'Intestines',
    skeleton: 'Skeleton',
  },

  // Organ descriptions (short)
  organDescriptions: {
    brain: 'Control center of the body',
    heart: 'Pumps blood throughout the body',
    lungs: 'Enable breathing and oxygen exchange',
    liver: 'Filters blood and produces bile',
    stomach: 'Digests food with acids',
    kidneys: 'Filter waste from blood',
    intestines: 'Absorb nutrients from food',
    skeleton: '206 bones support and protect',
  },

  // Body part details
  details: {
    description: 'Description',
    function: 'Function',
    funFacts: 'Fun Facts',
    readMoreWikipedia: 'Read more on Wikipedia →',
    loadingInfo: 'Loading additional information...',
    takeQuiz: 'Take Quiz',
    testKnowledge: 'Test Your Knowledge',
    exploreOther: 'Explore Other Parts',
    apiNotice: 'Using offline data (Wikipedia unavailable)',
    notFound: 'Body part not found',
  },

  // Quiz
  quiz: {
    title: 'Quiz',
    quizNotFound: 'Quiz Not Found',
    quizNotFoundDesc: "We couldn't find a quiz for this body part.",
    noQuizAvailable: 'No Quiz Available',
    noQuizDesc: "Sorry, there's no quiz available for",
    yet: 'yet.',
    complete: 'Quiz Complete!',
    tryAgain: 'Try Again',
    goBack: '← Go Back',
    exitQuiz: '← Exit Quiz',
    nextQuestion: 'Next Question',
    seeResults: 'See Results',
    question: 'Question',
    of: 'of',
    score: 'Score',
    correct: 'Correct! Great job!',
    incorrect: 'Not quite. The correct answer is:',
    // Score messages
    perfect: 'Perfect score! Amazing!',
    excellent: 'Excellent work!',
    good: 'Good job!',
    keepLearning: 'Keep learning!',
    dontGiveUp: "Don't give up! Try again!",
  },

  // Body part data
  bodyPartData: {
    heart: {
      name: 'Heart',
      system: 'Cardiovascular System',
      description: "The heart is a muscular organ about the size of your fist that pumps blood throughout your body. It's located slightly left of center in your chest.",
      function: 'The heart pumps blood through the circulatory system, delivering oxygen and nutrients to tissues and removing carbon dioxide and other wastes.',
      funFacts: [
        'Your heart beats about 100,000 times per day',
        'The heart pumps about 2,000 gallons of blood daily',
        "A woman's heart beats slightly faster than a man's",
        'The heart has its own electrical system',
        'Laughing is good for your heart - it reduces stress and boosts immunity',
      ],
    },
    brain: {
      name: 'Brain',
      system: 'Nervous System',
      description: 'The brain is the most complex organ in the human body. It controls thought, memory, emotion, touch, motor skills, vision, breathing, and every process that regulates our body.',
      function: 'The brain processes sensory information, controls body functions, enables thinking, learning, and memory, and regulates emotions and behavior.',
      funFacts: [
        'The brain weighs about 3 pounds (1.4 kg)',
        'It contains approximately 86 billion neurons',
        "The brain uses about 20% of the body's total energy",
        'Your brain generates enough electricity to power a small light bulb',
        'The brain is 73% water',
      ],
    },
    lungs: {
      name: 'Lungs',
      system: 'Respiratory System',
      description: 'The lungs are a pair of spongy, air-filled organs located on either side of the chest. The right lung has three lobes, while the left lung has two to make room for the heart.',
      function: 'The lungs facilitate gas exchange - they bring oxygen into the body when you inhale and release carbon dioxide when you exhale.',
      funFacts: [
        'If spread flat, your lungs would cover an area the size of a tennis court',
        'You breathe about 20,000 times per day',
        'The left lung is smaller than the right to make room for the heart',
        'Lungs can float on water because they contain air',
        'Children and women breathe faster than men',
      ],
    },
    liver: {
      name: 'Liver',
      system: 'Digestive System',
      description: "The liver is the largest internal organ and gland in the human body. It's located in the upper right portion of the abdomen, beneath the diaphragm.",
      function: 'The liver filters blood, produces bile for digestion, stores nutrients, metabolizes drugs and toxins, and produces proteins essential for blood clotting.',
      funFacts: [
        'The liver performs over 500 different functions',
        'It can regenerate itself - even if 75% is removed, it can grow back',
        "The liver holds about 13% of the body's blood supply",
        'It produces about 1 liter of bile per day',
        'The liver is the only organ that can completely regenerate',
      ],
    },
    stomach: {
      name: 'Stomach',
      system: 'Digestive System',
      description: 'The stomach is a muscular, hollow organ in the upper abdomen that plays a crucial role in digestion. It receives food from the esophagus and begins breaking it down.',
      function: 'The stomach stores food, mixes it with digestive juices, and slowly empties its contents into the small intestine. It produces acid and enzymes to break down food.',
      funFacts: [
        'The stomach can stretch to hold up to 1 liter of food',
        'It produces a new layer of mucus every two weeks to protect itself from its own acid',
        'Stomach acid is strong enough to dissolve metal',
        'Your stomach gets a new lining every 3-4 days',
        'Blushing causes your stomach lining to turn red too',
      ],
    },
    kidneys: {
      name: 'Kidneys',
      system: 'Urinary System',
      description: 'The kidneys are two bean-shaped organs, each about the size of a fist, located just below the rib cage on each side of the spine.',
      function: "The kidneys filter blood to remove waste and excess fluid, regulate blood pressure, produce hormones, and maintain the body's chemical balance.",
      funFacts: [
        'Kidneys filter about 200 liters of blood daily',
        'Each kidney contains about 1 million tiny filters called nephrons',
        'You can live with just one kidney',
        'Kidneys are responsible for activating Vitamin D',
        'About 1-2 liters of urine is produced daily',
      ],
    },
    intestines: {
      name: 'Intestines',
      system: 'Digestive System',
      description: 'The intestines consist of the small intestine and large intestine. They form a long, continuous tube that processes food and absorbs nutrients.',
      function: 'The small intestine absorbs most nutrients from food. The large intestine absorbs water and electrolytes, and forms and stores feces until elimination.',
      funFacts: [
        'The small intestine is about 20 feet long',
        'The large intestine is about 5 feet long',
        'Your gut contains trillions of bacteria - the gut microbiome',
        "The intestines have their own nervous system called the 'enteric nervous system'",
        'Food takes 6-8 hours to pass through the stomach and small intestine',
      ],
    },
    skeleton: {
      name: 'Skeleton',
      system: 'Skeletal System',
      description: 'The human skeleton is the internal framework of the body. It is composed of around 270 bones at birth, which decreases to about 206 bones by adulthood.',
      function: 'The skeleton provides support and shape to the body, protects internal organs, allows movement, produces blood cells, and stores minerals.',
      funFacts: [
        'Babies are born with about 270 bones, but adults have only 206',
        'The smallest bone is in your ear (the stirrup/stapes)',
        'The femur is the longest and strongest bone',
        'Bones are constantly being rebuilt throughout your life',
        'Your skeleton completely replaces itself every 10 years',
      ],
    },
  },

  // Quiz questions
  quizData: {
    heart: [
      {
        question: 'What is the main function of the heart?',
        options: ['Pumping blood', 'Digesting food', 'Filtering toxins', 'Producing hormones'],
      },
      {
        question: 'How many times does the heart beat per day approximately?',
        options: ['10,000 times', '50,000 times', '100,000 times', '500,000 times'],
      },
      {
        question: 'Which system does the heart belong to?',
        options: ['Nervous System', 'Cardiovascular System', 'Digestive System', 'Respiratory System'],
      },
      {
        question: 'How many chambers does the human heart have?',
        options: ['2', '3', '4', '5'],
      },
      {
        question: 'What color is deoxygenated blood?',
        options: ['Bright red', 'Blue', 'Dark red', 'Purple'],
      },
    ],
    brain: [
      {
        question: 'Approximately how many neurons are in the human brain?',
        options: ['1 million', '1 billion', '86 billion', '1 trillion'],
      },
      {
        question: "What percentage of the body's energy does the brain use?",
        options: ['5%', '10%', '20%', '50%'],
      },
      {
        question: 'Which system does the brain control?',
        options: ['Only movement', 'Only thinking', 'All body functions', 'Only breathing'],
      },
      {
        question: 'How much does the average adult brain weigh?',
        options: ['1 pound', '3 pounds', '5 pounds', '10 pounds'],
      },
      {
        question: 'What percentage of the brain is water?',
        options: ['25%', '50%', '73%', '90%'],
      },
    ],
    lungs: [
      {
        question: 'What gas do the lungs bring into the body?',
        options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
      },
      {
        question: 'How many lobes does the right lung have?',
        options: ['1', '2', '3', '4'],
      },
      {
        question: 'Why is the left lung smaller than the right?',
        options: ['Birth defect', 'To make room for the heart', "It's not smaller", 'To make room for the liver'],
      },
      {
        question: 'Approximately how many times do you breathe per day?',
        options: ['5,000', '10,000', '20,000', '50,000'],
      },
      {
        question: 'What waste gas do the lungs release?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Water vapor'],
      },
    ],
    liver: [
      {
        question: 'How many functions does the liver perform?',
        options: ['About 50', 'About 100', 'Over 500', 'About 1000'],
      },
      {
        question: 'What can the liver do that most organs cannot?',
        options: ['Pump blood', 'Regenerate itself', 'Produce oxygen', 'Store memories'],
      },
      {
        question: 'What does the liver produce for digestion?',
        options: ['Saliva', 'Stomach acid', 'Bile', 'Insulin'],
      },
      {
        question: 'Where is the liver located?',
        options: ['Left side of chest', 'Upper right abdomen', 'Lower left abdomen', 'Center of chest'],
      },
      {
        question: 'What is the liver\'s role in blood?',
        options: ['Pumping it', 'Filtering it', 'Creating it', 'Cooling it'],
      },
    ],
    stomach: [
      {
        question: 'How much food can the stomach hold?',
        options: ['100ml', '500ml', 'Up to 1 liter', '2 liters'],
      },
      {
        question: 'What does the stomach produce to break down food?',
        options: ['Bile', 'Insulin', 'Acid and enzymes', 'Saliva'],
      },
      {
        question: 'How often does the stomach get a new lining?',
        options: ['Every day', 'Every 3-4 days', 'Every week', 'Every month'],
      },
      {
        question: 'What protects the stomach from its own acid?',
        options: ['Skin', 'Fat', 'Mucus layer', 'Water'],
      },
      {
        question: 'Where does food go after the stomach?',
        options: ['Liver', 'Small intestine', 'Large intestine', 'Kidneys'],
      },
    ],
    kidneys: [
      {
        question: 'How much blood do the kidneys filter daily?',
        options: ['10 liters', '50 liters', '200 liters', '500 liters'],
      },
      {
        question: 'How many kidneys does a person need to survive?',
        options: ['Both', 'Just one', 'None with dialysis only', 'Three'],
      },
      {
        question: 'What are the tiny filters in kidneys called?',
        options: ['Neurons', 'Nephrons', 'Capillaries', 'Alveoli'],
      },
      {
        question: 'What vitamin do kidneys help activate?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
      },
      {
        question: 'What do kidneys regulate in the body?',
        options: ['Only water', 'Blood pressure', 'Only temperature', 'Heart rate'],
      },
    ],
    intestines: [
      {
        question: 'How long is the small intestine?',
        options: ['5 feet', '10 feet', '20 feet', '50 feet'],
      },
      {
        question: 'What does the small intestine primarily absorb?',
        options: ['Water only', 'Nutrients', 'Air', 'Toxins'],
      },
      {
        question: 'What is the collection of bacteria in your gut called?',
        options: ['Gut flora', 'Gut microbiome', 'Intestinal colony', 'Digestive bacteria'],
      },
      {
        question: 'How long does food take to pass through stomach and small intestine?',
        options: ['1-2 hours', '6-8 hours', '24 hours', '2-3 days'],
      },
      {
        question: 'What does the large intestine primarily absorb?',
        options: ['Proteins', 'Fats', 'Water and electrolytes', 'Vitamins'],
      },
    ],
    skeleton: [
      {
        question: 'How many bones does an adult have?',
        options: ['150', '206', '270', '350'],
      },
      {
        question: 'Where is the smallest bone located?',
        options: ['Toe', 'Finger', 'Ear', 'Nose'],
      },
      {
        question: 'What is the longest bone in the body?',
        options: ['Humerus', 'Tibia', 'Femur', 'Spine'],
      },
      {
        question: 'How often does your skeleton completely replace itself?',
        options: ['Every year', 'Every 5 years', 'Every 10 years', 'Never'],
      },
      {
        question: 'How many bones are babies born with?',
        options: ['100', '206', '270', '350'],
      },
    ],
  },
};
