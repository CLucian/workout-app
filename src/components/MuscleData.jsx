

const absSectionContent = {
  title: "Abdominals",
  src: "exercise-images/muscle-category-images/abdominal-muscles.jpg",
  info:
    "The abdominals are a group of muscles running vertically on each side of the anterior wall of the human abdomen. The muscles attach from the xiphoid process, the center point bone between your chest, to the pubis bone located centrally just above the pubic region",
  muscleFunction:
    "These muscles play a crucial rule as a postural muscles. They are responsible for flexing the spine when doing movements like a crunch or sit up. The abdominals also assist with breathing and help forcefullying exhaling while also helping keep the internal organs intact and creating intra-abdominal pressure."
};


const bicepsSectionContent = {
  title: "Biceps Brachii",
  src: "exercise-images/muscle-category-images/biceps-muscles.jpg",
  info:
    "Commonly known as the biceps, is a two-headed muscle that lies on the upper arm between the shoulder and the elbow.",
  muscleFunction:
    "Flexes the shoulder joint. The short head assists with shoulder adduction. The long head may assist with abduction if the humerus is laterally rotated. With the origin fixed, flexes the elbow joint, moving the forearm toward the humerus and supinates the forearm. With the insertion fixed, flexes the elbow joint, moving the humerus toward the forearm, as in pull-up or chinning exercises."
};

const pectoralsSectionContent = {
  title: "Pectorals",
  src: "exercise-images/muscle-category-images/pectoral-muscles.jpg",
  info:
    "The pectoral muscles, commonly referred to as the 'pecs' are the muscles that connect the front of the human chest with the bones of the upper arm and shoulder. The pectorals are composed of 2 muscles, the major and minor. The pectoralis major is a thick fan-shaped muscle, while the pectoralis minor is a thin triangular one",
  muscleFunction:
    "The pectoral major muscle lies under the breast and serves to flex, extend and rotate the humerus bone (the long bone of the upper arm). The pectoralis minor attaches to the ribs and serves to stablize the scapula (the large bone of the shoulder).",
};

const deltoidsSectionContent = {
  title: "Deltoids",
  src: "exercise-images/muscle-category-images/deltoid-muscles.jpg",
  info:
    "The Deltoid muscle is a large triangular shaped muscle which lies over the glenohumeral joint and which gives the shoulder its rounded contour. It is named after the Greek letter delta, which is shaped like an equilateral triangle. It comprises 3 distinct portions each of which produces a different movement of the glenohumeral joint, commonly named the anterior, mid (or lateral) and posterior heads.",
  muscleFunction:
    "An important function of deltoid is the prevention of subluxation or even dislocation of the head of the humerus particularly when carrying a load. Deltoid is the prime mover of shoulder abduction."
};

const calvesSectionContent = {
  title: "Calves",
  src: "exercise-images/muscle-category-images/calf-muscles.jpg",
  info:
    "The muscles within the calf correspond to the posterior compartment of the leg. The two largest muscles (soleus and gastrocnemius) within this compartment are known together as the calf muscle and attach to the heel via the achilles tendon.",
  muscleFunction:
    "Along with the soleus muscle, the gastrocnemius forms half of the calf muscle. Its function is plantar flexing the foot at the ankle joint and flexing the leg at the knee joint. The gastrocnemius is primarily involved in running, jumping and other 'quick' movements of the leg, and to a lesser degree in walking and standing. The soleus muscle on the other hand plays a significant role in pumping blood back up to the body and maintaining posture and balance."
};

const backSectionContent = {
  title: "Back",
  src: "exercise-images/muscle-category-images/back-muscles.jpg",
  info:
    "The back is composed of many layers of muscles. The combination of these muscles work together to support the trunk and hold the body upright. They also allow the trunk to move, twist and bend in multiple directions",
  muscleFunction:
    "These muscles help move the scapular in several directions and also hold it in place. They also help in vertebral column and thorax stabilization and respiration. The back muscles play an integral role in posture maintenance and help with general trunk movements"
};

const tricepsSectionContent = {
  title: "Triceps Brachii",
  src: "exercise-images/muscle-category-images/triceps-muscles.jpg",
  info:
    "The triceps brachii is the muscle that runs down the back of the humerus, which is the long bone of the upper arm, and ends at the top of the ulna, which is the long bone of the forearm. The triceps brachii gets its name because it contains three muscle 'heads' or points of origin. These include: Medial head, Lateral head, and Long Head",
  muscleFunction:
    "The triceps help in elbow joint extension and act as an antagonist to the biceps and brachialis. They also help stabilize the shoulder by keeping the humerus in the correct position in the shoulder joint."
};

const hamstringsSectionContent = {
  title: "Hamstrings",
  src: "exercise-images/muscle-category-images/hamstring-muscles.jpg",
  info:
    "The hamstrings are a group of three muscles which predominatly act to flex the knee. They are the Semitendinosus, Semimembranosus and Biceps Femoris.",
  muscleFunction:
    "The hamstrings cross and act upon two joints, the hip and knee. They help extend the hip when the trunk is flexed and they also flex the knee inwardly and help rotate the lower leg when the knee is bent. These muscles play a crucial role in many daily activities such as walking, jumping, running and controlling some movements in the gluteus. They are most important as an antagonist to the quadriceps int he deceleration of knee extension."
};

const glutealsSectionContent = {
  title: "Gluteal Muscles",
  src: "exercise-images/muscle-category-images/glute-muscles.jpg",
  info:
    "The glute muscles are composed of three muscles: Gluteus maximus, medius and minimus. These muscles play a crucial role in most athletic endevours and are extremely powerful movers of the hip. They are characteristically built in a rounded shape.",
  muscleFunction:
    "The function of these muscles includes extension, abduction, lateral rotation and medial rotation of the hip joint."
};

const quadsSectionContent = {
  title: "Quadriceps Femoris",
  src: "exercise-images/muscle-category-images/quad-muscles.jpg",
  info:
    "The quads are a large muscle group that includes the four muscles of the front thigh. The quadriceps are composed of the Rectus femoris, Vastus lateralis, Vastus medialis and astus intermedius.",
  muscleFunction:
    "All four quadriceps are powerful extensors of the knee joint. They are crucial for walking, running, jumping and squatting. The quadriceps also play an important role in stabilizing the patella and knee joint during gait"
};


const data = [
  {
    name: "quadriceps",
    key: "quadA",
    img: {
      src: "exercise-images/site-images/muscle-map/01.A-Quads.png",
      alt: "quads",
      class: "muscle-image-quadA"
    },
    sectionContent: quadsSectionContent
  },
  {
    name: "quadriceps",
    key: "quadB",
    img: {
      src: "exercise-images/site-images/muscle-map/01.B-Quads.png",
      alt: "Quads",
      class: "muscle-image-quadB"
    },
    sectionContent: quadsSectionContent
  },
  {
    name: "abdominals",
    key: "abs",
    img: {
      src: "exercise-images/site-images/muscle-map/04.-Obliques.png",
      alt: "Abs",
      class: "muscle-image-abs"
    },
    sectionContent: absSectionContent
  },
  {
    name: "biceps",
    key: "bicepsA",
    img: {
      src: "exercise-images/site-images/muscle-map/05.A-Biceps.png",
      alt: "Biceps",
      class: "muscle-image-bicepsA"
    },
    sectionContent: bicepsSectionContent
  },
  {
    name: "biceps",
    key: "bicepsB",
    img: {
      src: "exercise-images/site-images/muscle-map/05.B-Biceps.png",
      alt: "Biceps",
      class: "muscle-image-bicepsB"
    },
    sectionContent: bicepsSectionContent
  },
  {
    name: "chest",
    key: "pecs",
    img: {
      src: "exercise-images/site-images/muscle-map/06.-Pecs.png",
      alt: "Pecs",
      class: "muscle-image-pecs"
    },
    sectionContent: pectoralsSectionContent
  },
  {
    name: "shoulders",
    key: "deltA",
    img: {
      src: "exercise-images/site-images/muscle-map/07.A-Deltoids.png",
      class: "muscle-image-deltoidA",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "shoulders",
    key: "deltB",
    img: {
      src: "exercise-images/site-images/muscle-map/07.B-Deltoids.png",
      class: "muscle-image-deltoidB",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "shoulders",
    key: "deltC",
    img: {
      src: "exercise-images/site-images/muscle-map/07.C-Deltoids.png",
      class: "muscle-image-deltoidC",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "shoulders",
    key: "deltsD",
    img: {
      src: "exercise-images/site-images/muscle-map/07.D-Deltoids.png",
      class: "muscle-image-deltoidD",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "calves",
    key: "calfA",
    img: {
      src: "exercise-images/site-images/muscle-map/13.A-Calves.png",
      class: "muscle-image-calvesA",
      alt: "Calves"
    },
    sectionContent: calvesSectionContent
  },
  {
    name: "calves",
    key: "calfB",
    img: {
      src: "exercise-images/site-images/muscle-map/13.B-Calves.png",
      class: "muscle-image-calvesB",
      alt: "Calves"
    },
    sectionContent: calvesSectionContent
  },
  {
    name: "calves",
    key: "calfC",
    img: {
      src: "exercise-images/site-images/muscle-map/13.C-Calves.png",
      class: "muscle-image-calvesC",
      alt: "Calves"
    },
    sectionContent: calvesSectionContent
  },
  {
    name: "calves",
    key: "calfD",
    img: {
      src: "exercise-images/site-images/muscle-map/13.D-Calves.png",
      class: "muscle-image-calvesD",
      alt: "Calves"
    },
    sectionContent: calvesSectionContent
  },
  {
    name: "back",
    key: "back",
    img: {
      src: "exercise-images/site-images/muscle-map/08.C-Traps.png",
      class: "muscle-image-trapsC",
      alt: "Back"
    },
    sectionContent: backSectionContent
  },
  {
    name: "back",
    key: "back",
    img: {
      src: "exercise-images/site-images/muscle-map/10.A-Lats.png",
      class: "muscle-image-latsA",
      alt: "Back"
    },
    sectionContent: backSectionContent
  },
  {
    name: "back",
    key: "back",
    img: {
      src: "exercise-images/site-images/muscle-map/10.B-Lats.png",
      class: "muscle-image-latsB",
      alt: "Back"
    },
    sectionContent: backSectionContent
  },
  {
    name: "back",
    key: "back",
    img: {
      src: "exercise-images/site-images/muscle-map/15.-Lower-back.png",
      class: "muscle-image-lower-back",
      alt: "Back"
    },
    sectionContent: backSectionContent
  },
  {
    name: "triceps",
    key: "tricepsA",
    img: {
      src: "exercise-images/site-images/muscle-map/09.A-Triceps.png",
      class: "muscle-image-tricepsA",
      alt: "Triceps"
    },
    sectionContent: tricepsSectionContent
  },
  {
    name: "triceps",
    key: "tricepsB",
    img: {
      src: "exercise-images/site-images/muscle-map/09.B-Triceps.png",
      class: "muscle-image-tricepsB",
      alt: "Triceps"
    },
    sectionContent: tricepsSectionContent
  },
  {
    name: "glutes",
    key: "glutes",
    img: {
      src: "exercise-images/site-images/muscle-map/11.-Glutes.png",
      class: "muscle-image-glutes",
      alt: "glutes"
    },
    sectionContent: glutealsSectionContent
  },
  {
    name: "hamstrings",
    key: "hamstringsA",
    img: {
      src: "exercise-images/site-images/muscle-map/12.A-Hamstrings.png",
      class: "muscle-image-hamstringsA",
      alt: "Hamstrings"
    },
    sectionContent: hamstringsSectionContent
  },
  {
    name: "hamstrings",
    key: "hamstringsB",
    img: {
      src: "exercise-images/site-images/muscle-map/12.B-Hamstrings.png",
      class: "muscle-image-hamstringsB",
      alt: "Hamstrings"
    },
    sectionContent: hamstringsSectionContent
  },
];

export default data;