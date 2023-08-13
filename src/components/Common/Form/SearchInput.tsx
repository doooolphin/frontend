import PropTypes from 'prop-types';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { color, fontSize } from '@styles/common';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';

const searchInputCss = {
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
  inputWrap: css`
    background-color: #f9f9f9;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    height: 35px;
  `,
  inputText: css`
    background-color: #f9f9f9;
    outline: none;
    border: none;
    flex: 1;
    margin-right: 10px;
    font-size: ${fontSize.h2};
  `,
  removeButton: css`
    color: ${color.darkGray};
    margin-right: 10px;
  `,
  searchIcon: css`
    color: ${color.darkGray};
    margin: 0 10px;
  `
};

const SearchInput = () => {
  const [value, setValue] = useState('');

  const onClickEmpty = () => {
    setValue('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div css={searchInputCss.wrap}>
      <div css={searchInputCss.inputWrap}>
        <SearchOutlined css={searchInputCss.searchIcon} src="search.png" alt="search" />
        <input
          css={searchInputCss.inputText}
          placeholder="찾는 맛집 이름이 뭐예요?"
          value={value}
          onChange={onChange}
        />
        <CloseCircleOutlined css={searchInputCss.removeButton} onClick={onClickEmpty} />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  onClick: PropTypes.func
};

export default SearchInput;
