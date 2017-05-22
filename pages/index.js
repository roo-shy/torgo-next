import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const styles = {
  container: {
    textAlign: 'center'
  }
}

const muiTheme = {
  palette: {
    accent1Color: deepOrange500
  }
}

class Main extends Component {
  static getInitialProps ({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent }
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      open: false
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    })
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  
  render () {
    const { userAgent } = this.props

    const standardActions = (
      <FlatButton
        label='Ok'
        primary={Boolean(true)}
        onTouchTap={this.handleRequestClose}
      />
    )

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
        <div style={styles.container}>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={this.handleToggle}
          />
           <Drawer
             docked={false}
             width={200}
             open={this.state.open}
             onRequestChange={(open) => this.setState({open})}
           >
             <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
             <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
           </Drawer>
      
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main
