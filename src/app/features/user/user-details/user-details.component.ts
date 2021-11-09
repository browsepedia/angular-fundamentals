import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(
        map((params) => parseInt(params['userId'])),
        filter((userId) => !!userId)
      )
      .subscribe((userId) => console.log(userId));
  }

  ngOnInit() {}
}
