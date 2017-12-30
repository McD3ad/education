export default function User(name, surname, age) {
    this._name = name;
    this._surname = surname;
    this._age = age;

    let self = this;

    function compactName() {
        return self._name + ' ' + self._surname;
    }

    this.details = function () {
        return compactName() + ' has ' + this._age + ' years old.';
    }
}