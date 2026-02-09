export const INK = "#141414";

export const ACCENT_KEYS = [
  "colorless",
  "earth",
  "water",
  "plant",
  "fire",
  "metal",
] as const;

export type AccentKey = (typeof ACCENT_KEYS)[number];
export type SnapshotKey = "A" | "B" | "C" | "D";

export type AccentTokens = {
  appBg: string;
  cardBg: string;
  cardContentBg: string;
  cardHeaderBg: string;
  manaBg: string;
};

export type AccentPreview = {
  key: AccentKey;
  label: string;
  tokens: AccentTokens;
};

const ACCENT_LABELS_BY_KEY: Record<AccentKey, string> = {
  colorless: "Colorless",
  earth: "Earth",
  water: "Water",
  plant: "Plant",
  fire: "Fire (Plasma)",
  metal: "Metal",
};

const snapshotTokens: Record<SnapshotKey, Record<AccentKey, AccentTokens>> = {
  A: {
    colorless: {
      appBg: "#fbfbfb",
      cardBg: "#f2f2f2",
      cardContentBg: "#fefefe",
      cardHeaderBg: "#e9e9e9",
      manaBg: "#d7d7d7",
    },
    earth: {
      appBg: "#fefbe8",
      cardBg: "#f8f3d5",
      cardContentBg: "#fefdf7",
      cardHeaderBg: "#f2eab4",
      manaBg: "#e6d35c",
    },
    water: {
      appBg: "#f7faff",
      cardBg: "#eaf3ff",
      cardContentBg: "#fbfdff",
      cardHeaderBg: "#dae9ff",
      manaBg: "#b5d3ff",
    },
    plant: {
      appBg: "#f0fff0",
      cardBg: "#e2f9e2",
      cardContentBg: "#f9fef9",
      cardHeaderBg: "#ccf5cc",
      manaBg: "#94e997",
    },
    fire: {
      appBg: "#fff8fa",
      cardBg: "#ffecf2",
      cardContentBg: "#fffbfc",
      cardHeaderBg: "#ffdde9",
      manaBg: "#ffbad4",
    },
    metal: {
      appBg: "#fef8ff",
      cardBg: "#fbecff",
      cardContentBg: "#fefbff",
      cardHeaderBg: "#f9ddff",
      manaBg: "#f2b9ff",
    },
  },
  B: {
    colorless: {
      appBg: "#fbfbfb",
      cardBg: "#f2f2f2",
      cardContentBg: "#fefefe",
      cardHeaderBg: "#e9e9e9",
      manaBg: "#d7d7d7",
    },
    earth: {
      appBg: "#fefbe8",
      cardBg: "#f8f3d5",
      cardContentBg: "#fefdf7",
      cardHeaderBg: "#f2eab4",
      manaBg: "#e6d35c",
    },
    water: {
      appBg: "#f8fafd",
      cardBg: "#eaf3ff",
      cardContentBg: "#fbfdff",
      cardHeaderBg: "#d7e8ff",
      manaBg: "#a8cbff",
    },
    plant: {
      appBg: "#f0fff0",
      cardBg: "#d6f3d7",
      cardContentBg: "#f9fef9",
      cardHeaderBg: "#b1edb4",
      manaBg: "#68cb6e",
    },
    fire: {
      appBg: "#fef9f8",
      cardBg: "#ffe6e5",
      cardContentBg: "#fffbfb",
      cardHeaderBg: "#ffcbcc",
      manaBg: "#ff4b55",
    },
    metal: {
      appBg: "#f8f2ff",
      cardBg: "#f1e0ff",
      cardContentBg: "#fdfcff",
      cardHeaderBg: "#dcc0ff",
      manaBg: "#9a5dff",
    },
  },
  C: {
    colorless: {
      appBg: "#fbfbfb",
      cardBg: "#f2f2f2",
      cardContentBg: "#fefefe",
      cardHeaderBg: "#e9e9e9",
      manaBg: "#d7d7d7",
    },
    earth: {
      appBg: "#fefbe8",
      cardBg: "#f8f3d5",
      cardContentBg: "#fefdf7",
      cardHeaderBg: "#f2eab4",
      manaBg: "#e6d35c",
    },
    water: {
      appBg: "#f8fafd",
      cardBg: "#eaf3ff",
      cardContentBg: "#fbfdff",
      cardHeaderBg: "#d6e7ff",
      manaBg: "#a2c7ff",
    },
    plant: {
      appBg: "#f0fff0",
      cardBg: "#d2f1d4",
      cardContentBg: "#f9fef9",
      cardHeaderBg: "#a9e8ad",
      manaBg: "#63c96b",
    },
    fire: {
      appBg: "#fef9f8",
      cardBg: "#ffe3e1",
      cardContentBg: "#fffbfb",
      cardHeaderBg: "#ffc4c5",
      manaBg: "#ff3d49",
    },
    metal: {
      appBg: "#f7f0ff",
      cardBg: "#ecd9ff",
      cardContentBg: "#fdfcff",
      cardHeaderBg: "#d6b8ff",
      manaBg: "#9a5dff",
    },
  },
  D: {
    colorless: {
      appBg: "#fbfbfb",
      cardBg: "#f2f2f2",
      cardContentBg: "#fefefe",
      cardHeaderBg: "#e9e9e9",
      manaBg: "#d7d7d7",
    },
    earth: {
      appBg: "#fefbe8",
      cardBg: "#f8f3d5",
      cardContentBg: "#fefdf7",
      cardHeaderBg: "#f2eab4",
      manaBg: "#e6d35c",
    },
    water: {
      appBg: "#f8fafd",
      cardBg: "#eaf3ff",
      cardContentBg: "#fbfdff",
      cardHeaderBg: "#d6e7ff",
      manaBg: "#a2c7ff",
    },
    plant: {
      appBg: "#f0fff0",
      cardBg: "#d2f1d4",
      cardContentBg: "#f9fef9",
      cardHeaderBg: "#a9e8ad",
      manaBg: "#63c96b",
    },
    fire: {
      appBg: "#fef9f8",
      cardBg: "#ffe3e1",
      cardContentBg: "#fffbfb",
      cardHeaderBg: "#ffc4c5",
      manaBg: "#ff3d49",
    },
    metal: {
      appBg: "#f7f0ff",
      cardBg: "#ecd9ff",
      cardContentBg: "#fdfcff",
      cardHeaderBg: "#d6b8ff",
      manaBg: "#9a5dff",
    },
  },
};

function buildSnapshot(snapshotKey: SnapshotKey): AccentPreview[] {
  return ACCENT_KEYS.map((accentKey) => ({
    key: accentKey,
    label: ACCENT_LABELS_BY_KEY[accentKey],
    tokens: snapshotTokens[snapshotKey][accentKey],
  }));
}

export const SNAPSHOT_LABELS: Record<SnapshotKey, string> = {
  A: "Snapshot A (2026-02-06)",
  B: "Snapshot B (2026-02-08)",
  C: "Snapshot C (2026-02-08)",
  D: "Snapshot D (Live / Unfrozen)",
};

export const SNAPSHOT_KEYS: SnapshotKey[] = ["A", "B", "C", "D"];

export const SNAPSHOTS: Record<SnapshotKey, AccentPreview[]> = {
  A: buildSnapshot("A"),
  B: buildSnapshot("B"),
  C: buildSnapshot("C"),
  D: buildSnapshot("D"),
};

export const TOKEN_FIELDS: Array<{ key: keyof AccentTokens; name: string }> = [
  { key: "appBg", name: "--app-bg" },
  { key: "cardBg", name: "--card-bg" },
  { key: "cardContentBg", name: "--card-content-bg" },
  { key: "cardHeaderBg", name: "--card-header-bg" },
  { key: "manaBg", name: "--mana-bg" },
];

export function styleForAccent(tokens: AccentTokens): string {
  return [
    `--ink:${INK}`,
    `--color-accent-wallpaper:${tokens.appBg}`,
    `--color-accent-surface:${tokens.cardBg}`,
    `--color-accent-highlight:${tokens.cardHeaderBg}`,
    `--color-accent-full:${tokens.manaBg}`,
    `--color-content-surface:${tokens.cardContentBg}`,
    `--app-bg:${tokens.appBg}`,
    `--card-bg:${tokens.cardBg}`,
    `--card-content-bg:${tokens.cardContentBg}`,
    `--card-header-bg:${tokens.cardHeaderBg}`,
    `--mana-bg:${tokens.manaBg}`,
  ].join(";");
}

export function tokenRows(
  tokens: AccentTokens,
): Array<{ name: string; value: string }> {
  return TOKEN_FIELDS.map((field) => ({
    name: field.name,
    value: tokens[field.key],
  }));
}

export const ACCENT_LABELS: Record<AccentKey, string> = ACCENT_KEYS.reduce(
  (labels, key) => {
    labels[key] = ACCENT_LABELS_BY_KEY[key];
    return labels;
  },
  {} as Record<AccentKey, string>,
);
