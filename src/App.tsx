import React from 'react';
import PublicAppContainer from './public-app/PublicAppContainer';

function App(props: any) {
  return <PublicAppContainer>{props.children}</PublicAppContainer>
}

export default App;
