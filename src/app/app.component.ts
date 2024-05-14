import { Component } from '@angular/core';
import { MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import {PortalModule} from '@angular/cdk/portal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'agenda';
}

@Component({
  selector: 'tab-group-basic-example',
  templateUrl:'tab-group-basic-example.html',
  standalone: true,
  imports: [MatTabsModule],
})

export class TabGroupBasicExample {
  title = 'estilos';
}

export class MatTabGroup{}