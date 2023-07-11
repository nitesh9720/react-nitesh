import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is " + this.props.name + "constructor");
    this.state = {
      userInfo: {
        avatar_url: "",
        name: "",
        company: "",
        location: "",
      },
    };
  }
  componentDidUpdate() {
    console.log("componentdidupdate");
  }
  componentWillUnmount() {
    console.log("componenetWillUnmount");
  }
  async componentDidMount() {
    console.log(this.props.name + " child compontdidmount");
    const data = await fetch("https://api.github.com/users/nitesh9720");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  //   setInterval(() => {
  //     console.log("nitesh");
  //   }, 1000);
  }
  render() {
    console.log(this.props.name + " child is rendered");

    return (
      <>
        <h2>profile class component</h2>
        <div style={{ display: "flex", margin: "10px" }}>
          <div>
            <img src={this.state.userInfo.avatar_url} />
          </div>
          <div style={{ margin: "20px" }}>
            <h1>Name: {this.state.userInfo.name}</h1>
            <h2>Company: {this.state.userInfo.company}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
