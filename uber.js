class Uber{
    constructor(basefare,costperkm,waitingcharge){
        this.basefare=basefare;
        this.costperkm=costperkm;
        this.waitingcharge=waitingcharge;
    }

calculator(distanceinKM,waitingtime){
    const distancecost = this.costperkm * distanceinKM;
    const waitingcost = this.waitingcharge * waitingtime;
    const totalcost = this.basefare + waitingcost + distancecost;
    return totalcost;

}
}

const Ubercal = new Uber(2.5,8,2);

const calc = Ubercal.calculator(5,60)

console.log(`Your Uber total fare is $${calc.toFixed(2)}`)
// output:-  Your Uber total fare is $162.50
