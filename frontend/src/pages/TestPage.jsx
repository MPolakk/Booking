const DevTest = ({ name, children }) => {
  return (
    <div id={name} style={{ border: '2px solid black' }}>
      <h2 style={{ textAlign: 'center', borderBottom: '1px dashed black' }}>
        {name}
      </h2>

      <div style={{ margin: '0 auto', maxWidth: '1200px' }}>{children}</div>
    </div>
  );
};

const TestPage = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <DevTest name="AnimaVillis">
        <foo>Bar</foo>
      </DevTest>
      <DevTest name="KatOlista">
        <foo>Bar</foo>
      </DevTest>
      <DevTest name="MPolakk">
        <foo>Bar</foo>
      </DevTest>
      <DevTest name="Wilkubone">
        <foo>Bar</foo>
      </DevTest>
      <DevTest name="Murek">
        <foo>Bar</foo>
      </DevTest>
    </div>
  );
};

export default TestPage;
