import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  children?: MenuItem[];
  isCollapsed?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() isCollapsed = false;
  @Output() toggleCollapse = new EventEmitter<void>();

  isMobileOpen = false;
  private destroy$ = new Subject<void>();

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: '📊', route: '/dashboard' },
    { label: 'Assets', icon: '📦', route: '/assets' },
    { label: 'Assignments', icon: '👥', route: '/assignments' },
    {
      label: 'Settings',
      icon: '⚙️',
      route: '/settings',
      children: [
        { label: 'Profile', icon: '👤', route: '/settings/profile' },
        { label: 'Preferences', icon: '🎨', route: '/settings/preferences' }
      ],
      isCollapsed: true
    }
  ];

  ngOnInit(): void {
    // Auto-collapse on small screens
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize(): void {
    if (window.innerWidth < 768 && !this.isCollapsed) {
      this.isMobileOpen = false;
    }
  }

  toggleSidebar(): void {
    this.toggleCollapse.emit();
  }

  toggleSubmenu(item: MenuItem): void {
    if (item.children) {
      item.isCollapsed = !item.isCollapsed;
    }
  }

  closeMobileMenu(): void {
    if (window.innerWidth < 768) {
      this.isMobileOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

