import { StepModel } from "./step.model";

export class RecipeModel{
    id: number;
    name: string;
    note: number;
    duree: number;
    description: string;
    difficulty: number;
    steps: Array<StepModel>;
}