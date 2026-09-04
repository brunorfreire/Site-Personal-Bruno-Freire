export interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  highlightBadge?: string;
  benefit: string;
  idealFor: string;
  whatsappMessage: string;
  iconName: 'dumbbell' | 'laptop' | 'heart-pulse' | 'flame' | 'footprints' | 'sparkles';
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: 'calendar-check' | 'user-check' | 'sliders' | 'shield-plus' | 'heart-handshake' | 'trending-up';
}

export interface ResultItem {
  id: string;
  tag: string;
  title: string;
  focus: string;
  realEvolution: string;
  timeframe: string;
  imageSlot: {
    recommendedFilename: string;
    description: string;
    aspectRatio: string;
  };
}

export interface ContentItem {
  id: string;
  category: string;
  title: string;
  description: string;
  format: string;
  youtubeQueryUrl?: string;
}

export interface RealLifeConnection {
  pain: string;
  solution: string;
  iconName: 'zap-off' | 'battery-low' | 'calendar-x' | 'shield-alert' | 'activity' | 'help-circle';
}

export interface RealLifeBenefit {
  title: string;
  description: string;
  iconName: 'footprints' | 'shopping-bag' | 'plane' | 'arrow-up-circle' | 'smile' | 'award';
}

export interface ContactFormData {
  name: string;
  objective: string;
  service: string;
  location: string;
  additionalNotes?: string;
}
