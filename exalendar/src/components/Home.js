function Home() {
    return (
        <html>
            
            <body onload="loadMain()">
                <div id="modal"></div>
                <div id="sidebar">
                    <button id="buttonBar" style="border-color: rgb(199, 40, 40)" onclick="opencloseNav()">☰</button>
                    <h2 style="margin-top:20px;">Exalendar Menu</h2>
                    <ul id="exalendarMenu"> 
                        
                        
                    </ul>
                    <h2>Other Menu</h2>
                    <ul>
                        
                    </ul>
                </div>
                <script type="module" src="./js/sidebar.js"></script>
                
                <iframe class="calendar" src="./ReactBigCalendar"></iframe>
                
                <div id="addevent-menu">
                    <button onclick="closeAddEvent()">X</button>
                    <h3>Add Event</h3>
                    <div id="content-box">
                    <form action="/submit-event" method="post">
                        <label for="eclass">Class:</label>
                        <select name="eclass">
                            <option disabled selected>Choose class</option>
                            <option value="tbd">Program in classes as appropriate for user</option>
                        </select><br/>
                        <label for="ename">Event Name:</label>
                        <input type="text" name="ename"/><br/>
                        <label for="edate">Date:</label>
                        <input type="date" name="edate"/>
                        <label for="etime">Time:</label>
                        <input type="time" name="etime"/><br/>
                        <label for="etype">Type:</label>
                        <select name="etype">
                            <option disabled selected>Choose event type</option>
                            <option value="homework">Homework</option>
                            <option value="quiz">Quiz</option>
                            <option value="testexam">Test/Exam</option>
                            <option value="project">Project</option>
                        </select><br/>
                        <label for="edetails">Details:</label><br/>
                        <textarea name="edetails"></textarea><br/>
                        <input type="submit" value="Submit"></input>
                    </form>
                    </div>
                </div>
                <div class="noteContain">
                    <h1 class="noteHeader">Exalendar </h1>
                    <h2 class="center-header">
                        <button id="addevent-btn" onclick="openAddEvent()">+</button>
                        <span id = "noteDate">a</span></h2> 
                        
                    
                    <div class="noteLeft" style = "float: left;">


                        <ul>
                            <label class="noteList"><h3 style="color: black;">Events</h3></label>
                            <li class="noteList">Event 1 - all day</li>
                            <li class="noteList">Event 2 - 12PM - 3PM</li>
                            <li class="noteList"> </li>
                            <li class="noteList"> </li>
                            <li class="noteList"> </li>
                        </ul>
                    </div>
                    <div class="noteRight" style = "float: right;">
                        <ul>
                            <label class="noteList"><h3 style="color: black">Tier</h3></label>
                            <li class="noteList">Low</li>
                            <li class="noteList">High</li>
                            <li class="noteList"> </li>
                            <li class="noteList"> </li>
                            <li class="noteList"> </li>
                        </ul>
                    </div>
                </div>
                <script src="../js/mainPage.js"></script>
                </body>
                <footer class="footer">
                    <nav class="menu">
                        <ul>
                            <li><a href="profile.html">Home</a></li> 
                            <li><a href="https://github.com/NatSR4/Exalendar/wiki/What-is-Exalendar%3F" target="_blank">About</a></li> 
                            <li><a href= "https://rcos.io/" target= "_blank">RCOS</a></li> 
                            <li><a href= "https://github.com/NatSR4/Exalendar" target = "_blank" id="gitcat" title="GitHub" aria-label="GitHub"><img src="./media/gitcat.svg"/></a></li> 
                        </ul>
                        <span>&copy; 2021 | Exalendar</span>
                    </nav>
                </footer>
        </html>
    );
}

export default Home;