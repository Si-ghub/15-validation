/*class Validation {
    isValidFirstName(firstName) {
        // blogai jeigu ne stringas
        // blogai jeigu simboliu yra maziau nei du
        // blogai jei pirmoji vardo raide===mazoji
        // blogai jeigu
        if (!this.isValidMessage(firstName)) {
            return false;
        }
        if (firstName.lenght < 2) {
            return false;
        }
        if (firstName[0].toLowerCase() === firstName[0]) {
            return false;
        }
        if (firstName.slice(1).toLowerCase() !== firstName.slice(1)) {
            return false;
        }
        return true;

    }

    isValidLastName(lastName) {
        // blogai jeigu ne stringas
        // blogai jeigu simboliu yra maziau nei du
        // blogai jeigu pirmoji vardo raide===mazoji
        if (!this.isValidMessage(lastName)) {
            return false;
        }
        if (lastName.lenght < 2) {
            return false;
        }
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        // blogai jeigu nera stringas
        // blogai jeigu tekstas 'tuscia'
        if (typeof message !== 'string' || message === '') {
            return false;
        }
        return true;
    }

    isValidPhoneNumber() {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }

}

module.exports = Validation;
*/