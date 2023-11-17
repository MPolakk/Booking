import styled from 'styled-components';

const StyledInputField = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15px;
padding-inline: 5px;
grid-area: ${(props) => props.grid};
label{
   padding-left: 20px;
   font-family: ${({ theme }) => theme.font.label};
   font-size: ${({ theme }) => theme.fontSize.label};
   text-transform: uppercase;
   color: ${({ theme }) => theme.input.label};
}
input {
   height: 31px;
}
textarea{
   resize: none;
}
input, textarea {
   border: 1px solid ${({ theme }) => theme.input.border};
   border-radius: 4px;
   background: ${({ theme }) => theme.input.bg};
   padding: 5px 15px;
}
input:focus,
textarea:focus{
   outline: none;
   background: ${({ theme }) => theme.input.bgactive};
   border: none;
   box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.07);
}
`

export default StyledInputField