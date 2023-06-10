import FavoriteStatusIcon from '../../atoms/SvgIcons/FavoriteStatusIcon';
import WatchedStatusIcon from '../../atoms/SvgIcons/WatchedStatusIcon';
import WishlistStatusIcon from '../../atoms/SvgIcons/WishlistStatusIcon';

export const STATUSES_DATA = [
  {
    IconComponent: FavoriteStatusIcon,
    statusKey: 'favorite',
    titles: {
      default: 'Mark as favorite',
      active: 'Marked as favorite',
    },
  },
  {
    IconComponent: WatchedStatusIcon,
    statusKey: 'watched',
    titles: {
      default: 'Mark as watched',
      active: 'Marked as watched',
    },
  },
  {
    IconComponent: WishlistStatusIcon,
    statusKey: 'wishlist',
    titles: {
      default: 'Mark as next to watch',
      active: 'Marked as next to watch',
    },
  },
];
