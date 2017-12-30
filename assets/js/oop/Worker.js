import User from './User';

export default function Worker(name, surname, age) {
    User.apply(this, arguments);

    let minAge = 18;

    this.canWork = function () {
        return this._age >= minAge;
    }

    let parentDetails = this.details;

    this.details = function () {
        return 'Worker ' + parentDetails.call(this);
    }
}