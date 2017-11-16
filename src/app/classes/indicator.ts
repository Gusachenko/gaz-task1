export class Indicator {
    public id: string;
    
    public title: string;

    public value: number;

    public minValue: number;

    public maxValue: number;

    constructor(id: string, title: string, value: number, minValue: number, maxValue: number){
        this.id = id;
        this.title = title;
        this.value = value;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    
}
