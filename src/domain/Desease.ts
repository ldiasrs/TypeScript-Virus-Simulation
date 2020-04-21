export class Desease {

    private _name : string;
    private _complicatingRiskRate : number;

	constructor(name : string, complicatingRiskRate : number) {
        this._name = name;
        this._complicatingRiskRate = complicatingRiskRate;
	}

	public get complicatingRiskRate(): number {
		return this._complicatingRiskRate;
	}


	public get name(): string {
		return this._name;
	}
    
}