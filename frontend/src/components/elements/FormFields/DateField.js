import { StyledFieldLight, StyledFieldMedium } from "./FormField.styled";
import dayjs from "dayjs";
const DateField = ({
   inputName,
   inputValue,
   outputValue,
   description,
   styleType,
}) => {

   const currentDate = dayjs().format('YYYY-MM-DD')

   const stylesHandler = () => {
      switch (styleType) {
         case 'light':
            return (
               <StyledFieldLight>
                  <input className="form-field active" type='date' id={inputName} defaultValue={currentDate} value={inputValue} onChange={outputValue} placeholder={description} />
                  <span className="focus-border"><i></i></span>
               </StyledFieldLight>
            )
         default:
            return (
               <StyledFieldMedium>
                  <label htmlFor={inputName}>{description}</label>
                  <input id={inputName} type='date' defaultValue={currentDate} value={inputValue} onChange={outputValue} />
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

export default DateField;