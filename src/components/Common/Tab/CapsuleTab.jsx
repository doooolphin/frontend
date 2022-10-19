import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  align-items: center;
  background-color: '#ffffff';
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Capsule = styled.button`
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
  &:first-child {
    margin-left: 10px;
  }
  color: ${(props) => (props.active ? '#ffffff' : '#949292')};
  font-weight: ${(props) => (props.active ? 600 : 'unset')};
  background-color: ${(props) => (props.active ? '#AC4AC4' : '#ffffff')};
`;

const CapsuleTab = ({ categorys, onClick }) => {
  return (
    <Wrapper role="tablist">
      {categorys.map((category) => (
        <Capsule
          role="tab"
          aria-label={category.name}
          aria-selected={category.active}
          active={category.active}
          key={category.code}
          onClick={() => onClick(category)}
        >
          {category.name}
        </Capsule>
      ))}
    </Wrapper>
  );
};

CapsuleTab.propTypes = {
  categorys: PropTypes.array,
  onClick: PropTypes.func
};

export default CapsuleTab;
