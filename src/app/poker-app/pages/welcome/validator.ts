import {AbstractControl, ValidatorFn} from '@angular/forms';

export function uniqaMailValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
            const uniqaMail = !control.value.endsWith('@uniqa.at');
            return uniqaMail ? {uniqaMail: true} : null;
    };
}
