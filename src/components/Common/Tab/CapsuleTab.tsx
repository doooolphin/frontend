import { css } from '@emotion/react';
import { color } from '@styles/common';

const tabCss = {
  wrap: css`
    display: flex;
    height: 50px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    background-color: ${color.white};
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  capsule: css`
    padding: 5px 10px;
    border-radius: 20px;
    margin-right: 10px;
    color: #797676;
    background-color: ${color.white};
  `,
  activeCapsule: css`
    color: ${color.white};
    font-weight: 600;
    background-color: ${color.primary};
  `
};

type Category = {
  code: number;
  name: string;
  active?: boolean;
};

type Props = {
  categories: Category[];
  onClick: (category: Category) => void;
};

const CapsuleTab = ({ categories, onClick }: Props) => {
  return (
    <div css={tabCss.wrap} role="tablist">
      {categories.map((category, idx) => (
        <button
          css={[tabCss.capsule, category.active && tabCss.activeCapsule, idx === 0 && { marginLeft: '10px' }]}
          role="tab"
          aria-label={category.name}
          aria-selected={category.active}
          key={category.code}
          onClick={() => onClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CapsuleTab;
