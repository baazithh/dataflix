export type MedallionLayer = "Bronze" | "Silver" | "Gold";

export type Dataset = {
  id: string;
  name: string;
  description: string;
  source: string;
  lastUpdated: string;
  health: "Healthy" | "At Risk";
  rowCount: string;
  layer: MedallionLayer;
  tags: string[];
};
