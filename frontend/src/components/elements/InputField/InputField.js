import StyledInputField from "./InputField.styled";
const InputField = ({ label, rows, type, inputName, gridArea, patternValue, inputValue, changeHandler }) => {

   const currentDate = () => {
      const date = new Date();
      const day = date.getDate();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      return `${year}-${month}-${day}`
   }

   return (
      <StyledInputField grid={gridArea}>
         <label htmlFor={inputName}>{label}</label>
         {rows ? <textarea id={inputName} type={type} rows={rows} value={inputValue} onChange={changeHandler} /> : <input id={inputName} defaultValue={type === 'date' ? currentDate() : null} type={type} pattern={patternValue} value={inputValue} onChange={changeHandler} />}
      </StyledInputField>
   );
}

export default InputField;