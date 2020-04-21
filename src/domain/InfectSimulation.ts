import { Patient } from "./Patient";
import { Virus } from "./Virus";

function randomInfect(rate: number) {
  let random = Math.floor(Math.random() * Math.floor(100));
  let rateDecimal = rate * 100;
  return random < rateDecimal;
}

export function infectPatient(patient: Patient, virus: Virus) : boolean {
  let finalInfectionRate = virus.infectionRate;
  if (patient.age > 70 && patient.age <= 80) {
    finalInfectionRate += 0.229;
  } else if (patient.age > 80) {
    finalInfectionRate += 0.35;
  }
  patient.deseases.forEach((desease) => {
    finalInfectionRate += desease.complicatingRiskRate;
  });
  return randomInfect(finalInfectionRate);
}
