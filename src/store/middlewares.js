import { applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production'
})

export const middlewares = () => compose(
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)