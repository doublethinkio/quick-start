import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading } from 'rebass'
import routes from 'app/constants/routes.json'

// https://styled-system.com/table
const Home: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
        data-testid="container"
      >
        <Heading
          variant="h2"
          sx={{
            fontSize: 100,
          }}
        >
          home
        </Heading>
        <Link to={routes.COUNTER}>to Counter</Link>
      </Box>
    </Flex>
  )
}

export default Home
