import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type RoadmapStatus = 'Planned' | 'In Progress' | 'Complete';

interface RoadmapItem {
  phase: string;
  title: string;
  timeframe: string;
  status: RoadmapStatus;
  summary: string;
  details: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  heroTitle = 'Your Solution To Modern E-commerce.';
  heroSubtitle =
    'Helping small online businesses keep stock accurate, orders organized, and websites in sync.';

  roadmap: RoadmapItem[] = [
    {
      phase: 'Phase 0',
      title: 'Vision & Foundation',
      timeframe: 'Done',
      status: 'Complete',
      summary: 'Clarify the product, target users, and basic plan.',
      details:
        'Define who this is for, outline the core value, and sketch the first version of the product and roadmap.',
    },
    {
      phase: 'Phase 1',
      title: 'Core Inventory & Orders',
      timeframe: 'Now',
      status: 'In Progress',
      summary: 'Basic inventory and order dashboard.',
      details: 'Add and track products, stock levels, and incoming orders in a single simple view.',
    },
    {
      phase: 'Phase 2',
      title: 'Shopify Integration',
      timeframe: 'Upcoming',
      status: 'Planned',
      summary: 'Automatic sync with Shopify stores.',
      details:
        'Connect to Shopify so products, stock, and orders sync automatically without manual updates.',
    },
    {
      phase: 'Phase 3',
      title: 'Fulfillment Basics',
      timeframe: 'Upcoming',
      status: 'Planned',
      summary: 'Help small teams process orders.',
      details:
        'Simple tools to mark orders as shipped, store tracking, and keep store status up to date.',
    },
    {
      phase: 'Phase 4',
      title: 'Public Launch',
      timeframe: 'Future',
      status: 'Planned',
      summary: 'Open to paying customers.',
      details:
        'Launch a paid version with clear pricing, a free trial, and onboarding for early adopters.',
    },
    {
      phase: 'Phase 5',
      title: 'More Channels',
      timeframe: 'Future',
      status: 'Planned',
      summary: 'Connect more sales platforms.',
      details:
        'Add support for WooCommerce, Etsy, and other storefronts so inventory stays in sync everywhere.',
    },
    {
      phase: 'Phase 6',
      title: 'Analytics & Insights',
      timeframe: 'Future',
      status: 'Planned',
      summary: 'Turn data into decisions.',
      details:
        'Show simple, helpful analytics around stock levels, top sellers, and when to reorder.',
    },
  ];

  contactEmail = 'tyler@westernpine.dev';
  contactPlaceholderName = 'Your Name';
  contactPlaceholderMessage = 'Tell me about your store or what you struggle with today.';

  // Map the human-readable status to a CSS-friendly class
  getStatusClass(item: RoadmapItem): string {
    switch (item.status) {
      case 'In Progress':
        return 'in-progress';
      case 'Complete':
        return 'complete';
      default:
        return 'planned';
    }
  }

  currentYear = new Date().getFullYear();
}
