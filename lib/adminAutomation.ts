import fs from "fs";
import path from "path";

export type AutomationOption = { name: string; default: string | number | boolean | null; description: string };
export type AutomationEntrypoint = { step: string; script: string; command: string; options: AutomationOption[]; outputFiles: string[] };
export type NewsArticleType = { type: string; scope: string; lookbackMonths: number; uses: string[]; signalLimit?: number };
export type BunyangArticlePhase = { phase: string; condition: string; readerIntent: string; requiredFields: string[] };
export type PipelineOverviewStep = { order: number; name: string; script: string; input: string; output: string; visual: string };
export type CodeFlowStep = { script: string; calls: string[]; pipelineModules: string[]; generated: string[] };
export type StageArtifact = { stage: string; reads: string[]; writes: string[]; importantKeys: string[] };
export type BranchOptions = Record<string, string[]>;
export type AutomationFlow = {
  id: string;
  name: string;
  purpose: string;
  pipelineOverview: PipelineOverviewStep[];
  codeFlow: CodeFlowStep[];
  branchOptions: BranchOptions;
  entrypoints: AutomationEntrypoint[];
  filters?: string[];
  articleTypes?: NewsArticleType[];
  articlePhases?: BunyangArticlePhase[];
  stageArtifacts: StageArtifact[];
  dataRules?: string[];
  signalRules?: string[];
  payloadFields: string[];
  upgradeNotes: string[];
};
export type AutomationDashboard = {
  version: string;
  title: string;
  description: string;
  lastReviewedAt: string;
  sourceOfTruthNote: string;
  howToRead: string[];
  shared: {
    dateKey: { format: string; timezone: string; usedBy: string[] };
    configs: Array<{ name: string; path: string; usedBy: string }>;
    dataDirectories: Array<{ label: string; path: string }>;
    marketDataRules: string[];
  };
  flows: AutomationFlow[];
};

export function getAutomationDashboard(): AutomationDashboard {
  const filePath = path.join(process.cwd(), "content/admin/automation-flows.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as AutomationDashboard;
}
