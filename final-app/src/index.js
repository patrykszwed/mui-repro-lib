import React from 'react';
import {render} from 'react-dom';
import {Autocomplete} from 'my-custom-components-lib'

const App = () => {
    return (
        <div>
            <h1>MUI Repro Example</h1>
            <p>You probably won't be able to see this until commenting out/removing imports from
                "my-custom-components-lib"</p>
            <Autocomplete/>
        </div>
    )
}

render(<App/>, document.getElementById('root'));
