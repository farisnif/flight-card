import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const planePhoto = new URL(
  "https://media.cntraveler.com/photos/576834ff90b3537d7c010c05/16:9/w_2560%2Cc_limit/GettyImages-162672165.jpg"
).href;
const memeImage = new URL(
  "https://s.yimg.com/ny/api/res/1.2/CH9YrAZ77gXGiwcoWwhtDQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMw--/https://media.zenfs.com/en_US/News/TheWrap/LeBron_Screaming_Meme_Will_Help-498ec79d8185bca477d11846d7de03fa"
).href;
export class FlightCard extends LitElement {
  static get properties() {
    return {
      version: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.name = "Boeing 787";
    this.location = "Cleveland";
    this.maxSpeed = "500mph";
    this.maxAltitude = "40,000ft";
    this.planeStatement =
      "This is a photo of a Boeing 787 taking off in " +
      this.location +
      ". This plane has a maximum speed of " +
      this.maxSpeed +
      ", and maximum altitude of " +
      this.maxAltitude +
      ".";
    this.memeTop = "LeComplainer";
    this.memeBottom = "this is for you";
  }

  static get styles() {
    return css`
      /* :host([accent-color="blue"]) .card {
        background-color: blueviolet;
        color: white;
      } */

      .crd {
        padding: 12px;
        background-color: skyblue;
        border-radius: 12px;
        border: 6px solid black;
        max-width: 300px;
        float: left;
      }
      .image {
        width: 100%;
      }
      h1 {
        font-size: 30px;
        text-align: var(--team-card-wrapper-text-align, center);
      }
      h2 {
        font-size: 18px;
        text-align: center;
      }
      .buttons {
        margin: 0;
        text-align: center;
        display: none;
        clear: both;
      }
      .details {
        display: block;
        margin: 0 auto;
        text-align: center;
        background-color: navajowhite;
      }
      p {
        text-align: center;
      }
      @media (min-width: 500px) and (max-width: 800px) {
        .details {
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
      .details:hover {
        background: linear-gradient(
          to right,
          red,
          yellow,
          lightseagreen,
          white,
          lightseagreen,
          yellow,
          red
        );
      }

      .somethingelse {
        font-size: 18px;
        display: block;
        margin: 0;
      }
      .somethingelse:hover {
        background-color: orange;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
      .somethingelse:focus {
        background-color: orange;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
      .addOne {
        font-size: 18px;
        display: block;
        margin: 0;
      }
      .addOne:hover {
        background-color: lightseagreen;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
      .addOne:focus {
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
      .remove:focus {
        background-color: green;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      }
      .colorChanger {
        font-size: 18px;
        display: block;
        margin: 0;
      }
      .colorChanger:hover {
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
      .colorChanger:focus {
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

  toggleDetails() {
    this.shadowRoot.querySelector(".details").toggleAttribute("open");
  }

  render() {
    return html`
      <div class="crd">
        <div class="container">
          <div class="header">
            <h1>${this.name}</h1>
          </div>
          <img class="image" src="${planePhoto}" alt="A picture" />
          <div class="subheader">
            <h2>Location: ${this.location}</h2>
            <h2>Max Speed: ${this.maxSpeed}</h2>
            <h2>Max Altitude: ${this.maxAltitude}</h2>
          </div>
        </div>

        <!-- <div class="paragraph">
          <p>${this.planeStatement}</p>
        </div> -->

        <!-- <button class="details">Details</button> -->

        <details class="details">
          <p>${this.planeStatement}</p>
          <slot></slot>
        </details>

        <meme-maker
          part="meme webcomponent stuff"
          image-url="${memeImage}"
          top-text="${this.memeTop}"
          bottom-text=" ${this.location} ${this.memeBottom}"
          font-size="28px"
        >
        </meme-maker>
      </div>
    `;
  }
}

customElements.define("flight-card", FlightCard);
