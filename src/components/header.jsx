
//***user defined components***
import Nav from "./nav";
// mui components
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// ***libraries***
// ***libraries***
export default function Header() {
  
  return (
    <>
      <header>
        <div className="headerNameDiv">
          <h1>
            ٱلْمَوْقِعُ ٱلرَّسْمِيُّ لِسَمَاحَةِ ٱلشَّيْخِ <br />
            <span>د .حُسَين بن عُودَة العَوايشَة</span>
          </h1>
        </div>
      </header>
      <Nav></Nav>
    </>
  );
}
