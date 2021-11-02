import React from 'react';
import gitImg from '../static/img/GitHub-Mark-120px-plus.png';
import linkedinImg from '../static/img/LinedIn-Black/In-Black-128px-R.png';

export default function Foot() {
  return (
    <footer>
      <hr></hr>
      <div className="container">
      <div className="row">
        <div className="col" style={{margin: 'auto'}}>
        </div>
        <div className="col">
          <p className="foot-text" title="And not WordPress :p">
            Proudly made by me!
          </p>
        </div>
        <div className="col">
          <a href="https://github.com/aj3x/">
            <img src={gitImg}
                alt="GitHub"
                title="GitHub"
                // srcset="{gitFoot}-32px.png 32w,
                // {gitFoot}-64px.png 64w,
                // {gitFoot}-120px-plus.png 120w"
                // sizes="(max-width: 32px) 32px,
                //     (max-width: 64px) 64px,
                //     120px"
            />
          </a>
          <a href="https://linkedin.com/in/aj3x/">
            <img src={linkedinImg}
              alt="LinkedIn" 
              title="LinkedIn"
              style={{width: '42px'}}
            />
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}
