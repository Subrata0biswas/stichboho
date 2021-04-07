import React from 'react'
// import { images } from "../../helpers/images";

class PageNotFound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: this.props.code || 404
    }
  }
  onClickGoBack() {
    if (this.props.history) {
      this.props.history.goBack()
    }
  }

  componentWillMount() {
    if (this.props.code) {
      this.setState({
        code: this.props.code
      })
    }
  }

  renderAdmin() {
    return (
      <div>
        <h1> This is for super admin </h1>
        <p className="zoom-area"> Please login by admin. </p>
        <section className="error-container">
          <span>4</span>
          <span>
            <span className="screen-reader-text">0</span>
          </span>
          <span>1</span>
        </section>
        <div className="link-container">
          <a href="#"
            className="btn btn-active-link"
            onClick={() => this.onClickGoBack()}>
            Go Back
          </a>
          <h2>Oops! You Are Not Super Admin.</h2>
        </div>
      </div>
    )
  }

  renderNotFound() {
    return (
      <div>
        {this.props.code === '501' ? (
          <h1>You have no permission. Please contact system admin</h1>
        ) : (
          <h1> Page Not Found </h1>
        )}
        <p className="zoom-area"> Sorry </p>
        <section className="error-container">
          {this.props.code === '501' ? <span>5</span> : <span>4</span>}
          <span>
            <span className="screen-reader-text">0</span>
          </span>
          {this.props.code === '501' ? <span>1</span> : <span>4</span>}
        </section>
        <div className="link-container">
          <a href="#"
            className="btn btn-active-link"
            onClick={() => this.onClickGoBack()}>
            Go Back
          </a>
          <h2>Oops! Looks like you landed in a wrong place</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.code === '401' ? this.renderAdmin() : this.renderNotFound()}
      </div>
    )
  }
}
export default PageNotFound
