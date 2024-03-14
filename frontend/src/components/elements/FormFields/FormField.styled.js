import styled from 'styled-components';

const initialDivStyle = `
display: flex;
flex-direction: column;
margin-bottom: 15px;
padding-inline: 5px;
`

const StyledFieldMedium = styled.div`
   ${initialDivStyle} 
   label{
      padding-left: 20px;
      font-family: ${({ theme }) => theme.font.label};
      font-size: ${({ theme }) => theme.fontSize.label};
      text-transform: uppercase;
      color: ${({ theme }) => theme.inputMedium.label};
   }
   input, textarea {
      border: 1px solid ${({ theme }) => theme.inputMedium.border};
      border-radius: 4px;
      background: ${({ theme }) => theme.inputMedium.bg};
      padding: 5px 15px;
      min-height: 31px;
   }
   input:focus, textarea:focus{
      outline: none;
      background: ${({ theme }) => theme.inputMedium.bgactive};
      border: none;
      box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.07);
   }
`

const StyledFieldLight = styled.div`
   ${initialDivStyle}
   position: relative;
   border-bottom: solid ${({ theme }) => theme.inputLight.border} 1px;
   background: ${({ theme }) => theme.inputLight.bg};
   
   .form-field{
      min-height: 31px;
      padding: 5px 15px;
      border:none;
      outline: none;
      background-color: transparent;
      color: ${({ theme }) => theme.inputLight.text};
   }
   .form-field::placeholder{
      transition: color .5s ease;
      color: ${({ theme }) => theme.inputLight.text};
      
   }  
   .form-field:focus::placeholder {
   color: transparent;
    }

    .form-field~.focus-border:before{
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 1px;
      background-color: ${({ theme }) => theme.inputLight.border};
      transition: .3s ease-in;
      transition-delay: 0.1s;
   }
   
   .form-field~.focus-border i:before,
   .form-field~.focus-border i:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 0;
      background-color: ${({ theme }) => theme.inputLight.border};
      transition: .1s ease-in;
   }
   .form-field~.focus-border i:before {
      left: auto;
      right: 0;
      top: auto;
      bottom: 0;
      transition: .1s ease-in;
      transition-delay: 0.4s;
   }

   .form-field:focus~.focus-border:before{
      width: 100%;
      transition: .3s ease-in;
      transition-delay: .1s;
   }
   .form-field:focus~.focus-border i:before{
      height: 100%;
      transition: .1s ease-in;
   }
   .form-field:focus~.focus-border i:after {
      height: 100%;
      transition: .1s ease-in;
      transition-delay: .4s;
   }
   
`
export { StyledFieldLight, StyledFieldMedium }