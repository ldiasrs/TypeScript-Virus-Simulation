
import { HospitalEnvironmentDefault } from './domain/HospitalEnvironmentDefault';
import {JSONDataSimulationLoader} from "./external/JSONDataSimulationLoader";
import {ReportInfectionAsString} from "./domain/ReportInfectionAsString";
const dataSimulation = new JSONDataSimulationLoader();

console.log("\n" +
    "____   ____.__                        _________.__              .__          __  .__               \n" +
    "\\   \\ /   /|__|______ __ __  ______  /   _____/|__| _____  __ __|  | _____ _/  |_|__| ____   ____  \n" +
    " \\   Y   / |  \\_  __ \\  |  \\/  ___/  \\_____  \\ |  |/     \\|  |  \\  | \\__  \\\\   __\\  |/  _ \\ /    \\ \n" +
    "  \\     /  |  ||  | \\/  |  /\\___ \\   /        \\|  |  Y Y  \\  |  /  |__/ __ \\|  | |  (  <_> )   |  \\\n" +
    "   \\___/   |__||__|  |____//____  > /_______  /|__|__|_|  /____/|____(____  /__| |__|\\____/|___|  /\n" +
    "                                \\/          \\/          \\/                \\/                    \\/ \n")
let patients = dataSimulation.loadPatients();
let virusList = dataSimulation.loadVirus();
const hospital = new HospitalEnvironmentDefault();
hospital.addPatients(patients);
virusList.forEach(virus => {
    hospital.infect(virus);
});

console.log(new ReportInfectionAsString(hospital).buildReport())
console.log("END")
//TODO write documentation of how to use
