import React from 'react';
import styled from 'styled-components';
// material-ui
import { TableCell, TableRow } from '@mui/material';
// icon
import { IoCloudDownloadOutline } from 'react-icons/io5';
import PopupTableComponent from '../../Table/PopupTableComponent';

export default function IllegalPopupComponent(props) {
  const {
    popupState,
    imgUrlArr,
    rates,
    calculedFee,
    calculedPoint,
    setRate,
    checkItems,
    setCheckItems,
    setModalOpen,
    downloadImg,
    cmtRef,
  } = props;

  const checkHandled = e => {
    checkItemHandler(e.target.id, e.target.checked);
  };

  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(item => item !== id));
    }
  };

  const allCheckedHandler = e => {
    if (e.target.checked) {
      setCheckItems(imgUrlArr.map((url, idx) => `${idx}`));
    } else {
      setCheckItems([]);
    }
  };

  return (
    <IllegalPopup>
      {popupState && imgUrlArr && (
        <PopupContainer>
          {/* 증빙서류 */}
          {imgUrlArr.length !== 0 ? (
            <ReferenceImg>
              <ImgH2>증빙 서류</ImgH2>
              <ReferenceProcess>
                <AgreeCheck>
                  <AgreeCheckInput
                    id="checkAll"
                    type="checkbox"
                    onChange={allCheckedHandler}
                    checked={
                      imgUrlArr.length !== 0 && checkItems.length === imgUrlArr.length
                        ? true
                        : false
                    }
                  />
                  <AgreeLabel htmlFor="checkAll">전체선택</AgreeLabel>
                </AgreeCheck>
                <ReferenDownload
                  onClick={() => {
                    downloadImg();
                  }}
                >
                  <DownloadIcon />
                  다운로드
                </ReferenDownload>
              </ReferenceProcess>
              <SlideImgWrapper>
                {imgUrlArr.map((imgUrl, idx) => (
                  <SlideImgBox key={idx}>
                    <ImgLabel>
                      <ImgCheckInput
                        id={`${idx}`}
                        type="checkbox"
                        checked={checkItems.includes(`${idx}`) ? true : false}
                        onChange={e => {
                          checkHandled(e);
                        }}
                      />
                    </ImgLabel>
                    <SlideImg src={imgUrl} alt="증빙사진" />
                  </SlideImgBox>
                ))}
              </SlideImgWrapper>
            </ReferenceImg>
          ) : (
            <ReferenceImgNone>
              <ImgH2>증빙 서류</ImgH2>
              <ImgNone>이미지 없음</ImgNone>
            </ReferenceImgNone>
          )}

          <PopupContents>
            {/* 예약 내역 */}
            <PopupTableComponent
              popupState={popupState}
              calculedFee={calculedFee}
              calculedPoint={calculedPoint}
              setRate={setRate}
              rates={rates}
              cmtRef={cmtRef}
            />

            <BtnDiv>
              <RefundBtn
                disabled={popupState.order_state === 'REFUNDED'}
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                환불하기
              </RefundBtn>
            </BtnDiv>
          </PopupContents>
        </PopupContainer>
      )}
    </IllegalPopup>
  );
}

const IllegalPopup = styled.div`
  width: 1400px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
`;

const PopupContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PopupContents = styled.div`
  flex: 1;
`;

const BtnDiv = styled.div`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0 0;
`;

const RefundBtn = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  width: 100%;
  height: 50px;
  color: #fff;
  padding: 0 15px;
  font-size: 15px;
  &:disabled {
    background-color: #ececec;
    cursor: default;
  }
`;

const ReferenceImg = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 20px;
`;

const ReferenceImgNone = styled.div`
  // border: 1px solid red;
  flex: 1;
  height: 100%;
  padding: 0 20px;
`;

const ImgNone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  height: 83%;
  border: 1px dashed #c8c8c8;
  color: #757575;
`;

const ImgH2 = styled.h2`
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-bottom: 1.5px solid black;
`;

const SlideImgWrapper = styled.div`
  height: 86%;
  overflow-y: scroll;
`;

const SlideImgBox = styled.div`
  position: relative;
  margin-bottom: 15px;
  &:last-child {
    margin: 0 0;
  }
`;

const ImgLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ImgCheckInput = styled.input`
  width: 23px;
  height: 23px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    background-color: ${props => props.theme.primaryColor};
    border-color: transparent;
    background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'><polyline points='20 6 9 17 4 12'></polyline></svg>");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const ReferenceProcess = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const AgreeCheck = styled.div`
  display: flex;
  align-items: center;
`;

const DownloadIcon = styled(IoCloudDownloadOutline)`
  margin-right: 5px;
  font-size: 16px;
  color: #999;
`;

const ReferenDownload = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    font-weight: 500;
    ${DownloadIcon} {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

const AgreeCheckInput = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid #a0a0a0;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  &:checked {
    background-color: ${props => props.theme.primaryColor};
    border-color: transparent;
    background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'><polyline points='20 6 9 17 4 12'></polyline></svg>");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const AgreeLabel = styled.label`
  cursor: pointer;
`;
