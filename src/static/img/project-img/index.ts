import defaultImg from './default.png';
import bomber from './bomber_screen.png'
import dwarves from './dwarves_title.png';
import gamejam from './gamejam_screen.png';
import gamejam2018 from './gamejam2018-screenshot.png';
import sudoku from './SquareSudokuSolver.gif';
import web from './web.png';

const images:{[key:string]: string|undefined} = {
  bomber,
  dwarves,
  gamejam,
  gamejam2018,
  sudoku,
  web,
  default: defaultImg,
};
export default images;
