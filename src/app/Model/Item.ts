export class Item{
    private _id:number;
    private _name:string;
    private _units:number;
    private _pricePerUnit:number;


    constructor( name:string, units:number, pricePerUnit:number){
        this._id=0;//default
        this._name=name;
        this._units=units;
        this._pricePerUnit=pricePerUnit;
    }
    
	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get units(): number {
		return this._units;
	}

	public set units(value: number) {
		this._units = value;
	}

	public get pricePerUnit(): number {
		return this._pricePerUnit;
	}

	public set pricePerUnit(value: number) {
		this._pricePerUnit = value;
	}

	getTotal():number{
        return this._units*this._pricePerUnit;
    }
}