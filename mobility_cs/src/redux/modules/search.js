// 액션 타입
const START_DATE = 'search/START_DATE';
const END_DATE = 'search/END_DATE';

// 액션 생성 함수
export const setStart = start => ({ type: START_DATE, startDate: start });
export const setEnd = end => ({ type: END_DATE, endDate: end });

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case START_DATE:
      return { ...state, startDate: action.startDate };
    case END_DATE:
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
}
