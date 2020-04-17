import { Patient } from "./Patient";
import { Virus } from "./Virus";
import { HospitalEnvironment } from "./HospitalEnvironment";

export class HospitalDeClinicasEnvironment implements HospitalEnvironment {


    private _patients: Array<Patient> = [];

    private _infectedPatients : Array<Patient|Virus> = []

    public infect(virus : Virus) {
        this._patients.forEach(patient => {
            this.infectPatient(patient, virus);
        });
    }

    private infectPatient(patient: Patient, virus: Virus) {
        let finalInfectionRate = virus.infectionRate;
        if (patient.age > 70 && patient.age <= 80) {
            finalInfectionRate += 0.229;
        } else if (patient.age > 80) {
            finalInfectionRate += 0.35;
        }
        patient.deseases.forEach(desease => {
            finalInfectionRate+=desease.complicatingRiskRate;
        });
        let isInfected = this.randomInfect(finalInfectionRate);
        if (isInfected) {
            this._infectedPatients.push(patient,virus);
        }
    }

    private randomInfect(rate : number) {
        let random =  Math.floor(Math.random() * Math.floor(100));
        let rateDecimal = rate * 100
        return random < rateDecimal;
      }

    public addPatient(patient : Patient): HospitalEnvironment {
        this._patients.push(patient);
        return this;
    }

    public allPatients(): Array<Patient> {
        return this._patients;
    }

    public infectedPatients(): Array<Patient|Virus> {
        return this._infectedPatients;
    }
}