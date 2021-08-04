export const Message = ({ received }) => {
  return (
    <div className={!received ? "recieved_message" : "sent_message"}>
      <div>
        <p
          className={!received ? "recieved_message_title" : "sent_message_title"}
        >
          john doe
        </p>
        <p className="message-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aut
          ipsam quo, fugit eveniet odit culpa aliquid cumque vel magnam.
        </p>
        <p className="message_time">sent 2:32</p>
      </div>
    </div>
  );
};
