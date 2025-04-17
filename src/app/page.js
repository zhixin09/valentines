"use client"
import { useState } from 'react';
import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const [mailSrc, setMailSrc] = useState('mail_closed.png');
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [isYes, setIsYes] = useState(false);


  const handleMailClick = () => {
    setMailSrc((prevSrc) => (prevSrc === 'mail_closed.png' ? 'mail_opened.png' : 'mail_closed.png'));
  };

  const handleNoClick = () => {
    var x = Math.floor(Math.random()*300)+1;
    var y = Math.floor(Math.random()*400)+1;
    setIsNoClicked(true);
    
    const linkElement = document.querySelector('#no');
    linkElement.style.position = 'absolute';
    linkElement.style.right = `${x}px`;
    linkElement.style.bottom = `${y}px`;
  };

  const handleYes = () => {
    setIsYes(true);

  }
  return (
    <>
    { !isYes ?
      <>
        <div className="mail">
          <img 
            src={mailSrc}
            alt="Mail"
            width={500}
            onClick={handleMailClick}
            className={mailSrc === 'mail_closed.png' ? 'mail-hover' : ''}
            />
          <h1 className={pacifico.className}> 
            You got mail!
          </h1>
        </div>
        <img
          src="heart.png"
          width={200}
          className={`heart ${mailSrc === 'mail_opened.png' ? '' : 'hidden'}`}
        />

        <div className={`form absolute max-w-[800px] text-md p-10 ${mailSrc === 'mail_opened.png' ? '' : 'hidden'}`}>
          <h4 className={pacifico.className}>Dear, Yiling {`<3`}</h4>
          <br />
          <h4 className={pacifico.className}>Will you be my girlfriend!</h4>
          <br />
          <h4 className={pacifico.className}>Love, Zhixin</h4>
          <div className='yesno'>
            <a  
              className={`yes relative z-10 ${pacifico.className}`}
              onClick={handleYes}
            >
              Yes
            </a>
            <a
              id="no"
              className={`no ${isNoClicked ? 'absolute-position' : ''} ${pacifico.className}`}
              onClick={handleNoClick}
            >
              No
            </a>
            <a
              className={` ${isNoClicked ? 'invisible' : 'hidden'}`}
            >
              No
            </a>
              </div>
        </div>
      </>
      :
      <div className='text-center flex flex-col items-center'>
        <h4 className={pacifico.className}>Yay! I love you</h4>
        <br />
        <h4 className={pacifico.className}>Can’t wait to see you tomorrow!</h4>
        <br />
        <h4 className={pacifico.className}>Have a safe and wonderful flight!</h4>
        <br />
        <img width={150} src="sugarcubs-sugar.gif"/>
        <h5 className={pacifico.className}>Muah muah!</h5>
      </div>
      }
    </>
  );
}
