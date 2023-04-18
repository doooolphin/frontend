import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { color, fontSize } from '@styles/common';
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  background-color: '#ffffff';
  &::-webkit-scrollbar {
    display: none;
  }
`;

const InputWrap = styled.div`
  background-color: ${color.moreLigthGray};
  width: 90vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  height: 35px;
`;

const Img = styled(SearchOutlined)`
  color: ${color.darkGray};
  margin-right: 10px;
`;

const InputText = styled.input`
  background-color: ${color.moreLigthGray};
  outline: none;
  border: none;
  flex: 1;
  margin-right: 10px;
  font-size: ${fontSize.h2};
`;

const EmptyInput = styled(CloseCircleOutlined)`
  color: ${color.darkGray};
  margin-right: 10px;
`;

const SearchInput = () => {
  const inputRef = useRef(null);

  const onClickEmpty = () => {
    inputRef.current.value = '';
  };
  return (
    <Wrapper>
      <InputWrap>
        <Img src="search.png" />
        <InputText ref={inputRef} />
        <EmptyInput onClick={onClickEmpty} />
      </InputWrap>
    </Wrapper>
  );
};

SearchInput.propTypes = {
  onClick: PropTypes.func
};

export default SearchInput;
