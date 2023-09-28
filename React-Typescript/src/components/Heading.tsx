type HeadingProp = {
    title:string
}
const Heading = ({title}:HeadingProp) => {
  return (
    <>
      <h1>Hello {title}</h1>
    </>
  );
};

export default Heading;
