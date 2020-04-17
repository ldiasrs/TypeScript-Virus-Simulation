export class Virus {
    private _infectionRate: number;
    private _name: string;

	constructor(name: string, infectionRate: number) {
        this._name = name;
        this._infectionRate = infectionRate;
	}

    public get infectionRate(): number {
        return this._infectionRate;
    }

    public get name(): string {
        return this._name;
    }
}