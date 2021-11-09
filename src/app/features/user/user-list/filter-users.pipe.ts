import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.model';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: User[] | null, filter: string): any {
    if (filter && users) {
      return users.filter(
        (user) => user.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
    }

    return users || [];
  }
}
