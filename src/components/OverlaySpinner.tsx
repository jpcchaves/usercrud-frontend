const OverlaySpinner = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0,  0.8)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
      className="d-flex align-items-center justify-content-center flex-column gap-3"
    >
      <div
        className="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
      <div>
        <p className="text-white text-uppercase fs-4">
          Deletando usuário, aguarde...
        </p>
      </div>
    </div>
  );
};

export default OverlaySpinner;
