export interface MenuItem {
  label: string;
  route: string;
  icon?: string;
  image?: string;
  items?: MenuItem[];
}
