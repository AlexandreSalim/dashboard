import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        { "name": "Jan", "value": 0 },
        { "name": "Feb", "value": 100 },
        { "name": "March", "value": 400 },
        { "name": "April", "value": 50 },
        { "name": "May", "value": 50 },
        { "name": "June", "value": 20 },
        { "name": "July", "value": 80 },
        { "name": "Aug", "value": 400 },
        { "name": "Sep", "value": 100 },
        { "name": "Oct", "value": 200 },
        { "name": "Nov", "value": 100 },
        { "name": "Dec", "value": 50 }
      ]
    }
  ];

  view: [number, number] = [490, 380];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454']
  };

  onSelect(event: any): void {
    console.log(event);
  }
}
