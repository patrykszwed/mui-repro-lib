import {render} from 'react-dom';
import {Autocomplete} from 'my-custom-components-lib'

const App = () => {
    return (
        <Autocomplete/>
    )
}

render(<App/>, document.getElementById('root'));
