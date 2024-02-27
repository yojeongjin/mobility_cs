import React, { useEffect, useState } from 'react';

// components
import Main from '../../../components/Main/Main';
import IllegalComponent from '../../../components/Time/Ilegal/IllegalComponent';

export default function IllegalContainer() {
  const openPopup = () => {
    const url = 'http://localhost:3000/illegal/popup';
    const width = 1400;
    const height = 770;

    // 팝업을 부모 브라우저의 정중앙에 위치하도록함
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
  };

  return (
    <Main>
      <IllegalComponent openPopup={openPopup} />
    </Main>
  );
}
