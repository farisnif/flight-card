import { html } from 'lit';
import '../src/flight-card.js';

export default {
  title: 'FlightCard',
  component: 'flight-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <flight-card
      style="--flight-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </flight-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
