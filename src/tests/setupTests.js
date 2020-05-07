import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// Required so that we can use env variables in 'test' setup
// Otherwise, it will use the .env.development firebase credentails which will mean that the tests write to the development DB
// and not the test DB
DotEnv.config({path:'.env.test'});

Enzyme.configure({
    adapter: new Adapter()
});