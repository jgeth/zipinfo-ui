import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
	providedIn: 'root'
})
export class ZipinfoService {

	protected constructor(protected http: HttpClient) {}

	public getZipInfo(zipcode: string): Observable<any> {
		return this.http.get<any>('/api/' + zipcode);
	}
}
