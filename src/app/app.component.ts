import { Component } from '@angular/core';
import { ZipinfoService } from './zipinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Zip Info';
  public zipcode: string;
  public results: any = {};
  public submitted: boolean = false;
  public submittedZipCode: string;
  public error: string;

  constructor(private zipinfoService: ZipinfoService) { }

  public lookup() {
    this.submitted = false;
    this.error = null;

    this.zipinfoService.getZipInfo(this.zipcode).subscribe(
      (results: any) => {
        console.log("API results", results);
        this.results = results;
        this.results.temp = Math.round(((results.temp - 273.15) * 1.8) + 32);
        this.results.elevation = Math.round(results.elevation / 0.3048);
        this.submitted = true;
        this.submittedZipCode = this.zipcode;
      },
      error => {
		  this.error = "Please check zip code and try again.";
	  }
    );
  }
}
