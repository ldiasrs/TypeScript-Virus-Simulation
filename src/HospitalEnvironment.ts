import { Patient } from "./Patient";
import { Virus } from "./Virus";

export interface HospitalEnvironment {
    addPatient(patient : Patient) : HospitalEnvironment;
    infect(virus : Virus);
    allPatients() : Array<Patient>;
    infectedPatients(): Array<Patient|Virus>;
}