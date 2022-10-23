import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

const Reset = styled.button`
  color: #895f39;
  display: flex;
  align-items: baseline;
  width: 70px;
  justify-content: space-between;
  margin: 0 20px 0 10px;
  padding-left: 10px;
`;

const Capsule = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
  &:first-child {
    margin-left: 10px;
  }
  > span {
    margin-right: 5px;
  }
  > svg {
    > path {
      fill: ${(props) => (props.active ? '#895F39' : '#797676')};
    }
  }
  color: ${(props) => (props.active ? '#895F39' : '#797676')};
  font-weight: ${(props) => (props.active ? 600 : 'unset')};
  background-color: ${(props) => (props.active ? '#F5ECDF' : '#ffffff')};
`;

const CapsuleFilter = ({ categorys, onClick, onClickReset }) => {
  return (
    <Wrapper>
      {categorys.some((category) => category.active) && (
        <Reset onClick={onClickReset}>
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.03565 4.48908C8.31473 3.70262 7.35963 3.26923 6.34615 3.26923H2.42931L3.66069 1.9259C3.89252 1.673 3.89252 1.28484 3.66069 1.03194C3.39852 0.74594 2.94763 0.74594 2.68546 1.03194L0 3.96154L2.68546 6.89113C2.94763 7.17714 3.39852 7.17714 3.66069 6.89113C3.89252 6.63824 3.89252 6.25007 3.66069 5.99717L2.42931 4.65385H6.34615C7.02075 4.65385 7.65727 4.94323 8.13831 5.468C8.61935 5.99277 8.88461 6.68715 8.88461 7.42308C8.88461 8.159 8.61935 8.85339 8.13831 9.37815C7.65727 9.90292 7.02075 10.1923 6.34615 10.1923H3.12161C2.73926 10.1923 2.42931 10.5023 2.42931 10.8846C2.42931 11.267 2.73926 11.5769 3.12161 11.5769H6.34615C7.35963 11.5769 8.31473 11.1435 9.03565 10.3571C9.75658 9.57062 10.1538 8.52869 10.1538 7.42308C10.1538 6.31746 9.75658 5.27554 9.03565 4.48908Z"
              fill="#895F39"
            />
          </svg>
          <span>초기화</span>
        </Reset>
      )}
      {categorys.map((category) => (
        <Capsule active={category.active} key={category.code} onClick={() => onClick(category)}>
          <span>{category.name}</span>
          {category.dropdown && (
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.85532 0.50002L5.73532 4.38002L9.61532 0.50002C10.0053 0.11002 10.6353 0.11002 11.0253 0.50002C11.4153 0.89002 11.4153 1.52002 11.0253 1.91002L6.43532 6.50002C6.04532 6.89002 5.41532 6.89002 5.02532 6.50002L0.435322 1.91002C0.0453223 1.52002 0.0453223 0.89002 0.435322 0.50002C0.825322 0.12002 1.46532 0.11002 1.85532 0.50002Z"
                fill="#949292"
              />
            </svg>
          )}
        </Capsule>
      ))}
    </Wrapper>
  );
};

CapsuleFilter.propTypes = {
  categorys: PropTypes.array,
  onClick: PropTypes.func,
  onClickReset: PropTypes.func
};

export default CapsuleFilter;
