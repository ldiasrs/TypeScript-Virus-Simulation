export class Desease {

    private readonly _name : string;
    private readonly _complicatingRiskRate : number;

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