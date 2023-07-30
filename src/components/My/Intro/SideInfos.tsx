import { RightOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { color } from '@styles/common';
import Link from 'next/link';

const sideInfos = [
  { name: '공지사항', linkUrl: '' },
  { name: '이벤트', linkUrl: '' },
  { name: '고객센터', linkUrl: '' },
  { name: '환경설정', linkUrl: '' },
  { name: '약관 및 정책', linkUrl: '' }
];

const infoCss = {
  wrap: css`
    background-color: ${color.white};
    > div:not(:last-of-type) {
      border-bottom: 1px solid ${color.lightGrayBg};
    }
  `,
  section: css`
    padding: 20px 15px;
    cursor: pointer;
  `,
  button: css`
    position: absolute;
    right: 15px;
    font-size: 18px;
    font-weight: 200;
    color: ${color.darkGrayText};
  `
};

const SideInfos = () => (
  <div css={infoCss.wrap}>
    {sideInfos.map((sideInfo) => (
      <div key={sideInfo.name} css={infoCss.section}>
        <Link href={sideInfo.linkUrl}>
          <a>
            <span>{sideInfo.name}</span>
            <span css={infoCss.button}>
              <RightOutlined />
            </span>
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default SideInfos;
