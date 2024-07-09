import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMS_TAB_LINKS } from 'src/app/constants/messages';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-scroll-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, RouterOutlet, RouterModule],
  templateUrl: './scroll-tabs.component.html',
  styleUrls: ['./scroll-tabs.component.scss'],
})
export class ScrollTabsComponent implements OnInit, OnChanges {
  @Output() tabStatus: EventEmitter<any> = new EventEmitter();
  @Input() ptabs: string[] = [];
  @ViewChild('tabGroup') tabGroup: any;
  @Input() componentName!: string;
  tabs: any = [];
  navlinks: any;
  ngOnChanges() {}
  ngOnInit() {
    if (this.componentName == 'cms') {
      this.navlinks = CMS_TAB_LINKS;
    } else {
      this.tabs = this.ptabs;
    }
  }
  scrollTabs(event: any) {
    const children =
      this.tabGroup._tabHeader._elementRef.nativeElement.children;
    const back = children[0];
    const forward = children[2];
    if (event.deltaY > 0) {
      forward.click();
    } else {
      back.click();
    }
  }
  myTabSelectedTabChange(data: any) {
    if (this.componentName != 'cms') {
      let SelectedTab = this.tabs.filter((ele: any) => {
        return ele.label == data.tab.textLabel;
      });
      this.tabStatus.emit(SelectedTab[0].value);
    }
  }
}
