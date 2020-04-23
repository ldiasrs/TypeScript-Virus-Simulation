import {HospitalEnvironment} from "./HospitalEnvironment";

export class ReportInfectionAsString {

    private _hospitalEnv : HospitalEnvironment;
    private _finalReport : string = "";

    constructor(hospitalEnv: HospitalEnvironment) {
        this._hospitalEnv = hospitalEnv;
    }

    public  buildReport() : string {
        let totalPatients = this._hospitalEnv.allPatients().length;
        let infectedPatients = this.countInfectedPatients();
        let notInfectedPatients = totalPatients - infectedPatients;
        let olderInfectedPatients = this.countOlderThan(70);
        let youngerInfectedPatients = infectedPatients-olderInfectedPatients;
        this.concatReport("Simulation report of infection")
        this.concatReport("* Virus: " +   JSON.stringify(this._hospitalEnv.infectedPatients().keys().next().value))
        this.concatReport("* Total patients: " + totalPatients)
        this.concatReport(`* Not infected patients: ${notInfectedPatients} (${Math.floor((notInfectedPatients/totalPatients*100))}%)`);
        this.concatReport(`* Infected patients: ${infectedPatients} (${Math.floor((infectedPatients/totalPatients*100))}%)`);
        this.concatReport(`* ---- age > 70: ${olderInfectedPatients} (${Math.floor((olderInfectedPatients/infectedPatients*100))}%)`);
        this.concatReport(`* ---- age < 70: ${youngerInfectedPatients} (${Math.floor((youngerInfectedPatients/infectedPatients*100))}%)`);
        return this._finalReport;
    }

    private countInfectedPatients() {
        let count = 0;
        for (let patients of this._hospitalEnv.infectedPatients().values()) {
            patients.forEach(p => {
                count++;
            });
        }
        return count;
    }

    private countOlderThan(age: number) {
        let count = 0;
        for (let patients of this._hospitalEnv.infectedPatients().values()) {
            patients.forEach(p => {
                if (age <= p.age) {
                    count++;
                }
            });
        }
        return count;
    }

    private concatReport(line : string) {
        this._finalReport = this._finalReport + "\n" + line;
    }
}