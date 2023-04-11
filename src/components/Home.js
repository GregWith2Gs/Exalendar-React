import ReactBigCalendar from './ReactBigCalendar';
import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import Events from './Events';
import Stack from 'react-bootstrap/Stack';
import '../css/Home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {

    return (
        <div>
            <BrowserRouter>
                <Navigation/>
            </BrowserRouter>
            <Stack direction="horizontal" gap={0}>
                <div className="mx-auto"></div> 
                <div className="mx-0">
                    <ReactBigCalendar/>
                </div>
                <div className="mx-auto">
                    <Events/>
                </div>
            </Stack>
        </div>
    );
}

export default Home;
