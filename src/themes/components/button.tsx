import { extendTheme } from '@chakra-ui/react'
//import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        backgroundColor: '#FFFFF0', 
        border: '1px solid black',
        color: 'rgb(100, 100, 100)',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '10em',
        fontSize: '17px',
        fontWeight: '600',
        pb: '1em',
        pt: '1em',
        pr: '4em',
        pl: '4em',
        cursor: 'pointer',  
        _hover: { backgroundColor: '#40C7CA', 
                  color: '#FFFFF0',
                  transform: 'translateY(-4px) translateX(-2px)',
                  boxShadow: '2px 5px 0 0 black'},
                          
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      // variants: {
      //   'with-shadow': {
      //     bg: 'red.400',
      //     boxShadow: '0 0 2px 2px #efdfde',
      //   },
      //   // 4. We can override existing variants
      //   solid: (props: StyleFunctionProps) => ({
      //     bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
      //   }),
      //   // 5. We can add responsive variants
      //   sm: {
      //     bg: 'teal.500',
      //     fontSize: 'md',
      //   },
      // },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: 'md', // default is md
        variant: 'sm', // default is solid
        colorScheme: 'gray', // default is gray
      },
    },
  },
})

export default theme