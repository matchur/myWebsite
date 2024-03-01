import React from 'react';
import './gpHabilities.css';
import CpProgramLang from '../cpProgramLang/cpProgramLang';
import CpDevText from '../cpDevText/cpDevText';

const GpHabilities = () => {
    

  return (
       <div className='Group-principalHab'>
      <div className='Group-habilities'>
      <CpDevText title="Eu sou"/>
      <div className='Group-badgesprincipal'> 
            <div className="Group-badges" id="sistemas_operacionais">
            <h4 className='Title-badges' >Sistemas Operacionais:</h4>
            
              <div className="Group-badgescontent">
                <a href="https://www.android.com/">
                    <CpProgramLang img='https://img.shields.io/badge/Android-3DDC84?style=plastic&logo=android&logoColor=white' alt="Android"/> 
                </a>
                <a href="https://www.debian.org/"> 
                    <CpProgramLang img='https://img.shields.io/badge/Debian-A81D33?style=plastic&logo=debian&logoColor=white' alt="Debian"/> 
                </a>
                <a href="https://www.kali.org/">
                    <CpProgramLang img='https://img.shields.io/badge/Kali_Linux-557C94?style=plastic&logo=kali-linux&logoColor=white' alt="Kali Linux"/> 
                </a>
                </div>
                 
                
                <div className="Group-badgescontent">
                <a href="https://www.apple.com/macos">
                    <CpProgramLang img='https://img.shields.io/badge/mac%20os-000000?style=plastic&logo=apple&logoColor=white' alt="macOS"/> 
                </a>
                <a href="https://ubuntu.com/">
                    <CpProgramLang img='https://img.shields.io/badge/Ubuntu-E95420?style=plastic&logo=ubuntu&logoColor=white' alt="Ubuntu"/> 
                </a>
                <a href="https://www.microsoft.com/windows">
                    <CpProgramLang img='https://img.shields.io/badge/Windows-0078D6?style=plastic&logo=windows&logoColor=white' alt="Windows"/> 
                </a>
              </div>
              
            </div>
       
        <div className="Group-badges" id="linguagens_de_programacao"> 
        <h4 className='Title-badges' >Linguagens de Programação:</h4>  
         
     
          <div className="Group-badgescontent">
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">
                <CpProgramLang img='https://img.shields.io/badge/C%23-239120?style=plastic&logo=c-sharp&logoColor=white' alt="C#"/> 
            </a>
            <a href="https://www.python.org/">
                <CpProgramLang img='https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white' alt="Python"/> 
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <CpProgramLang img='https://img.shields.io/badge/HTML-239120?style=plastic&logo=html5&logoColor=white' alt="HTML"/> 
            </a>

            
            </div>
            <div className="Group-badgescontent">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <CpProgramLang img='https://img.shields.io/badge/CSS-239120?&style=plastic&logo=css3&logoColor=white' alt="CSS"/> 
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <CpProgramLang img='https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black' alt="JavaScript"/> 
            </a>
            <a href="https://www.typescriptlang.org/">
                <CpProgramLang img='https://img.shields.io/badge/TypeScript-007ACC?style=plastic&logo=typescript&logoColor=white' alt="TypeScript"/> 
            </a>
            </div>
     
          <div className="Group-badgescontent">

            <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                <CpProgramLang img='https://img.shields.io/badge/C-00599C?style=plastic&logo=c&logoColor=white' alt="C"/> 
            </a>
            <a href="https://www.cplusplus.com/">
                <CpProgramLang img='https://img.shields.io/badge/C%2B%2B-00599C?style=plastic&logo=c%2B%2B&logoColor=white' alt="C++"/> 
            </a>
            <a href="https://www.arduino.cc/">
                <CpProgramLang img='https://img.shields.io/badge/Arduino-00979D?style=plastic&logo=Arduino&logoColor=white' alt="Arduino"/> 
            </a>
            <a href="https://www.java.com/">
                <CpProgramLang img='https://img.shields.io/badge/Java-ED8B00?style=plastic&logo=openjdk&logoColor=white' alt="Java"/> 
            </a>
            </div>
        </div>
        
        <div className="Group-badges" id="frameworks_e_bibliotecas">
          <h4 className='Title-badges' >Frameworks e Bibliotecas:</h4> 
          
          <div className="Group-badgescontent">           
            <a href="https://www.lua.org/">
                <CpProgramLang img='https://img.shields.io/badge/Lua-2C2D72?style=plastic&logo=lua&logoColor=white' alt="Lua"/> 
            </a>
            <a href="https://reactjs.org/">
                <CpProgramLang img='https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB' alt="React"/> 
            </a>
            <a href="https://spring.io/">
                <CpProgramLang img='https://img.shields.io/badge/Spring-6DB33F?style=plastic&logo=spring&logoColor=white' alt="Spring"/> 
            </a>

          </div>
      
          <div className="Group-badgescontent"> 
            <a href="https://www.mysql.com/">
                <CpProgramLang img='https://img.shields.io/badge/MySQL-00000F?style=plastic&logo=mysql&logoColor=white' alt="MySQL"/> 
            </a>
            <a href="https://unity.com/">
                <CpProgramLang img='https://img.shields.io/badge/Unity-100000?style=plastic&logo=unity&logoColor=white' alt="Unity"/> 
            </a>
            <a href="https://www.postgresql.org/">
                <CpProgramLang img='https://img.shields.io/badge/PostgreSQL-316192?style=plastic&logo=postgresql&logoColor=white' alt="PostgreSQL"/> 
            </a>
        </div>
        </div>
        <div className="Group-badges" id="softwares">
          <h4 className='Title-badges' >Softwares:</h4>
          <div className="Group-badgescontent">  
            <a href="https://www.figma.com/">
                <CpProgramLang img='https://img.shields.io/badge/Figma-F24E1E?style=plastic&logo=figma&logoColor=white' alt="Figma"/> 
            </a>
            <a href="https://www.adobe.com/products/xd.html">
                <CpProgramLang img='https://img.shields.io/badge/Adobe%20XD-470137?style=plastic&logo=Adobe%20XD&logoColor=#FF61F6' alt="Adobe XD"/> 
            </a>
            <a href="https://www.adobe.com/products/photoshop.html">
                <CpProgramLang img='https://img.shields.io/badge/Photoshop-31A8FF?style=plastic&logo=Adobe%20Photoshop&logoColor=black' alt="Adobe Photoshop"/> 
            </a>
        </div>
        </div>
    </div>
  </div>
  </div>
  );
}

export default GpHabilities;