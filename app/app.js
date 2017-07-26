import React from 'react'

import classNames from 'classnames'

import styles from './app.scss' 

const propTypes = {
}

class App extends React.PureComponent {
    render() {
        return(
            <div className={classNames(styles.app)}>
                Test app
            </div>
        )
    }
}

const defaultProps = {
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App