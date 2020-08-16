import React from 'react'
import { Link } from 'react-router-dom'
import {
  useStoreState,
  useStoreActions,
} from 'app/common/third-party/easy-peasy'
import { Flex, Button, Box } from 'rebass'
import routes from 'app/constants/routes.json'

export const Counter: React.FC = () => {
  const count = useStoreState((state) => state.counter.count)
  const counter = useStoreActions((action) => action.counter)

  return (
    <Box height="100%">
      <Box
        data-testid="backButton"
        style={{
          position: 'fixed',
        }}
      >
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </Box>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Box
          data-testid="count"
          sx={{
            fontSize: 88,
            mt: -100,
            mb: 100,
          }}
        >
          {count}
        </Box>
        <Flex justifyContent="space-between" width={300}>
          <Button
            onClick={() => {
              counter.increment()
            }}
            data-tclass="btn"
            type="button"
            title="plus"
            variant="primary"
          >
            <i className="fa fa-plus" />
          </Button>
          <Button
            onClick={() => {
              counter.decrement()
            }}
            data-tclass="btn"
            type="button"
            title="minus"
            variant="outline"
          >
            <i className="fa fa-minus" />
          </Button>
          <Button
            onClick={() => {
              counter.incrementIfOdd()
            }}
            data-tclass="btn"
            type="button"
            title="odd"
            variant="outline"
          >
            odd
          </Button>
          <Button
            onClick={() => {
              counter.incrementAsync()
            }}
            data-tclass="btn"
            type="button"
            title="async"
            variant="outline"
          >
            async
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Counter
