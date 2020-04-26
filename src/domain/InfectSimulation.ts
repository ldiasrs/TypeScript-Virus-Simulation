import { Patient } from "./Patient";
import { Virus } from "./Virus";

function randomInfect(rate: number) {
  let random = Math.floor(Math.random() * Math.floor(100));
  let rateDecimal = rate * 100;
  return random < rateDecimal;
}

function incrementInfectionRateByAge(age : number) {
  let finalInfectionRate = 0;
  if (age > 70 && age <= 80) {
    finalInfectionRate += 0.229;
  } else if (age > 80) {
    finalInfectionRate += 0.35;
  }
  return finalInfectionRate;
}

function infectPatient(patient: Patient, virus: Virus) : boolean {
  let finalInfectionRate = virus.infectionRate;
  finalInfectionRate += incrementInfectionRateByAge(patient.age);
  patient.deseases.forEach(disease => {
    finalInfectionRate += disease.complicatingRiskRate;
  });
  return randomInfect(finalInfectionRate);
}

export {infectPatient}
export {incrementInfectionRateByAge}