import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HearData} from "./header-data.model";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    private _headerData = new BehaviorSubject<HearData>({
        title: 'Início',
        icon: 'home',
        routerUrl: ''
    })

    constructor() {
    }

    get headerData(): HearData {
        return this._headerData.value
    }

    set headerData(hearData: HearData) {
        this._headerData.next(hearData)
    }
}
