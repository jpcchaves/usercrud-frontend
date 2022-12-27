const UsersNotFound = ({ message }: { message: string }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <p className="h4 py-3">{message}</p>
    </div>
  );
};

export default UsersNotFound;
