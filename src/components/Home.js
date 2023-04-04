import ReactBigCalendar from './ReactBigCalendar';
import Navigation from './Navigation';
import { BrowserRouter }  from "react-router-dom";
import Events from './Events';
import Stack from 'react-bootstrap/Stack';
import '../css/Home.css';

function Home() {

    return (
        <div>
            <BrowserRouter>
                <Navigation/>
            </BrowserRouter>
            <Stack direction="horizontal" gap={5}>
                <div> </div>
                <div className="ms-5">
                    <ReactBigCalendar  />
                </div>
                <div className="ms-5">
                    <Events />
                </div>
            </Stack>
        </div>
    );
}

export default Home;