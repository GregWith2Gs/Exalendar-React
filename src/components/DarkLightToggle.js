import ToggleImage from '../media/toggle.png';
import '../css/DarkLightToggle.css';

const DarkLightToggle = () => {
    return(
        <img id="dark-light-toggle" src={ToggleImage} onClick={changeTheme} alt='Dark/Light Toggle'></img>
    )
};

function changeTheme(){
    var toggle = document.getElementById("dark-light-toggle");
    toggle.onclick = function() {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    };
}



export default DarkLightToggle;