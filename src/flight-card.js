import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class FlightCard extends LitElement {
  static get properties() {
    return{
      version: {
        type: String,
        reflect: true
      }
    }
  }

  static get styles(){
    return css`
      .crd{
  padding: 12px;
  background-color: skyblue;
  border-radius: 12px;
  border: 6px solid black;
  max-width: 300px;
  float: left;
}
.image{
  width: 100%;
}
h1{
  font-size: 30px;
  text-align: center;
}
h2{
  font-size: 18px;
  text-align: center;
}
.buttons{
  margin: 0;
  text-align: center;
  display: none;
  clear: both;
}
p{
  text-align: center;
  display: none;
}
@media (min-width: 500px) and (max-width: 800px) {
  .buttons {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
}
.somethingelse {
  font-size: 18px;
  display: block;
  margin: 0;
}
.somethingelse:hover{
  background-color: orange;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.somethingelse:focus{
  background-color: orange;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.addOne{
  font-size: 18px;
  display: block;
  margin: 0;
}
.addOne:hover{
  background-color: lightseagreen;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.addOne:focus{
  background-color: lightseagreen;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.remove {
  font-size: 18px;
  display: block;
  margin: 0;
}
.remove:hover {
  background-color: green;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.remove:focus{
  background-color: green;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.colorChanger{
  font-size: 18px;
  display: block;
  margin: 0;
}
.colorChanger:hover{
  background: linear-gradient(
    to right,
    red,
    yellow,
    red,
    blue,
    cyan,
    blue,
    violet
  );
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.colorChanger:focus{
  background: linear-gradient(
    to right,
    red,
    yellow,
    red,
    blue,
    cyan,
    blue,
    violet
  );
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
@media (max-width: 500px) {
  .crd {
    transform: scale(0.8);
  }
  .image {
    width: 300px;
  }
  h1 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
}
    `;
  }
  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
    <div class="crd">
  <div class="container">
    <div class="header">
      <h1>A Picture of a Sunset</h1>
      <img class="image" src="https://media.cntraveler.com/photos/576834ff90b3537d7c010c05/16:9/w_2560%2Cc_limit/GettyImages-162672165.jpg" alt="A picture"/>
      <div class="subheader">
        <h2>A Picture of a Plane in a Sunset</h2>
      </div>
    </div>
  </div>
  <div class="paragraph">
    <p>This is a picture of a Boeing 787 taking off during sunset.</p>
  </div>
  <div class="buttons">
    <button class="details">Details</button>
  </div>
</div>

    <meme-maker image-url="http://res.cloudinary.com/big-cabal/image/upload/w_700,f_auto,fl_lossy,q_auto/v1484916770/sense_jilgk7.png"
      top-text="You can't fail your tests"
      bottom-text="If you don't write any"
      font-size="28px">
    </meme-maker>
    `;
  }
}

customElements.define('flight-card', FlightCard);