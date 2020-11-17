import {Observable} from 'rxjs';

export interface ITabSwitcher {
  currentIndex: Observable<number>;

  activateIndex: (index: number) => void;
}
