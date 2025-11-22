
const Icon = ({ type, size = 32 }) => {
        console.log(type)
  return (
    <span
      className={`icon ${type}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default Icon;
