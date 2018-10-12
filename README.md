# Angular6 - Projects


#assignment1

- ts file
username = '';

- html file

      <label>Username</label>
      <input type="text" class="form-control" [(ngModel)]="username">
      <p>{{ username }}</p>

      <button
        class="btn btn-primary"
        [disabled]="username === ''"
        (click)="username=''"
      >Reset User</button>
