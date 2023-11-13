import styled from 'styled-components';

const IconStyled = styled.div`
   width: 100px;
   height: 100px;
   background-color: ${({ fill, theme }) => {
      switch (fill) {
         case 'attraction':
            return theme.icons.attraction;
         case 'description':
            return theme.icons.description;
         default:
            return 'black'
      }
   }};
mask-image: url(${props => props.iconName});
-webkit-mask-image: url(${props => props.iconName});

`;

export default IconStyled;