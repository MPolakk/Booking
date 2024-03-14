import { StyledFieldLight, StyledFieldMedium } from "./FormField.styled";
const TextAreaField = ({
   inputName,
   inputValue,
   outputValue,
   description,
   type,
   styleType,
}) => {

   const stylesHandler = () => {
      switch (styleType) {
         case 'light':
            return (
               <StyledFieldLight>
                  <textarea id={inputName} className="form-field active" type={type} rows={'6'} value={inputValue} onChange={outputValue} placeholder={description} style={{ resize: 'none' }} />
                  <span className="focus-border"><i></i></span>
               </StyledFieldLight>
            )
         default:
            return (
               <StyledFieldMedium>
                  <label htmlFor={inputName}>{description}</label>
                  <textarea id={inputName} type={type} rows={'6'} value={inputValue} onChange={outputValue} style={{ resize: 'none', outline: 'none' }} />
               </StyledFieldMedium>
            )


      }
   }

   return (
      <>
         {stylesHandler()}
      </>
   );
}

export default TextAreaField;