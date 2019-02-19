import React from "react";
import styled from "styled-components";
import Name from "./name";

const Wrap = styled.div`
  width: 680px;
  height: 300px;
  margin: 0 auto;
  background-color: green;
`;
const Slide = styled.div`
  display: grid;
  grid-template-columns: 40px 600px 40px;
  grid-template-rows: 300px;
  button {
    appearance: none;
    border: none;
  }
`;
const Button = styled.button`
  align-self: center;
  padding: 0;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
  transition: all 0.25s ease-in 0s;
  background: 0 0;
  border: 0;
  font-size: 0px;
  outline: none;
  height: 100%;
  :hover {
    background: rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
  :before {
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    content: "";
  }
`;
const Back = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 1;
  :before {
    border-right: 20px solid #fff;
  }
`;

const Next = styled(Button)`
  grid-column-start: 3;
  grid-column-end: 3;
  :before {
    border-left: 20px solid #fff;
  }
`;
const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  align-self: center;
  justify-self: center;
`;
const duder = [1, 2, 3, 4, 5];
class Newer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      pause: false,
      data: [],
      currentReview: []
    };
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_SECRET_CODE, {
      headers: { Accept: "application/json" }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          data,
          currentReview: data[this.state.current]
        })
      );
  }
  // componentDidMount() {
  //   this.pooper();
  // }
  // componentDidMount() {
  //   this.setState({ data: this.props.data });
  // }
  componentDidUpdate() {
    if (duder.length === this.state.current && this.state.pause === false) {
      this.setState({ current: 0 });
    }
  }

  componentWillUnmount() {
    clearInterval(this.pooper);
  }

  pooper = () => {
    setInterval(() => {
      if (!this.state.pause) {
        this.setState({ current: this.state.current + 1 });
      }
    }, 1000);
  };

  next = () => {
    if (duder.length - 1 === this.state.current) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  };

  back = () => {
    if (this.state.current === 0) {
      this.setState({ current: duder.length - 1 });
    } else {
      this.setState({ current: this.state.current - 1 });
    }
  };

  render() {
    const { currentReview } = this.state;
    return (
      <Wrap
        onMouseEnter={() => this.setState({ pause: true })}
        onMouseLeave={() => this.setState({ pause: false })}
      >
        <Slide>
          <Back type="button" onClick={this.back}>
            back
          </Back>
          <Content>
            <>
              {console.log(this.state)}
              <p>{currentReview.comments}</p>
              <Name reviewer={currentReview.reviewer} />
            </>
          </Content>
          <Next type="button" onClick={this.next}>
            next
          </Next>
        </Slide>
      </Wrap>
    );
  }
}

export default Newer;
