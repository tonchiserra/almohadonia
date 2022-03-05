import styled from "styled-components";

const NotificationContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 6rem;
  right: 1rem;
  width: 200px;
  height: 5rem;
  background-color: #3ea146;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  transform: translateY(-12rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  & p {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }

  & .check {
    font-size: 2rem;
  }
`;

const Notification = ({ message }) => {
  return(
    <NotificationContainer id="notification">
      <p className="check">✔</p>
      <p>{message}</p>
    </NotificationContainer>
  );
}

export default Notification;