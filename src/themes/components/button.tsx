import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        backgroundColor: '#FFFFF0',
        border: '1px solid black',
        color: 'rgb(100, 100, 100)',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '10em',
        fontSize: '17px',
        fontWeight: '600',
        pb: '2em',
        pt: '2em',
        pr: '4em',
        pl: '4em',
        cursor: 'pointer',
        _hover: {
          backgroundColor: '#40C7CA',
          color: '#FFFFF0',
          transform: 'translateY(-4px) translateX(-2px)',
          boxShadow: '2px 5px 0 0 black'
        },
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
        md: {
          h: '48px',
          fontSize: 'md',
          px: '28px',
        },
        sm: {
          h: '36px',
          fontSize: 'sm',
          px: '24px',
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
        colorScheme: 'gray',
      },
    },
  },
})

export default theme