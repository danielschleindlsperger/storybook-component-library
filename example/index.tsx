import * as React from 'react'
import { render } from 'react-dom'
import 'storybook-component-library/dist/index.css'
import { Headline, Text, Button } from 'storybook-component-library'

const App = () => (
  <div>
    <Headline size={72}>Hello!</Headline>
    <Button color="green" onClick={() => alert('Nein du bist cool!')}>
      Klickern ist cool
    </Button>
    <Button loading>Wait for me baby</Button>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid beatae voluptas ducimus
      molestias, consectetur a illo voluptate sed iste necessitatibus eaque quisquam, error ipsam?
      Dolores inventore veritatis possimus, nihil obcaecati distinctio, repellat fugit nemo optio
      odit assumenda beatae ut officiis. Corporis ducimus omnis dolor iure quam quis nostrum labore?
    </Text>
  </div>
)

render(<App />, document.querySelector('#app'))
