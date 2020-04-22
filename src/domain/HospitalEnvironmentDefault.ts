import {Patient} from "./Patient";
import {Virus} from "./Virus";
import {HospitalEnvironment} from "./HospitalEnvironment";
import {infectPatient} from "./InfectSimulation";

export class HospitalEnvironmentDefault implements HospitalEnvironment {
  private _patients: Array<Patient> = [];

  private _infectedPatients: Array<Patient | Virus> = [];

  public infect(virus: Virus) {
    this._patients.forEach((patient) => {
      if (infectPatient(patient, virus)) {
        this._infectedPatients.push(patient, virus);
      }
    });
  }

  public addPatients(patients: Patient[]): HospitalEnvironment {
    //TODO concat did not worked this._patients.concat(patients);
    patients.forEach(p => {
      this.addPatient(p);
    })
    return this;
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