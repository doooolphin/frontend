import { Union } from '@models/common';

type Restaurant = {
  code: number;
  mainImage: string;
  images?: string[];
  alt: string;
  title: string;
  score: string;
  time: string;
  minOrderAcc?: string;
  accTip: string;
  distance?: string;
  useCoupon?: boolean;
  isNew?: boolean;
};

const NOTIFY_TAG_KEY = {
  NEW: 'new',
  COUPON: 'coupon'
} as const;

const NOTIFY_TAG = {
  [NOTIFY_TAG_KEY.NEW]: '신규',
  [NOTIFY_TAG_KEY.COUPON]: '쿠폰'
} as const;

type NotifyTagKey = Union<typeof NOTIFY_TAG_KEY>;

export type { Restaurant, NotifyTagKey };

export { NOTIFY_TAG_KEY, NOTIFY_TAG };
