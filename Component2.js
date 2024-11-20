import { Component } from "react";
import "./Component2.css";

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleTexts: [
        {
          id: 1,
          task: "Hellow World",
        },
        {
          id: 2,
          task: "How are you",
        },
        {
          id: 3,
          task: "How are you doing",
        },
        {
          id: 4,
          task: "I am the best",
        },
        {
          id: 5,
          task: "Welcome",
        },
      ],
    };
  }

  componentDidMount() {
    console.log("Compoennt Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  getData = () => {
    return this.state.sampleTexts.map((data) => {
      return (
        <div className="text-field" key={data.id}>
          {data.id}:{data.task}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="component-2">
        <h1 className="component2">List of Texts</h1>

        <div className="data">{this.getData()}</div>
      </div>
    );
  }
}

export default Component2;
