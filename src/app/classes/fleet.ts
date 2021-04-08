import BigNumber from 'bignumber.js';
import { distances } from '../data/factors';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Planet } from './planet';

export class Fleet {
    planet: Planet;
    count: BigNumber;
    volume: BigNumber;
    stored: { [key : string] : BigNumber };
    speed: BigNumber;
    acceleration: BigNumber;
    times: BigNumber[] = [];
    dists: BigNumber[] = [];
    isTraveling: boolean = false;
    isForward: boolean = false;
    remainingTime: BigNumber;

    constructor(planet: Planet){
        this.planet = planet;
        this.count = new BigNumber(1);
        this.speed = new BigNumber(1);
        this.stored = {};
        this.acceleration = new BigNumber(1);
        this.volume = new BigNumber(32);
        this.dists = distances[this.planet.id];
        this.setTimes();
    }

    setTimes(){
        this.times = [];
        for (let i=0; i<this.dists.length; i++){
            this.times.push(this._timeForDistance(this.dists[i]))
        }
    }

    sendTo(target_planet: Planet){
        let ms = 1000 * this.times[target_planet.id].toNumber();
        this.isTraveling = true;
        this.isForward = true;
        this.remainingTime = this.times[target_planet.id].multipliedBy(2);

        const source = interval(1000);
        const timer_1$ = timer(ms);
        const timer_2$ = timer(2*ms);  // forward + backward
        
        source.pipe(takeUntil(timer_2$)).subscribe(() => {
            this.remainingTime = this.remainingTime.minus(1);
        });

        timer_1$.subscribe(() => {
            this.isForward = false;
            this._getRessourcesFrom(target_planet)

            timer_1$.subscribe(() => {
                this._unloadRessources()
                this.isTraveling = false;
            });
        });
    }

    private _getRessourcesFrom(planet: Planet){

    }

    private _unloadRessources(){

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
        this.volume = this.volume.multipliedBy(2);
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