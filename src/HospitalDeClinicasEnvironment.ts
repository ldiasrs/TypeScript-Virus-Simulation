import { Patient } from "./domain/Patient";
import { Virus } from "./domain/Virus";
import { HospitalEnvironment } from "./domain/HospitalEnvironment";
import { infectPatient } from "./domain/InfectSimulation";
export class HospitalDeClinicasEnvironment implements HospitalEnvironment {
  private _patients: Array<Patient> = [];

  private _infectedPatients: Array<Patient | Virus> = [];

  public infect(virus: Virus) {
    this._patients.forEach((patient) => {
      if (infectPatient(patient, virus)) {
        this._infectedPatients.push(patient, virus);
      }
    });
  }

  public addPatient(patient: Patient): HospitalEnvironment {
    this._patients.push(patient);
    return this;
  }

  public allPatients(): Array<Patient> {
    return this._patients;
  }

  public infectedPatients(): Array<Patient | Virus> {
    return this._infectedPatients;
  }
}
