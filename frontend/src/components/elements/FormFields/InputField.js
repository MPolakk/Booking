import { StyledFieldLight, StyledFieldMedium } from "./FormField.styled";
const InputField = ({
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
                  <input className="form-field active" type={type} id={inputName} value={inputValue} onChange={outputValue} placeholder={description} />
                  <span className="focus-border"><i></i></span>
               </StyledFieldLight>
            )
         default:
            return (
               <StyledFieldMedium>
                  <label htmlFor={inputName}>{description}</label>
                  <input id={inputName} type={type} value={inputValue} onChange={outputValue} />
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

export default InputField;