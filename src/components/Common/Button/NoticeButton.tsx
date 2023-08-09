import { css } from '@emotion/react';

const noticeButtonCss = {
  wrap: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  `
};

type Props = {
  hasNotice: boolean;
  onClick: () => void;
};

const NoticeButton = ({ hasNotice, onClick }: Props) => {
  return (
    <button css={noticeButtonCss.wrap} onClick={onClick} aria-label="notice">
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.7778 13.1411V9.39804C17.7778 6.04012 15.35 3.21141 12.0611 2.36071C11.7356 1.59039 10.94 1.04761 10 1.04761C9.06 1.04761 8.26445 1.59039 7.93889 2.36071C4.65 3.21246 2.22222 6.04012 2.22222 9.39804V13.1411L0.325556 14.9229C0.116667 15.1181 0 15.3832 0 15.6609V17.7485C0 18.3257 0.496667 18.7923 1.11111 18.7923H18.8889C19.5033 18.7923 20 18.3257 20 17.7485V15.6609C20 15.3832 19.8833 15.1181 19.6744 14.9229L17.7778 13.1411ZM17.7778 16.7047H2.22222V16.093L4.11889 14.3112C4.32778 14.116 4.44444 13.8509 4.44444 13.5733V9.39804C4.44444 6.52027 6.93667 4.17902 10 4.17902C13.0633 4.17902 15.5556 6.52027 15.5556 9.39804V13.5733C15.5556 13.8509 15.6722 14.116 15.8811 14.3112L17.7778 16.093V16.7047ZM10 21.9237C11.4567 21.9237 12.6744 21.0532 13.1311 19.8361H6.86889C7.32556 21.0532 8.54333 21.9237 10 21.9237Z"
          fill="white"
        />
        {hasNotice && <circle cx="19.5" cy="1.5" r="1.5" fill="#FF0F00" />}
      </svg>
    </button>
  );
};

export default NoticeButton;
