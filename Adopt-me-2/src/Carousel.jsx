/* eslint-disable import/no-unresolved */
import { Component } from "react";
import Emoji from "./Emoji";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Carousel extends Component {
  state = {
    active: 0,
    showModal: false,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {" "}
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
          <div>
            <ThemeContext.Consumer>
              {
                ([theme]) => (
                  <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Request More Photos</button>
                )
              }
            </ThemeContext.Consumer>
          </div>
          {
            this.state.showModal ? (
              <Modal>
                <div>
                  <h1>Bhazar m3aak</h1>
                  <Emoji symbol={0x1F923} />
                  <Emoji symbol={0x1F923} />
                  <Emoji symbol={0x1F923} />
                  <h2>Mafeesh photos wala 7aga</h2>
                  <div className="buttons">
                    <button onClick={this.toggleModal}>E2fel <Emoji symbol={0x1F60E} /></button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Carousel;
