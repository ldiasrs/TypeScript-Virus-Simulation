import {Patient} from "./Patient";
import {Virus} from "./Virus";
import {HospitalEnvironment} from "./HospitalEnvironment";
import {infectPatient} from "./InfectSimulation";

export class HospitalEnvironmentDefault implements HospitalEnvironment {
  private _patients: Array<Patient> = [];

  private _infectedPatients: Map<Virus,Array<Patient>> = new Map<Virus, Array<Patient>>();

  public infect(virus: Virus) {
    this._infectedPatients.set(virus, new Array());
    this._patients.forEach((patient) => {
      if (infectPatient(patient, virus)) {
        this._infectedPatients.get(virus).push(patient);
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

  public infectedPatients():  Map<Virus,Array<Patient>>  {
    return this._infectedPatients;
  }
}
