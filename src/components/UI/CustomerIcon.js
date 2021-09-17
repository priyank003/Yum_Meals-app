const CustomerIcon = (props) => {
  return (
    <div style={{ width: "fit-content" }}>
      <img
        alt=""
        src={props.src}
        style={{
          width: "70px",
          borderRadius: "50%",
          imageRendering: "high-quality",
        }}
      >
        {props.children}
      </img>
    </div>
  );
};

export default CustomerIcon;
