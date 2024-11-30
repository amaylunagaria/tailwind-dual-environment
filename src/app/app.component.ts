import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tailwind';

  ngOnInit() {
    this.setTheme(environment.platformConfig?.colors);
  }

  setTheme(colors: any) {
    if (colors) {
      const root = document.documentElement;
      root.style.setProperty('--primaryColor', colors.primaryColor);
      root.style.setProperty('--secondaryColor', colors.secondaryColor);
      root.style.setProperty(
        '--titleAndLeftSidebarColor',
        colors.titleAndLeftSidebarColor
      );
      root.style.setProperty('--loaderColor', colors.primaryColor);
      for (let i = 1; i < 8; i++) {
        root.style.setProperty(
          `--primaryColorShade${i}`,
          colors.primaryColor + i * 14
        );
      }
    }
  }
}
