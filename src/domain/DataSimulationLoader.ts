import { Virus } from "./Virus";
import { Patient } from "./Patient";

export interface DataSimulationLoader {
    loadVirus() : Virus[];
    loadPatients() : Patient[];
}