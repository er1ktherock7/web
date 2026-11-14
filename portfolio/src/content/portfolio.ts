export const profile = {
  name: "Lucas Herick",
  shortName: "Herick",
  email: "lucasherick@naver.com",
  github: "https://github.com/er1ktherock7",
  linkedin: "",
  spotify: "https://open.spotify.com/artist/7dODcc4gVvf7FCEWJDSz9D",
  appleMusic: "https://music.apple.com/ng/artist/lucas-herick/1288609657",
  bio: "I’m Lucas Herick, a Brazil-based builder working across data analytics, data engineering, and software development. Mathematics shaped the way I think: look for the structure, ask better questions, and make the complex understandable.",
};
export const projects = [
  {
    slug: "er-diagram-maker",
    number: "01",
    title: "ER Diagram Maker",
    category: "DATA & DEVELOPMENT",
    type: "diagram",
    tags: ["JavaScript", "SVG", "Data modeling"],
    description:
      "From abstract relationships to a clearer picture. A browser-based workspace for modeling entities and their connections.",
    file: "DER_maker.html",
    challenge:
      "Database relationships are easier to reason about when you can see and rearrange them. This tool brings entity modeling into a self-contained browser workspace.",
    approach:
      "The source implements editable entities, relationship connections, pan and zoom, undo and redo, and JSON import and export. Local storage preserves the workspace between sessions.",
    outcome:
      "A practical personal tool for exploring database structure. This overview describes the public source; no adoption or performance claims are implied.",
  },
  {
    slug: "chroma-tuner",
    number: "02",
    title: "Chroma Tuner",
    category: "MUSIC & TECHNOLOGY",
    type: "tuner",
    tags: ["JavaScript", "Web Audio", "Signal analysis"],
    description:
      "A meeting point for music and code. Exploring pitch, frequency, and chord recognition in the browser.",
    file: "guitar_tuner3.html",
    challenge:
      "A guitar note is both a musical idea and a signal. This experiment explores how browser audio APIs can connect those two perspectives.",
    approach:
      "The source requests microphone access after user interaction, analyzes audio with the Web Audio API, and includes note and chord identification logic.",
    outcome:
      "An exploratory audio application, with source available for inspection. Detection accuracy and microphone compatibility have not been independently benchmarked.",
  },
  {
    slug: "bpm-tap-tool",
    number: "03",
    title: "BPM Tap Tool",
    category: "CREATIVE UTILITIES",
    type: "tempo",
    tags: ["JavaScript", "Timing", "Interaction"],
    description:
      "Find the rhythm in a few taps. A focused utility for estimating tempo and checking timing consistency.",
    file: "bpm_tap_tool.html",
    challenge:
      "When a rhythm catches your attention, finding its tempo should be immediate. The interface puts the tapping action at the center.",
    approach:
      "The public implementation accepts mouse, touch, and space-bar taps. It calculates tempo from recent intervals and provides average interval and consistency feedback.",
    outcome:
      "A lightweight music utility with reset and copy controls. The interactive study on this portfolio is a new, simplified implementation inspired by that project.",
  },
] as const;
export const skills = [
  {
    title: "Data engineering",
    text: "Building the path from raw information to useful data.",
    items: ["Python", "Scala", "SQL", "Azure", "Databricks", "Data pipelines"],
  },
  {
    title: "Software development",
    text: "Turning ideas and repetitive tasks into usable tools.",
    items: ["Python", "Java", "Automation", "Web development"],
  },
  {
    title: "Analytical thinking",
    text: "Finding structure, asking questions, and interpreting results.",
    items: ["Mathematics", "Data analytics", "Problem solving"],
  },
];
