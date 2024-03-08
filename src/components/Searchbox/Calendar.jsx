import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
// dayjs
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// date-picker
import ReactDatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';

// icons
import { IoCalendarClearOutline } from 'react-icons/io5';

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <CalendarContainer>
      <CalendarIcon>
        <Icon />
      </CalendarIcon>
      <ReactDatePicker
        dateFormat="yyyy. MM. dd"
        locale={ko} // 한국말
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        customInput={<ExampleCustomInput />}
        onChange={date => setStartDate(date)}
        disabledKeyboardNavigation
      />
      −
      <ReactDatePicker
        dateFormat="yyyy. MM. dd"
        locale={ko} // 한국말
        selected={endDate}
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date()}
        customInput={<ExampleCustomInput />}
        onChange={date => setEndDate(date)}
        disabledKeyboardNavigation
      />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  font-family: 'Pretendard';
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0 10px;
  color: #555;
  .example-custom-input {
    font-family: 'Pretendard';
    height: 35px;
    padding: 0 10px;
    color: #555;
    &:hover {
      color: ${props => props.theme.secondaryColor};
      font-weight: 500;
    }
  }
  .react-datepicker {
    font-family: 'Pretendard';
    transform: translate(35px, -5px);
    will-change: transform;
    // border: 1px solid black;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__header {
    background: transparent;
    border: none;
  }
  .react-datepicker__navigation {
    // border: 1px solid black;
    .react-datepicker__navigation-icon {
      &::before {
        // border-color: ${props => props.theme.primaryColor};
        border-width: 2px 2px 0 0;
      }
    }
    &.react-datepicker__navigation--previous,
    &.react-datepicker__navigation--next {
      top: 8px;
    }
  }
  .react-datepicker__current-month {
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 17px;
    padding: 5px 35px;
  }
  .react-datepicker__day-names {
    font-family: 'Pretendard';
    font-weight: 300;
    font-size: 14px;
    display: flex;
    margin: 20px 0.4rem 0;
  }
  .react-datepicker__day-name {
    margin: 0 auto;
    // color: #d6d6d6;
    color: #575757;
  }
  .react-datepicker__month {
    margin-top: -5px;
  }
  .react-datepicker__week {
    display: flex;
    margin: 3px 0;
    > .react-datepicker__day {
      font-family: 'Pretendard';
      font-weight: 300;
      font-size: 14px;
    }
  }
  .react-datepicker__day {
    width: 33px;
    height: 33px;
    margin: 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-datepicker__day:hover {
    background-color: #cff4d5;
    border-radius: 50%;
    font-weight: 500;
  }
  .react-datepicker__day--outside-month {
    color: #c8c8c8;
  }
  .react-datepicker__day--selected {
    // &.react-datepicker__day--in-range {
    //   &.react-datepicker__day--range-start,
    //   &.react-datepicker__day--range-end {
    //     &:before {
    //       display: none;
    //     }
    //   }
    // }
  }
  .react-datepicker__day--selected:hover {
  }

  .react-datepicker__day--in-range {
    background-color: #cff4d5;
    border-radius: 0;
    &.react-datepicker__day--range-start,
    &.react-datepicker__day--range-end {
      position: relative;
      background: #02ca2d;
      color: #fff;
      font-weight: 400;
      border-radius: 50%;
    }
    &.react-datepicker__day--range-start {
      &:before {
        background: #cff4d5;
        display: block;
        position: absolute;
        content: '';
        left: 50%;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: -1;
      }
    }
    &.react-datepicker__day--range-end {
      &:before {
        background: #cff4d5;
        display: block;
        position: absolute;
        content: '';
        left: 0;
        right: 50%;
        bottom: 0;
        top: 0;
        z-index: -1;
      }
    }
    &.react-datepicker__day--today {
      &.react-datepicker__day--range-start {
        &:before {
          display: none;
        }
      }
    }
  }

  .react-datepicker__day--in-range:hover {
    border-radius: 0;
    &.react-datepicker__day--range-start,
    &.react-datepicker__day--range-end {
      border-radius: 50%;
    }
  }

  .react-datepicker__day--disabled:hover {
    background: transparent;
  }
`;

const CalendarIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Icon = styled(IoCalendarClearOutline)`
  color: #555;
  font-size: 15px;
`;
