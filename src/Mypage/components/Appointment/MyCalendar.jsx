/* eslint-disable react/prop-types */
import Calendar from "react-calendar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 20%);

  button {
    color: #797979;
    border: none;
    background-color: white;
  }

  .react-calendar {
    width: 100%;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .react-calendar__tile {
    padding: 30px 10px;
  }

  &.react-calendar__tile--active {
    background-color: orange;
  }

  &.react-calendar__tile--now {
    border: 2px solid green;
  }
`;

function MyCalendar({ date, onChange }) {
  return (
    <Container>
      <Calendar value={date} onChange={onChange} />
    </Container>
  );
}

export default MyCalendar;
