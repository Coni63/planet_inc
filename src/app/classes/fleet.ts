import BigNumber from 'bignumber.js';
import { distances } from '../data/factors';


export class Fleet {
    planet_id: number;
    count: BigNumber;
    storage: BigNumber;
    speed: BigNumber;
    acceleration: BigNumber;
    times: BigNumber[] = []

    constructor(planet_id: number){
        this.planet_id = planet_id;
        this.count = new BigNumber(1);
        this.speed = new BigNumber(100);
        this.acceleration = new BigNumber(1);
        this.storage = new BigNumber(32);
        this.setTimes();
    }

    setTimes(){
        this.times = [];
        const distFromMe = distances[this.planet_id];
        for (let i=0; i<distFromMe.length; i++){
            this.times.push(this._timeForDistance(distFromMe[i]))
        }
    }

    upgrade_units(){
        this.count = this.count.plus(1);
    }

    upgrade_speed(){
        this.speed = this.speed.multipliedBy(2);
        this.setTimes();
    }

    upgrade_acceleration(){
        this.acceleration = this.acceleration.multipliedBy(2);
        this.setTimes();
    }

    upgrade_volume(){
        this.storage = this.storage.multipliedBy(2);
    }

    private _timeForDistance(distance: BigNumber): BigNumber {
        const timeAcc = this.speed.dividedBy(this.acceleration);
        const distAccDesc = this.acceleration.multipliedBy(timeAcc).multipliedBy(timeAcc);
        if (distance.isLessThan(distAccDesc)){
            return distance.dividedBy(this.acceleration).squareRoot().multipliedBy(2);
        } else {
            let timeRemaining = distance.minus(distAccDesc).dividedBy(this.speed);
            return timeAcc.multipliedBy(2).plus(timeRemaining);
        }
    }

}