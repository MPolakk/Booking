import IconStyled from './Icon.styled'

// If you want to choose icon, you should import that from IconSources component in your target file and pick 1 of 2 fill 'attraction'(in lightTheme its white) or 'description'(in lightTheme its green)

const Icon = ({ iconName, fill }) => {

   return (
      <IconStyled iconName={iconName} fill={fill} />
   );
}

export default Icon;