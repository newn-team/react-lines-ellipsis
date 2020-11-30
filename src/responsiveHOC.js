const React = require('react')
const debounce = require('lodash/debounce')
const isBrowser = typeof window !== 'undefined'

function responsiveHOC (wait = 150, debounceOptions) {
  return Component => {
    class Responsive extends React.Component {
      constructor (props) {
        super(props)
        this.state = {
          winWidth: isBrowser ? window.innerWidth : 0
        }
        this.resizeHandler = this.resizeHandler.bind(this)
        this.onResizeWidth = this.onResizeWidth.bind(this)
      }

      componentDidMount () {
        window.addEventListener('resize', this.resizeHandler)
      }

      componentWillUnmount () {
        window.removeEventListener('resize', this.resizeHandler)
      }

      resizeHandler () {
        const winWidth = window.innerWidth
        if (this.state.winWidth !== winWidth) {
          debounce(this.onResizeWidth, wait, debounceOptions)()
        }
      }

      onResizeWidth () {
        this.setState({
          winWidth: window.innerWidth
        })
      }

      render () {
        const {innerRef, ...rest} = this.props
        return <Component ref={innerRef} {...rest} {...this.state} />
      }
    }

    Responsive.displayName = `Responsive(${Component.displayName || Component.name})`
    Responsive.defaultProps = {
      innerRef () {}
    }
    return Responsive
  }
}

module.exports = responsiveHOC
