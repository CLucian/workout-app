const quadsSectionContent = {
	title: "Quadriceps",
	info:
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus. a;djfhalkjdhflajdhflk"
};

const absSectionContent = {
	title: "Abdominals",
	info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const bicepsSectionContent = {
	title: "Biceps",
  	info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const pectoralsSectionContent = {
  title: "Pectorals",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const deltoidsSectionContent = {
  title: "Deltoids",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const calvesSectionContent = {
  title: "Calves",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const backSectionContent = {
  title: "Back",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const tricepsSectionContent = {
  title: "Triceps",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const hamstringsSectionContent = {
  title: "Hamstrings",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};

const glutealsSectionContent = {
  title: "Gluteal Muscles",
  info:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, natus."
};


const data = [
  {
    name: "quads",
    key: "quadA",
    img: {
      src: "exercise-images/site-images/muscle-map/01.A-Quads.png",
      alt: "quads",
      class: "muscle-image-quadA"
    },
    // SectionComponent: QuadSection,
    sectionContent: quadsSectionContent
  },
  {
    name: "quads",
    key: "quadB",
    img: {
      src: "exercise-images/site-images/muscle-map/01.B-Quads.png",
      alt: "Quads",
      class: "muscle-image-quadB"
    },
    sectionContent: quadsSectionContent
  },
  {
    name: "abs",
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
    name: "pecs",
    key: "pecs",
    img: {
      src: "exercise-images/site-images/muscle-map/06.-Pecs.png",
      alt: "Pecs",
      class: "muscle-image-pecs"
    },
    sectionContent: pectoralsSectionContent
  },
  {
    name: "delts",
    key: "deltA",
    img: {
      src: "exercise-images/site-images/muscle-map/07.A-Deltoids.png",
      class: "muscle-image-deltoidA",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "delts",
    key: "deltB",
    img: {
      src: "exercise-images/site-images/muscle-map/07.B-Deltoids.png",
      class: "muscle-image-deltoidB",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "delts",
    key: "deltC",
    img: {
      src: "exercise-images/site-images/muscle-map/07.C-Deltoids.png",
      class: "muscle-image-deltoidC",
      alt: "Deltoids"
    },
    sectionContent: deltoidsSectionContent
  },
  {
    name: "delts",
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